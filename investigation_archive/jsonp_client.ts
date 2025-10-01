import axios from 'axios';

/**
 * A robust client for fetching and parsing data from the Bookitit JSONP API.
 * Includes retry logic with exponential backoff.
 */

// --- Configuration ---
const BASE_URL = 'https://www.citaconsular.es/onlinebookings/main/';
const PUBLIC_KEY = '2f21cd9c0d8aa26725bf8930e4691d645';

/**
 * Parses a JSONP response string to extract the JSON object.
 * @param text The raw JSONP response string (e.g., "callback({...})").
 * @returns The parsed JavaScript object.
 * @throws An error if the format is not valid JSONP.
 */
function parseJSONP(text: string): any {
  const firstParen = text.indexOf('(');
  const lastParen = text.lastIndexOf(')');

  if (firstParen === -1 || lastParen === -1) {
    console.error("Invalid JSONP format detected. Raw text:", text);
    throw new Error('Invalid JSONP response format: parentheses not found.');
  }

  const jsonString = text.substring(firstParen + 1, lastParen);
  return JSON.parse(jsonString);
}

/**
 * Fetches appointment data from the Bookitit JSONP API for a given service.
 * Includes retry logic with exponential backoff.
 * @param serviceId The ID of the service to fetch (e.g., 'bkt195382').
 * @param maxRetries The maximum number of times to retry on failure.
 * @returns A promise that resolves with the appointment data.
 */
async function fetchAppointmentData(serviceId: string, maxRetries: number = 3): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // 1. Build the dynamic URL for each request
      const callbackName = `jQuery${Math.random().toString().replace(/\./g, '')}_${Date.now()}`;
      const timestamp = Date.now();
      const apiUrl = `${BASE_URL}?callback=${callbackName}&type=default&publickey=${PUBLIC_KEY}&lang=es&services%5B%5D=${serviceId}&version=5&_=${timestamp}`;

      console.log(`[Attempt ${attempt}] Calling API: ${apiUrl}`);

      // 2. Make the GET request with a browser-like User-Agent
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.citaconsular.es/'
      };
      const response = await axios.get<string>(apiUrl, { headers });

      // 3. Extract and parse the JSON from the JSONP response
      const data = parseJSONP(response.data);

      // 4. Check for API-level exceptions
      if (data.Exception) {
        throw new Error(`API returned an exception: ${data.Exception.errors[0]?.message || 'Unknown API Error'}`);
      }

      // 5. Success! Return the data.
      return data;

    } catch (error: any) {
      console.warn(`[Attempt ${attempt}] Failed: ${error.message}`);
      if (attempt === maxRetries) {
        console.error('All retry attempts failed.');
        throw error; // Re-throw the last error
      }

      // Implement exponential backoff for retries
      const delay = 1000 * (2 ** (attempt - 1)); // 1s, 2s, 4s, ...
      console.log(`Waiting ${delay / 1000}s before next retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// --- Example Usage ---

async function main() {
  const serviceToFetch = 'bkt195382'; // Service for "Certificación de Nacimiento"

  console.log(`--- Fetching data for service: ${serviceToFetch} ---`);

  try {
    const appointmentData = await fetchAppointmentData(serviceToFetch);
    console.log('\n✅ --- SUCCESS! --- ✅');
    console.log('Successfully fetched and parsed appointment data:');
    console.dir(appointmentData, { depth: null });

    // Example of how to access the calendar data
    const calendar = appointmentData?.agendas?.[0]?.calendar;
    if (calendar) {
        console.log('\n--- Calendar Data --- ');
        console.log(calendar);
    }

  } catch (finalError) {
    console.error('\n❌ --- FAILED --- ❌');
    console.error('Could not fetch appointment data after all retries:', finalError);
  }
}

main();
