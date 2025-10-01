
import axios from 'axios';

// This file encapsulates the logic for interacting with the Bookitit JSONP API.

const DATETIME_API_URL = 'https://www.citaconsular.es/onlinebookings/datetime/';
const PUBLIC_KEY = '2f21cd9c0d8aa26725bf8930e4691d645';
const SERVICE_ID = 'bkt195382';
const AGENDA_ID = 'bkt93764'; // From the user's recorded script

/**
 * Parses a JSONP response string to extract the JSON object.
 */
function parseJSONP(text: string): any {
  const firstParen = text.indexOf('(');
  const lastParen = text.lastIndexOf(')');
  if (firstParen === -1 || lastParen === -1) {
    // Log the invalid text for debugging, but don't flood the console.
    console.error('Invalid JSONP format detected. Raw text (first 500 chars):', text.substring(0, 500));
    throw new Error('Invalid JSONP response format: parentheses not found.');
  }
  const jsonString = text.slice(firstParen + 1, lastParen);
  return JSON.parse(jsonString);
}

/**
 * An interface for a clean appointment slot object.
 */
export interface AppointmentSlot {
    date: string;
    time: string;
}

/**
 * Fetches available appointment slots for a given date range from the Bookitit API.
 * 
 * @param startDate The start date in YYYY-MM-DD format.
 * @param endDate The end date in YYYY-MM-DD format.
 * @returns A promise that resolves to an array of available appointment slots.
 */
export async function getAvailableSlots(startDate: string, endDate: string): Promise<AppointmentSlot[]> {
  // 1. Build the dynamic URL, mimicking the user's recorded request
  const callbackName = `jQuery${Math.random().toString().replace(/\./g, '')}_${Date.now()}`;
  const params = new URLSearchParams({
    callback: callbackName,
    type: 'default',
    publickey: PUBLIC_KEY,
    lang: 'es',
    'services[]': SERVICE_ID,
    'agendas[]': AGENDA_ID,
    version: '5',
    start: startDate,
    end: endDate,
    selectedPeople: '1',
    '_': Date.now().toString()
  });
  const url = `${DATETIME_API_URL}?${params.toString()}`;

  console.log(`[ApiService] Calling API for date range ${startDate} to ${endDate}`);

  // 2. Make the request with appropriate headers
  const headers = {
    'Accept': '*/*',
    'Referer': 'https://www.citaconsular.es/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
    // Note: We are intentionally omitting the hardcoded Cookie from the example
    // to see if the request works without it, as cookies are session-specific.
  };

  const response = await axios.get<string>(url, { headers });

  // 3. Parse the JSONP response
  const data = parseJSONP(response.data);

  // 4. Check for API-level exceptions
  if (data.Exception) {
    throw new Error(`API returned an exception: ${data.Exception.errors[0]?.message || 'Unknown API Error'}`);
  }

  // 5. Process the data and return a clean array of slots
  const availableSlots: AppointmentSlot[] = [];
  if (data && typeof data === 'object') {
    for (const date in data) {
        // Check if the key is a date (YYYY-MM-DD) and the value is an array
        if (/^\d{4}-\d{2}-\d{2}$/.test(date) && Array.isArray(data[date])) {
            for (const slot of data[date]) {
                if(slot.time) {
                    availableSlots.push({ date: date, time: slot.time });
                }
            }
        }
    }
  }

  return availableSlots;
}

// --- Example Usage ---

async function main() {
  console.log('--- Testing the new ApiService --- ');
  try {
    // Let's test for a future month, as per the user's example
    const slots = await getAvailableSlots('2026-06-01', '2026-06-30');
    
    if (slots.length > 0) {
        console.log(`\n✅ --- SUCCESS! Found ${slots.length} available slots --- ✅`);
        console.dir(slots);
    } else {
        console.log('\n✅ --- SUCCESS! --- ✅');
        console.log('The API call was successful, but no appointment slots were found in the selected date range.');
    }

  } catch (error) {
    console.error('\n❌ --- FAILED --- ❌');
    console.error('Could not fetch appointment data:', error);
  }
}

main();
