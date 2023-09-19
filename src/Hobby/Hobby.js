import React from 'react';
import {Paper,Typography,Box} from "@mui/material"
import "./Hobby.css"
import CodeImage from "../Assets/Images/code.png"
import CyclingImage from "../Assets/Images/cycling.png"
import TravelImage from "../Assets/Images/travel.png"
import CricketImage from  "../Assets/Images/cricket.png"

function Hobby() {
  return (
    <section className='Hobby' id="Hobby">
    <Paper elevation={4} className='Hobby-item' sx={{backgroundColor:"#FCF0FF",color:"#fff",margin:"auto",marginTop:10,paddingBottom:5,width:"100%"}}>
          
         <Box sx={{backgroundColor:"var(--Button)",borderRadius:"0 0 25px 25px",padding:5,textAlign:"center"}}>
         <Typography variant='h2' sx={{fontFamily:"Montserrat",fontWeight:"600"}}>
            Hobby
         </Typography>

         </Box>
         <Box sx={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",alignItems:"center",color:"var(--Button)"}}>
           <Box sx={{marginTop:3}}>
          
                 <img src={CodeImage} alt="the best web devloper near me "/>
                 <Typography variant='h3'>
                   Coding
                 </Typography>
           </Box>


           <Box sx={{marginTop:3}}>
          
                     <img src={CyclingImage} alt="the best web devloper near me "/>
                     <Typography variant='h3'>
                       Cycling
                    </Typography>
         </Box>


         <Box sx={{marginTop:3}}>
          
                 <img src={TravelImage} alt="the best web devloper near me "/>
                 <Typography variant='h3'>
                  Traveling
                </Typography>
        </Box>



        
        <Box sx={{marginTop:3}}>
          
                       <img src={CricketImage} alt="the best web devloper near me "/>
                       <Typography variant='h3'>
                       Cricket
                      </Typography>
        </Box>


         </Box>

            

    </Paper>

    </section>
  )
}

export default Hobby