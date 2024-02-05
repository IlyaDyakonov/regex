import ValidatorPhone from "../phone";

const validPhone = new ValidatorPhone();

test('Проверка изменения формата телефона', () => {
    const phoneNumbers = [
        ["8 (927) 000-00-00", '+79270000000'],
        ['+7 960 000 00 00', '+79600000000'],
        ['+86 000 000 0000', '+860000000000']
    ]

    phoneNumbers.forEach(([phone, expends]) => {
        expect(validPhone.validatePhone(phone)).toBe(expends);
    });
})

test('Проверка неправильного формата номера телефона', () => {
    expect(validPhone.validatePhone('123456789')).toBe('123456789');
    expect(validPhone.validatePhone('abc')).toBe('');
    expect(validPhone.validatePhone('')).toBe('');
});