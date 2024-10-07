import axios from 'axios';

// ModuleA.js
export async function fetchDataFromAPI(endpoint) {
    try {
        const response = await axios.get(endpoint);
        console.log(`Data fetched from API: ${response.data}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from API: ${error}`);
        throw error;
    }
}

export function processData(input) {
    // 假设的处理逻辑
    console.log(`Processing input: ${input}`);
    return `Processed ${input}`;
}