import React from 'react'
import { Box, Typography } from '@mui/material'
import complete from '../../../assets/images/complete.png'


function Complete() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                margin: "0 80px"
            }}
        >
            <img src={complete} width={"350px"} alt="" />
            <Typography variant="p" fontSize={"30px"} color="GrayText">
                Cuenta Creada
            </Typography>


        </Box>
    )
}

export default Complete