import Validator from "../nickname";

const valid = new Validator();

test('Проверка регулярного выражения', () => {
    const nicknameTests = [
        ["user_user-as-", false],
        ["user123", false],
        ["123user", false],
        ["user-123", false],
        ["user1234user", false],
        ["1user", false],
        ["-user", false],
        ["_user", false],
        ["user-", false],
        ["user_", false],
        ["us123_-er", true],
        ["use121r", true],
        ["us123__er", false],
        ["use--121r", false]
    ];

    nicknameTests.forEach(([nickname, expends]) => {
        expect(valid.validateUsername(nickname)).toBe(expends);
    });
});