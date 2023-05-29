import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

function ComponentStepper(props) {
    const { step } = props
    const steps = ["Datos de usuario", "Datos personales", "Datos de entrega"];

    return (
        <Box sx={{ width: "100%", marginBottom: "20px" }}>
            <Stepper activeStep={step}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel sx={{ fontSize: ".5em" }}>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default ComponentStepper