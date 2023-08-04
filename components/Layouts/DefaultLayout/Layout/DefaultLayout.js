import styles from "./defaultLayout.module.css";

import Navbar from "@/components/Layouts/DefaultLayout/Appbar/Appbar";
import  Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import TheFooter from "../TheFooter/TheFooter";

function DefaultLayout({ children }) {
    return (
        <>  
            <CssBaseline />
            <Navbar />
            <Box sx={{paddingTop:'75px'}} />
            <main>{children}</main>
            <TheFooter />
        </>
    );
}

export default DefaultLayout;