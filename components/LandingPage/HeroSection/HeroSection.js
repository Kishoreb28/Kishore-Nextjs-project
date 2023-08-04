import Styles from './heroSection.module.css';
import { useState,useEffect } from 'react';
// mui
import  Box from '@mui/material/Box';
import  Stack from '@mui/material/Stack';
import  Button from '@mui/material/Button';
import  Typography from '@mui/material/Typography';
// icons
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const HeroSection = ({pageType,handleChangeType}) => {
    const  content ={
        heading:'Welcome to company',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
        btnText:'Start my journey'
    }

   
    
    return ( 
        <Box className={Styles.fullWidth }>
            <Box className={`${Styles.heroSection} container`}>
                <Stack className={Styles.left} spacing={{xs:3,sm:2}}>
                 
                    <Typography variant='h3' className={Styles.heading}>{content.heading}</Typography>
                    <Typography variant='h3' className={Styles.text}>{content.text}</Typography>
                    <Button variant='contained'
                        href="/about-us" 
                        mt={2} 
                        disableElevation
                        className={Styles.submitBtn} 
                        endIcon={<ArrowForwardRoundedIcon sx={{transform:`scale(1.5)`,ml:1,display:{xs:'none',sm:'block'}}} />}>
                        More Info
                    </Button>
                </Stack>
                <Box className={Styles.right}>
                    <img src='assets/HomePage/homepage.svg' alt='' className={Styles.banner} />
                    
                </Box>
            </Box>
        </Box>
     );
}
 
export default HeroSection;