
interface ValidationRules {
    required: boolean
    validator?: (value: any) => boolean
    message?: string
}

export interface ValidationSchema {
    [key: string]: ValidationRules
}

interface ValidateErrors {
    [key: string]: string
}

export const validateFormData = (formData: FormData, schema: ValidationSchema) => {
    const errors: ValidateErrors = {};

    for (const [field, rule] of Object.entries(schema)) {
        const value = formData.get(field);
        console.log("value", value);
        if ((!value || value === '') && rule.required) {
            errors[field] = `Поле обязательно`
            //continue
        }
        if (value && rule?.validator && !rule.validator(value)) {
            errors[field] = rule?.message || 'Введите корректное значение'
        }
        
    }
    return errors;
}