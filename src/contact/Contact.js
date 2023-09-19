import React from 'react'
import { Typography,Paper,Box } from '@mui/material'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id="contact">
        <Paper sx={{display:"flex",flexWrap:"wrap",flexDirection:"row",padding:4,justifyContent:"space-around",backgroundColor:"#211125",color:"#f0f8ff"}}>
            <Typography variant='h5'> Md Soliman</Typography>
            <Box sx={{display:"flex",flexWrap:"wrap"}}>
                <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"2rem",marginRight:5}} />
                <Typography variant='h6' sx={{color:"#f0f8ff"}}>
                    +880 1855 831 309
                </Typography>
            </Box>
            <Box sx={{display:"flex",flexWrap:"wrap"}}>
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"2rem",marginRight:5}} />
                <Typography variant='h6' sx={{color:"#f0f8ff"}}>
                    seo.mdsoliman@gmail.com
                </Typography>
            </Box>
        </Paper>

    </section>
  )
}

export default Contact