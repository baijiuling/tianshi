const { preprocessInput } = require('../src/modules/InputProcessor');

describe('InputProcessor Module', () => {
    test('should trim and lowercase the input', () => {
        const rawInput = '  Sample Data  ';
        const expectedOutput = 'sample data';
        expect(preprocessInput(rawInput)).toBe(expectedOutput);
    });

    // 根据 modread.md 中的要求添加更多测试用例
    test('should handle empty input', () => {
        const rawInput = '   ';
        const expectedOutput = '';
        expect(preprocessInput(rawInput)).toBe(expectedOutput);
    });

    test('should handle already formatted input', () => {
        const rawInput = 'formatted';
        const expectedOutput = 'formatted';
        expect(preprocessInput(rawInput)).toBe(expectedOutput);
    });
});