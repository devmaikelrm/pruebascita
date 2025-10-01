
import axios from 'axios';

// The JSONP API URL we discovered. 
// We remove the random callback and timestamp parts, as they are not always necessary 
// when fetching directly and can be generated if needed.
// This function generates a URL that closely mimics the original JSONP request.
function getFinalApiUrl() {
  const publicKey = '2f21cd9c0d8aa26725bf8930e4691d645';
  const serviceId = 'bkt195382';
  const callbackName = `jQuery${Math.random().toString().replace(/\./g, '')}_${Date.now()}`;
  const timestamp = Date.now();

  return `https://www.citaconsular.es/onlinebookings/main/?callback=${callbackName}&type=default&publickey=${publicKey}&lang=es&services%5B%5D=${serviceId}&version=5&_=${timestamp}`;
}

async function testApi() {
  const API_URL = getFinalApiUrl();
  console.log(`[API Client] Calling hyper-realistic API: ${API_URL}`);

  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.citaconsular.es/'
    };

    const response = await axios.get<string>(API_URL, { headers });
    const responseText = response.data;

    console.log('\n[API Client] Received raw JSONP response (first 100 chars):');
    console.log(responseText.substring(0, 100) + '\n');

    // Step 2: Manually parse the JSONP response to extract the JSON object
    const firstParen = responseText.indexOf('(');
    const lastParen = responseText.lastIndexOf(')');

    if (firstParen === -1 || lastParen === -1) {
      throw new Error('Invalid JSONP response format: parentheses not found.');
    }

    const jsonString = responseText.substring(firstParen + 1, lastParen);

    // Step 3: Parse the extracted string into a usable JSON object
    const data = JSON.parse(jsonString);

    console.log('[API Client] ✅ Success! Parsed JSON data:');
    // Use console.dir for a nice, clean object view
    console.dir(data, { depth: null });

  } catch (error) {
    console.error('\n[API Client] ❌ An error occurred:', error);
  }
}

testApi();
