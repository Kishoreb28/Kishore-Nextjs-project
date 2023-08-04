import Styles from './customerSection.module.css'
import React, { useState, useEffect, useCallback } from "react";

import Item from './Item/Item'

import useEmblaCarousel from "embla-carousel-react";
// mui
import  Box  from "@mui/material/Box";
import  Stack  from "@mui/material/Stack";
import  Typography  from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
import  IconButton  from "@mui/material/IconButton";
// icons
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Scale } from '@mui/icons-material';
import { pageUrls } from '@/public/Constants/Links';

const CustomerSection = () => {


    const [viewportRef, embla] = useEmblaCarousel({
        dragFree: true,
        slidesToScroll: 1,
        containScroll: "trimSnaps",

      });
      const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
      const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    
      const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
      const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
      const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      }, [embla]);
    
      useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
      }, [embla, onSelect]);

      const slides =[
        {
          name:'Kishore',
          role:'',
          company:'Microsoft',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        },
        {
          name:'Kishore',
          role:'',
          company:'Google',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        },
        {
          name:'Sagar',
          role:'',
          company:'Adobe',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        },
        {
          name:'Adarsh',
          role:'',
          company:'KPMG',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        },
        {
          name:'Ashish',
          role:'',
          company:'Walmart Global Tech India',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        },
        {
          name:'Harhsa',
          role:'',
          company:'Root',
          imgSrc:'assets/MentorsImage/people.jpg',
          link:''
        }
      ];

      const NextButton = ({ enabled, onClick }) => (
        <IconButton
          className={`${Styles.embla__button} ${Styles.embla__button__next}`}
          onClick={onClick}
          disabled={!enabled}
        >
          <ArrowForwardIosRoundedIcon sx={{transform:`scale(1.8)`}}/>
        </IconButton>
      );

      const PrevButton = ({ enabled, onClick }) => (
        <IconButton
          className={`${Styles.embla__button} ${Styles.embla__button__prev}`}
          onClick={onClick}
          disabled={!enabled}
          size='large'
        >
          <ArrowBackIosRoundedIcon sx={{transform:`scale(1.7)`}} />
        </IconButton>
      );

    return ( 
        <Box className={`${Styles.mentorsSection} container`}  >
            <Stack direction={{md:'row'}} justifyContent='space-between' sx={{width:{xs:'auto',sm:'auto',lg:'85%'}}}>
                <Typography variant='h4' 
                  sx={{fontWeight: 500,fontSize:{xs:'26px',sm:'32px'},textAlign:{xs:'center',sm:'left'}}}
                >Meet our Customers</Typography>

               
            </Stack>
            <Box pt={5}></Box>
            <div className={Styles.embla}>
                <div className={Styles.embla__viewport} ref={viewportRef}>
                    <div className={Styles.embla__container}>
                    {slides.map((index) => (
                        <div className={Styles.embla__slide} key={index.name}>
                        <div className={Styles.embla__slide__inner}>
                            <Item {...index} />
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            <Button variant='contained'
            disableElevation
               href={pageUrls.mentors} className={Styles.exploreAllBtn} sx={{display:{xs:'block',sm:'block',md:'none'}}}>
               Explore All</Button>
        </Box>
     );
}
 
export default CustomerSection;