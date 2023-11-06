export const validationName = (value: string): string  => {
    if (!value) {
        return "Имя не может быть пустым";
    }
    if (value.length < 4) {
        return "Имя должно содержать как минимум 4 символа";
    }
    if (!/[A-Z]/.test(value)) {
        return "Имя должно начинаться с заглавной буквы";
    }
    const uniqueLetters = new Set(value.toLowerCase());
    if (uniqueLetters.size < 3) {
        return "Имя должно содержать как минимум три разные буквы";
    }
    return ''
};
export const validationEmail = (value: string): string  => {
    const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!value) {
        return "Email не может быть пустым";
    }
    if (!emailRegExp.test(value)) {
        return "Неправильный формат email-адреса";
    }
    return ''
};
export const validationPosition = (value: string): string  => {
    if (value && value.trim() !== '') {
    } else {
        return "Должность не может быть пустой";
    }
    return ''
};
export const validationPassword = (value: string): string => {
    if (!value) {
        return "Пароль не может быть пустым";
    }
    if (value.length < 6) {
        return "Пароль должен содержать как минимум 6 символов";
    }
    if (!/\d/.test(value)) {
        return "Пароль должен содержать хотя бы одну цифру";
    }
    return ''
};
export const validationPasswordRepeat = (value: string, originalPassword: string): string  => {
    if (value !== originalPassword) {
        return "Пароли не совпадают";
    }
    return ''
};