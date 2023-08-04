import Styles from '../styles/Home.module.css'

import { useRouter } from 'next/router';
import { useState } from 'react';

import HeroSection from '@/components/LandingPage/HeroSection/HeroSection';
import DefaultLayout from '@/components/Layouts/DefaultLayout/Layout/DefaultLayout';
import CustomerSection from '@/components/LandingPage/CustomerSection/CustomerSection';
import CompaniesSection from '@/components/LandingPage/CompaniesSection/CompaniesSection';
import ReviewSection from '@/components/LandingPage/ReviewSection/ReviewSection';
import CommunitySection from '@/components/LandingPage/CommunitySection/CommunitySection';
// mui
import Box from '@mui/material/Box';


export default function Home() {
  const router =useRouter();

  

  return ( 
    <>
      <HeroSection />
     
      <Box className={Styles.orangeBackground} mt={{xs:0,sm:8}} >
        <CustomerSection/> 
        <CompaniesSection /> 
        <Box pb={{xs:5,sm:10}} />
      </Box>
         <CommunitySection />
         <ReviewSection />
      <Box className={Styles.orangeBackground} mt={5} mb={5}>
       
      </Box>
    </>
    )
}
Home.getLayout = function getLayout(page) {
  return (
      <DefaultLayout>
          {page}
      </DefaultLayout>
  );
}

