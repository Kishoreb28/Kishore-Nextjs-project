import Styles from './companiesSection.module.css'
// mui
import  Stack  from '@mui/material/Stack';
import  Typography  from '@mui/material/Typography';



const CompaniesSection = () => {
    return (
        <Stack className={`${Styles.companies} container`} alignItems='center' justifyContent='center'  >
            <Typography variant='h4' fontWeight={500} 
                pb={{xs:3,sm:4}} 
                sx={{fontSize:{xs:'26px',sm:'36px'},textAlign:{xs:'center',sm:'left'}}}
             >Our Customers come from</Typography>
            <img src='assets/HomePage/CompaniesSection/CompaniesBigImg.svg' className={Styles.bigImg}/>
            <img src='assets/HomePage/CompaniesSection/CompaniesSmallImg.svg' className={Styles.smallImg}/>
        </Stack>
      );
}
 
export default CompaniesSection;