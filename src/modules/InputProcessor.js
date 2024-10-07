/**
 * 预处理输入数据
 * @param {string} rawInput - 原始输入数据
 * @returns {string} - 格式化后的数据
 */
function preprocessInput(rawInput) {
    // 假设的预处理逻辑
    console.log(`Preprocessing raw input: ${rawInput}`);
    const formattedData = rawInput.trim().toLowerCase();
    return formattedData;
}

module.exports = { preprocessInput };