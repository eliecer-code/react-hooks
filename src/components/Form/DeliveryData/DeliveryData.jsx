import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { validateCity, validateAddrees } from '../../../helpers/validations'

function DeliveryData({ updateStep }) {

    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [errors, setErrors] = useState({
        address: {
            error: false,
            message: "Direccion erronea"
        },
        city: {
            error: false,
            message: "Ciudad no encontrada"
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errors.address.error === false && errors.city.error === false) {
            updateStep(3)
            console.log(address, city)
        }
    }

    const handlerAddressBlus = (e) => {
        const addressValidate = validateAddrees(e.target.value)
        setErrors({ ...errors, address: addressValidate })
    }

    const handlerCityBlur = (e) => {
        const cityValidate = validateCity(e.target.value)
        setErrors({ ...errors, city: cityValidate })
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
                id="address"
                label="Address"
                type='text'
                error={errors.address.error}
                helperText={errors.address.error ? errors.address.message : ''}
                onChange={(e) => {
                    const address = e.target.value
                    setAddress(address)
                }}
                onBlur={handlerAddressBlus}
            />
            <TextField
                required
                fullWidth
                id="city"
                label="City"
                type='text'
                error={errors.city.error}
                helperText={errors.city.error ? errors.city.message : ""}
                onChange={(e) => {
                    const city = e.target.value
                    setCity(city)
                }}
                onBlur={handlerCityBlur}
            />
            < Button type='submit' variant="contained" color="primary" fullWidth size='large' >
                Create Account
            </Button >
        </Box >
    )
}

export default DeliveryData