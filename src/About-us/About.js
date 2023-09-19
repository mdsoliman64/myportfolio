import React from 'react'
import "../About-us/About.css"
import {Paper,Typography,Box} from "@mui/material"
function About() {
  return (
    <section className='About' id="About">
    <Paper elevation={4} className='About-item' sx={{backgroundColor:"var(--Button)",color:"#fff",marginTop:10}}>
            <Typography variant='h2'sx={{fontFamily:"Montserrat",fontWeight:"600"}}>
                   About
            </Typography>
            <Box sx={{marginTop:2}}>
            <Typography variant='p' sx={{fontFamily:"syne",textAlign:"justify",marginTop:5,lineHeight:1.5,wordSpacing:5,fontSize:"1.3rem"}}>
            As a skilled and passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, combined with my proficiency in search engine optimization (SEO), I bring a comprehensive approach to creating exceptional web experiences. With a solid foundation in both front-end and back-end development, I have successfully delivered numerous projects, leveraging the power of modern web technologies
            </Typography>
            </Box>

            

    </Paper>

    </section>
  )
}

export default About