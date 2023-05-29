//UserData validations

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return {
            error: false,
            message: '',
        };
    } else {
        return {
            error: true,
            message: 'No se reconoce como un correo válido',
        };
    }
}

export function validatePassword(password) {
    if (password.length < 8) {
        return {
            error: true,
            message: "La contraseña debe tener al menos 8 caracteres",
        };
    } else if (!/\d/.test(password)) {
        return {
            error: true,
            message: "La contraseña debe contener al menos un número",
        };
    } else if (!/[a-zA-Z]/.test(password)) {
        return {
            error: true,
            message: "La contraseña debe contener al menos una letra",
        };
    } else {
        return {
            error: false,
            message: "",
        };
    }

}

// PersonalInformation validations

export function validateName(name) {
    if (name.length < 3) {
        return {
            error: true,
            message: "El nombre debe contener al menos 3 letras"
        };
    } else {
        return {
            error: false,
            message: "",
        }
    }
}
export function validateLastName(lastname) {
    if (lastname.length < 3) {
        return {
            error: true,
            message: "El apellido debe contener al menos 3 letras"
        };
    } else {
        return {
            error: false,
            message: "",
        }
    }
}

export function validatePhone(phone) {
    if (phone.length < 10) {
        return {
            error: true,
            message: "Ingrese un número telefonico válido"
        };
    } else {
        return {
            error: false,
            message: "",
        }
    }
}

/* DeliveryData validations */

export const validateAddrees = (addrees) => {
    if (addrees.length < 5) {
        return {
            error: true,
            message: "Direccion erronea"
        }
    } else {
        return {
            error: false,
            message: ""
        }
    }
}

export const validateCity = (city) => {
    if (city.length < 5) {
        return {
            error: true,
            message: "Ciudad no encontrada"
        }
    } else {
        return {
            error: false,
            message: ""
        }
    }
}