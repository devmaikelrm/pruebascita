console.log('INICIANDO TEST TURISMO')

const axios = require('axios')

async function test() {
  console.log('Probando API de turismo...')
  
  try {
    const url = 'https://citaconsular.es/onlinebookings/datetime/?callback=test&publickey=28db94e270580be60f6e00285a7d8141f&services[]=bkt873048&start=2025-01-05&end=2025-02-05&_=' + Date.now()
    
    console.log('URL:', url)
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    })
    
    console.log('Status:', response.status)
    console.log('Data length:', response.data.length)
    console.log('Data:', response.data.substring(0, 200))
    
  } catch (error) {
    console.log('Error:', error.message)
    if (error.response) {
      console.log('Status:', error.response.status)
      console.log('Data:', error.response.data)
    }
  }
}

test()
