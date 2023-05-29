import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { validateEmail, validatePassword } from '../../../helpers/validations';

function UserData(props) {
  const { updateStep } = props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: {
      error: false,
      message: "It is not recognized as a valid email"
    },
    password: {
      error: false,
      message: "Password must contain at least 8 characters"
    }
  });

  /*  function validateEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (emailRegex.test(email)) {
       return {
         ...errors,
         email: {
           error: false,
           message: '',
         },
       };
     } else {
       return {
         ...errors,
         email: {
           error: true,
           message: 'No se reconoce como un correo válido',
         },
       };
     }
   }
   function validatePassword(password) {
     if (password.length >= 8) {
       return {
         ...errors,
         password: {
           error: false,
           message: ''
         }
       }
     } else {
       return {
         ...errors,
         password: {
           error: true,
           message: "Password must contain at least 8 characters "
         }
       }
     }
   } */
  const handleSumbit = (e) => {
    e.preventDefault();
    if (errors.email.error === false && errors.password.error === false) {
      console.log({ mensajes: { email, password } })
      updateStep(1)
    }
  }
  const handleEmailBlur = (e) => {
    const emailValidation = validateEmail(e.target.value);
    setErrors({ ...errors, email: emailValidation });
  };

  const handlePasswordBlur = (e) => {
    const passwordValidation = validatePassword(e.target.value);
    setErrors({ ...errors, password: passwordValidation });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSumbit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        margin: "0 80px"
      }}
    >
      <TextField
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
      />
      <Button type='submit' variant="contained" color="primary" fullWidth size='large'>
        Next
      </Button>
    </Box>
  )
}

export default UserData