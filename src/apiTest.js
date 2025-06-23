// Star Wars API Test File

// Test 1: Basic API Call
async function testBasicAPI() {
    try {
        // const response = await fetch('https://swapi.dev/api/starships/');
        const response = await fetch('https://swapi.py4e.com/api/starships/');
        const data = await response.json();
        console.log('Test 1 - Basic API Call:', data);
        console.log('Status:', response.status);
        console.log('Headers:', response.headers);
    } catch (error) {
        console.error('Test 1 Error:', error);
    }
}

// Test 2: Belirli Bir Yıldız Gemisini Al
async function testSpecificStarship() {
    try {
        // const response = await fetch('https://swapi.dev/api/starships/2/');
        const response = await fetch('https://swapi.py4e.com/api/starships/2/');
        const data = await response.json();
        console.log('Test 2 - Specific Starship:', data);
    } catch (error) {
        console.error('Test 2 Error:', error);
    }
}

// Test 3: Arama İşlevselliği
async function testSearch() {
    try {
        // const response = await fetch('https://swapi.dev/api/starships/?search=millennium');
        const response = await fetch('https://swapi.py4e.com/api/starships/?search=millennium');
        const data = await response.json();
        console.log('Test 3 - Search Results:', data);
    } catch (error) {
        console.error('Test 3 Error:', error);
    }
}

// Test 4: Sayfalama Testi
async function testPagination() {
    try {
        // const response = await fetch('https://swapi.dev/api/starships/?page=2');
        const response = await fetch('https://swapi.py4e.com/api/starships/?page=2');
        const data = await response.json();
        console.log('Test 4 - Pagination:', data);
    } catch (error) {
        console.error('Test 4 Error:', error);
    }
}

// Tüm testleri çalıştır
async function runAllTests() {
    console.log('Starting API Tests...');
    await testBasicAPI();
    await testSpecificStarship();
    await testSearch();
    await testPagination();
    console.log('All tests completed!');
}
runAllTests(); 