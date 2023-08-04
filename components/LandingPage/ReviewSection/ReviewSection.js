import Styles from './reviewSection.module.css';
// mui
import  Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import  Stack  from '@mui/material/Stack';
import  Chip  from '@mui/material/Chip';
import InvertedComma from '@/public/assets/HomePage/ReviewesSection/invertedComma';
// icons


const ReviewSection = () => {

    const items =[
        {
            text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            mentorName:'Sharat M ',
            org:'google',
            imgURL:'assets/HomePage/ReviewesSection/r2.png',
            no:1
        },
        {
            text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            mentorName:'Adarsh H ',
            imgURL:'assets/HomePage/ReviewesSection/r2.png',
            org:'Microsoft',
            no:2
        },
        {
            text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 
            mentorName:'Harsha',
            org:'Adobe',
            imgURL:'assets/HomePage/ReviewesSection/r2.png',
            no:3
        },
        {
            text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            mentorName:'Madan ',
            org:'wallmart',
            imgURL:'assets/HomePage/ReviewesSection/r2.png',
            no:4
        }
    ]
    
    return (
        <Stack className={`${Styles.features} container`} alignItems='center'>
            <Typography mt={{xs:5,sm:9}} variant='h4' 
                sx={{fontWeight: 500,fontSize:{xs:'26px',sm:'36px'},textAlign:'center'}}
            >Everyone loves us</Typography>
            <Box className={Styles.items} display='flex' flexWrap='wrap' justifyContent='space-between' >
                {items && items.map(row =>{
                    return(
                        <Box className={Styles.card} key={row.no} >
                            <Box sx={{width:{xs:'90%',sm:'80%'},p:1}}>
                                <InvertedComma />
                            </Box>
                            <Box className={Styles.top} display='flex' alignItems='center' justifyContent='center'>
                                <Typography variant='h6' className={Styles.text1}>{row.text1}</Typography>                           
                             </Box>
                            <Stack className={Styles.bottom}>
                            <Box display='flex' className={Styles.appCards} alignItems='center'  >
                    {/* user Profile */}
                                <Box className={Styles.cardImgDiv} mr={2}> 
                                    <img src={row.imgURL} alt='Mentors Image' className={Styles.appCardImg} />
                                </Box>
                                <Box className={Styles.cardMentorDetails}>
                                    <Typography variant='h6' sx={{fontSize: '16px',fontWeight:400}} >{row.mentorName}</Typography>
                                    <Typography variant='body1' sx={{fontSize: '14px',color:'#00000091'}} noWrap>{row.org}</Typography>
                                </Box>
                            </Box>
                            </Stack>
                        </Box>
                    )
                })}
                
               
            </Box>
        </Stack>
      );
}
 
export default ReviewSection;
