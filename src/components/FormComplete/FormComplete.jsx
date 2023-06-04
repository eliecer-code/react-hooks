import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { FormSpace, Img, LogoSpace } from './Styles'
import favicon from '../../assets/images/favicon.png'
import Typography from '@mui/material/Typography'
// import UserData from '../Form/UserData/UserData'
/* import PersonalInformation from '../Form/PersonalInformation/PersonalInformation'
import DeliveryData from '../Form/DeliveryData/DeliveryData'
import Complete from '../Form/Complete/Complete' */
import ComponentStepper from '../Stepper/Stepper'
import { validateEmail, validatePassword } from '../../helpers/validations'
import Steps from '../Form/steps/Steps'

function FormComplete() {
    const [step, setStep] = useState(0);
    const [pasos, setPasos] = useState({});

    useEffect(() => {
        console.log("Se ha actualizado el step: ", step)
    }, [step])
    /* const updateStep = (step) => {
        console.log("Actualizado", step)
        setStep(step)
    } */
    const onSubmit = (e) => {
        e.preventDefault();
        let newStep = step + 1
        setStep(newStep)
        console.log("newStep", step)
    }

    const handleChange = (e, position, currentStep) => {
        console.log("value", e.target.value)
        console.log("Position", position)
        console.log("currentStep", currentStep)
    }

    const stepsFlow = {
        0: {
            inputs: [
                {
                    label: "Email",
                    type: 'email',
                    value: "",
                    helperText: "It is not recognized as a valid email",
                    onChange: () => { },
                },
                {
                    label: "Password",
                    type: 'password',
                    value: "",
                    helperText: "Password must contain at least 8 characters",
                    onChange: () => { }
                },
            ],
            buttonText: "Next",
            onSubmit
        },
        1: {
            inputs: [
                {
                    label: "Name",
                    type: 'text',
                    value: "",
                    helperText: "It is not recognized as a valid email",
                    onChange: handleChange,
                },
                {
                    label: "LastName",
                    type: 'text',
                    value: "",
                    helperText: "Password must contain at least 8 characters",
                    onChange: handleChange
                },
                {
                    label: "PhoneNumber",
                    type: '',
                    value: "",
                    helperText: "Password must contain at least 8 characters",
                    onChange: handleChange
                },
            ],
            buttonText: "Next",
            onSubmit
        },
        2: {
            inputs: [
                {
                    label: "Address",
                    type: 'text',
                    value: "",
                    helperText: "It is not recognized as a valid email",
                    onChange: () => { },
                },
                {
                    label: "City",
                    type: 'text',
                    value: "",
                    helperText: "Password must contain at least 8 characters",
                    onChange: () => { }
                },
            ],
            buttonText: "Create account",
            onSubmit
        }
    };

    /* const selectStep = {
        0: <UserData updateStep={updateStep} />,
        1: <PersonalInformation updateStep={updateStep} />,
        2: <DeliveryData updateStep={updateStep} />,
        3: <Complete updateStep={updateStep} />
    } */
    return (
        <Box
            sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <LogoSpace>
                <Img src={favicon} />
                <Typography variant="h4" color="initial">
                    FastFood
                </Typography>
            </LogoSpace>
            {(step < 3) && <ComponentStepper step={step} />}
            <FormSpace>
                {/* {
                    selectStep[step]
                } */}
                <Steps data={stepsFlow[step]} step={step} />
            </FormSpace>
        </Box>
    )
}

export default FormComplete