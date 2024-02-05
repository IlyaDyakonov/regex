export default class ValidatorPhone {
    validatePhone(phone) {
    // Удаление всех символов, кроме цифр
        phone = phone.replace(/\D/g, '');
        
        // Проверка на длину номера и префикс
        if (phone.length === 11 && (phone.startsWith('7') || phone.startsWith('8'))) {
            return '+7' + phone.slice(1, 11);
        } else if (phone.length === 12) {
            // Добавление символа + перед префиксом 86 и разделение номера на группы
            return '+' + phone.slice(0, 12);
        } else {
            // В случае неправильного формата возвращаем исходный номер
            return phone;
        }
    }
}
