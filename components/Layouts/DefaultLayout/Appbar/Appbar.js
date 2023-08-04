import styles from "./appbar.module.css";

import Link from "next/link";
// icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LogoBlack from "public/assets/LogoBlack";
// mui
import CssBaseline from '@mui/material/CssBaseline';
import  Button  from "@mui/material/Button";
import Appbar from '@mui/material/AppBar'
import  IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Drawer  from "@mui/material/Drawer";
import List from '@mui/material/List'
import  ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { pageUrls } from "@/public/Constants/Links";
import { useRouter } from "next/router";

function Navbar() {
    const router =useRouter();
    const links =[
        {
            name:'Home',
            link:"/"
        },
        
        {
            name:'About us',
            link:pageUrls.aboutUs
        }
        
    ]
    const navElements =( ) =>{
        return <List className={styles.elements}  >
            <Box sx={{height:'100px'}}></Box>
            {links.map((row) =>{
                return  <ListItemButton component="a" key={row.link} href={row.link}
                            className={router.pathname === row.link && styles.navRightActive}>
                    <ListItemText>{row.name}</ListItemText>
                </ListItemButton>
            })}
            
            
        </List>
    }
    const [drawer,setDrawer] =useState(false)

    return (
        <header>
            <Box component='nav' className={styles.header} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar className={styles.nav} >
                    <div href='https://careerboat.io/' className={styles.logo}>
                        <IconButton onClick={()=>setDrawer(!drawer)} sx={{display:{xs:'none',md:'none'}}}>
                            <MenuRoundedIcon className={styles.menuIcon}/>
                        </IconButton>
                        <Link href='/'>
                            <Box width={210} className={styles.logoIcon} ><h1>Company</h1></Box>
                        </Link>
                    </div>
                    <Box display={'flex'}  spacing={2} className={styles.navRight} >
                    {/* links */}
                            {links.map((row) =>{
                                return  <Button key={row.name}
                                            disableElevation
                                            href={row.link} sx={{display:{xs:'none',sm:'none',md:'block'}}}    
                                            className={`${styles.navRightItem} ${router.pathname === row.link && styles.navRightActive}`}
                                    >{row.name}</Button>
                            })}
                    {/* login/signup button */}
                            <Box sx={{display:'none'}}>
                                <Button className={styles.loginBtn} href='#' >Login</Button>
                                <Button className={styles.signUpBtn} href='#' variant="contained" disableElevation >Sign Up</Button>
                            </Box>
                            
                            
                    </Box>
                    <IconButton onClick={()=>setDrawer(!drawer)} sx={{display:{xs:'block',md:'none'}}}>
                            <MenuRoundedIcon className={styles.menuIcon}/>
                    </IconButton>
                </Toolbar>
                
            </Box>
            <Drawer
                anchor='top'
                variant="temporary"
                open={drawer}
                onClose={()=>setDrawer(false)}
            >
                {navElements()}
                {/* <Box sx={{pl:2,pb:2,display:{sm:'none'}}}>
                    <Button className={styles.loginBtn} href='#' >Login</Button>
                    <Button className={styles.signUpBtn} href='#' variant="contained" disableElevation >Sign Up</Button>
                </Box> */}
            </Drawer>
        </header>
    );
}

export default Navbar;