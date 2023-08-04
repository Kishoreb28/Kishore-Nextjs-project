import Styles from './communitySection.module.css'
// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DiscordWhite from '@/public/assets/HomePage/CommunitySection/DiscordWhite';
import LinesTop from '@/public/assets/HomePage/CommunitySection/linesTop';
import LinesBottom from '@/public/assets/HomePage/CommunitySection/linesBottom';
// icons
import { socialLinks } from '@/public/Constants/Links';

const CommunitySection = () => {

    return (
        <Box className='container'  >
            <div className={`${Styles.communityBanner}`}  >
                <Box className={Styles.belowLine} ><LinesBottom /></Box>
                <Box className={Styles.topLine} ><LinesTop /></Box>
                <Stack className={Styles.left} >
                    <Typography variant='h6' className={Styles.head}> Join growing community</Typography>
                    <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection={{xs:'column',sm:'row'}}>
                        <Stack spacing={2} className={Styles.btnSection} flexDirection={{xs:'row',sm:'column'}} >
                            <Box width={{sm:'100%'}}><DiscordWhite /></Box>
                            <Button 
                                href={socialLinks.discordInvite}
                                sx={{display:{xs:'none',sm:'block'}}}
                                className={`${Styles.joinNow} ${Styles.discordBtn}`} variant='contained'>Join Now</Button>
                            <Button 
                                href={socialLinks.discordInvite}
                                startIcon={<img src='assets/HomePage/CommunitySection/DiscordSmallIcon.svg' style={{marginRight:5}} alt='' />}
                                sx={{display:{xs:'flex',sm:'none'}}}
                                className={`${Styles.joinNow} ${Styles.discordBtn}`} variant='contained'>Join Community</Button>
                        </Stack>
                        <Stack spacing={2} className={Styles.btnSection} flexDirection={{xs:'row',sm:'column'}}>
                            <img src='assets/HomePage/CommunitySection/Telegram.svg' alt='' className={Styles.telegramImg} />
                            <Button size='large' sx={{display:{xs:'none',sm:'block'}}}
                                href={socialLinks.telegramInvite}
                                className={`${Styles.joinNow} ${Styles.telegramBtn}`} variant='contained'>Join Now</Button>
                            <Button 
                                sx={{display:{xs:'flex',sm:'none'}}}
                                href={socialLinks.telegramInvite}
                                startIcon={<img src='assets/HomePage/CommunitySection/TelegramSmallIcon.svg' style={{marginRight:5}}  alt='' />}
                                size='large'
                                className={`${Styles.joinNow} ${Styles.telegramBtn}`} variant='contained'>Join Community</Button>
                        </Stack>
                    </Box>
                </Stack>
                <Box className={Styles.right} >
                    <img src='assets/HomePage/CommunitySection/communityImg.png' className={Styles.rightImg} />
                </Box>
            </div>
        </Box>
    );
}
 
export default CommunitySection;