import { executePlugin } from './plugins/PluginX';
import { fetchDataFromAPI } from './modules/ModuleA';

async function main() {
    const apiEndpoint = 'https://api.example.com/data';
    try {
        const apiData = await fetchDataFromAPI(apiEndpoint);
        const result = executePlugin(apiData);
        console.log(result); // 输出: Stored Processed data from API
    } catch (error) {
        console.error('Failed to execute plugin with API data:', error);
    }
}

main();