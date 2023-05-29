import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Box, TextField } from '@mui/material'
import { validateLastName, validateName, validatePhone } from '../../../helpers/validations'

function PersonalInformation({ updateStep }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "El nombre debe contener al menos 3 letras"
        },
        lastName: {
            error: false,
            message: "El apellido debe contener al menos 3 letras"
        },
        phone: {
            error: false,
            message: "Ingrese un número telefonico válido"
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.name.error === false && errors.lastName.error === false && errors.phone.error === false) {
            updateStep(2)
            console.log(name, lastName, phone)
        }
    }

    const handlerNameBlur = (e) => {
        const nameValidate = validateName(e.target.value);
        setErrors({ ...errors, name: nameValidate })
    }
    const handlerLastNameBlur = (e) => {
        const lastNameValidate = validateLastName(e.target.value);
        setErrors({ ...errors, lastName: lastNameValidate })
    }
    const handlerPhoneBlur = (e) => {
        const phoneValidate = validatePhone(e.target.value);
        setErrors({ ...errors, phone: phoneValidate })
    }
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                margin: "0 80px"
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                required
                fullWidth
                id="nombre"
                label="Name"
                type='text'
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ''}
                onChange={(e) => setName(e.target.value)}
                onBlur={handlerNameBlur}
            />
            <TextField
                required
                fullWidth
                id="LastName"
                label="Last Name"
                type='text'
                error={errors.lastName.error}
                helperText={errors.lastName.error ? errors.lastName.message : ''}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handlerLastNameBlur}
            />
            <TextField
                required
                fullWidth
                id="phone"
                label="Phone number"
                type='number'
                error={errors.phone.error}
                helperText={errors.phone.error ? errors.phone.message : ''}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={handlerPhoneBlur}
            />
            < Button type='submit' variant="contained" color="primary" fullWidth size='large' >
                Next
            </Button >
        </Box >
    )
}

export default PersonalInformation