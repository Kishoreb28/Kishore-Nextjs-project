import styles from "./teamMemberCard.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

function TeamMemberCard(props) {
    const memberDetails = props.memberDetails;

    return (
        <div className={styles.teamMemberCard}>
                <div className={styles.imageDiv}>
                    <img className={styles.profilePic} src={`/teamDetails/images/${memberDetails.profilePic}`} alt="Member" />
                    
                </div>
            <h5 className={styles.memberName}>{memberDetails.name}</h5>
            <p className={styles.position}>{memberDetails.position}</p>
        </div>
    );
}

export default TeamMemberCard;