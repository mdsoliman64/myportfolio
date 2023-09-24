import React from 'react'
import "../Feaures/Features.css"
import {Typography,Grid} from "@mui/material";

export default function Features() {
  return (
    <section id="Features">
        <Grid container spacing={0}>
            <Grid item sm={12}>
                <Typography variant='h1'>
                    100% CUSTOMER SATISFACTION  
                </Typography>
            </Grid>
        </Grid>
    </section>
  )
}
