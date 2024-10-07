import { processData } from '../modules/ModuleA';
import { storeData } from '../modules/ModuleB';

export function executePlugin(input) {
    const processedData = processData(input);
    const result = storeData(processedData);
    return result;
}