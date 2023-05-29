import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { FormSpace, Img, LogoSpace } from './Styles'
import favicon from '../../assets/images/favicon.png'
import Typography from '@mui/material/Typography'
import UserData from '../Form/UserData/UserData'
import PersonalInformation from '../Form/PersonalInformation/PersonalInformation'
import DeliveryData from '../Form/DeliveryData/DeliveryData'
import Complete from '../Form/Complete/Complete'
import ComponentStepper from '../Stepper/Stepper'

function FormComplete() {
    const [step, setStep] = useState(0);

    const updateStep = (step) => {
        console.log("Actualizado", step)
        setStep(step)
    }

    const selectStep = {
        0: <UserData updateStep={updateStep} />,
        1: <PersonalInformation updateStep={updateStep} />,
        2: <DeliveryData updateStep={updateStep} />,
        3: <Complete updateStep={updateStep} />
    }
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
                {
                    selectStep[step]
                }
                {/* <UserData /> */}
                {/* <PersonalInformation /> */}
                {/* <DeliveryData /> */}
            </FormSpace>
        </Box>
    )
}

export default FormComplete