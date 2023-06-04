import { Box, TextField, Button } from '@mui/material'
import React, { useState, useContext } from 'react'
import { CounterContext } from '../../../context'

function Steps({ data, step }) {
    const { inputs, buttonText, onSubmit } = data
    const counterData = useContext(CounterContext);
    console.log(counterData)

    /* const handleEmailBlur = (e) => {
        const emailValidation = validateEmail(e.target.value);
        setErrors({ ...errors, email: emailValidation });
    };

    const handlePasswordBlur = (e) => {
        const passwordValidation = validatePassword(e.target.value);
        setErrors({ ...errors, password: passwordValidation });
    }; */
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                margin: "0 80px"
            }}
        >
            <strong>The counter value is: {counterData.count}</strong>
            {inputs.map((input, i) => {
                const { label, type, value, helperText, onChange } = input
                return (
                    <TextField
                        key={i}
                        fullWidth
                        label={label}
                        type={type}
                        value={value}
                        onChange={(e) => onChange(e, i, step)}
                        // error={errors.email.error}
                        helperText={helperText}
                    // onBlur={handleEmailBlur}
                    />
                )
            })}
            {/* <TextField
                required
                fullWidth
                id="email"
                label="Email"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email.error}
                helperText={errors.email.error ? errors.email.message : ''}
                onBlur={handleEmailBlur}
            />
            <TextField
                required
                fullWidth
                id="password"
                label="Password"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password.error}
                helperText={errors.password.error ? errors.password.message : ''}
                onBlur={handlePasswordBlur}
            /> */}
            <Button type='submit' variant="contained" color="primary" fullWidth size='large'>
                {buttonText}
            </Button>
        </Box>
    )
}

export default Steps