import styles from "./theFooter.module.css";
import Link from "next/link";

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Logo from '@/public/assets/Logo';
import { pageUrls, socialLinks } from "@/public/Constants/Links";

// import socialLinks from "../../../public/constants/socialLinks";

function TheFooter() {
    return (
        <section className={styles.theFooter}>
            <div className={styles.content}>
                <Box spacing={{ xs: 2 }}>  

                    {/* social links */}
                    <Stack direction="row" spacing={2}  alignItems='center' sx={{float:{xs:'right'},top:'10px'}}>
                        <p className={styles.footerTxt}>Follow us on</p>
                        <a href={socialLinks.linkedin} >
                            <IconButton className={styles.socialBtn}>
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                        </a>
                        <a href={socialLinks.instagram} >
                            <IconButton className={styles.socialBtn}>
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                        </a>
                        <a href={socialLinks.twitter} >
                            <IconButton className={styles.socialBtn}>
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </a>
                        <a href={socialLinks.youtube} >
                            <IconButton className={styles.socialBtn}>
                                <YouTubeIcon fontSize="small" />
                            </IconButton>
                        </a>
                    </Stack>
                    <Box pt={{sm:5,md:3}} />
                    <Stack direction={{xs:'column',sm:'row'}} alignItems={{xs:'left',sm:'center'}} sx={{width:{xs:'100%',lg:'70%'}}} justifyContent={{sm:'space-around'}}>
                    {/* logoo */}
                        <Link href={'/'}>
                            <Box sx={{width:{xs:'200px',md:'250px'},paddingTop:{xs:'20px',sm:0}}}><h1 style={{color:"white"}}>Company</h1></Box>
                        </Link>
                        
                        <Box sx={{width:{xs:'0',md:'15%'},height:{xs:'10px'}}} />
                       
                    </Stack>
                    <Stack direction={{xs:'column',sm:'row'}} spacing={2} mt={4}>
                        <Box sx={{flexGrow:1}} />
                            <span style={{alignSelf:'center'}}>
                                <a href={pageUrls.privacyPolicy} className={styles.policyText2}>Privacy  policies &</a>
                                <a href={pageUrls.termsConditions} className={styles.policyText2}> terms and Conditions</a>
                            </span>
                            
                        <p className={styles.policyText}>Copyrights{new Date().getFullYear()}by The company</p>
                        
                    </Stack>
                    
                    
                </Box>
            </div>
        </section>
    );
}

export default TheFooter;