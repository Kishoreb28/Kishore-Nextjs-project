import styles from './item.module.css'

import Stack  from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import Link from 'next/link';

const Item = ({company,imgSrc,name,role,link}) => {
    return ( 
        <Link href={link}>
            <Stack className={styles.item} spacing={1}>
            <div className={styles.imgDiv}>
                <div className={styles.shade}></div>
                <img src={imgSrc} className={styles.img} alt="mentor img" />
                <div className={styles.categoryDiv}>
                </div>
            </div>
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='body1' className={styles.org}>{company}</Typography>
            <Typography variant='paragraph' className={styles.role}>{role}</Typography>
            
        </Stack>
        </Link>
     );
}
 
export default Item;