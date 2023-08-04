import styles from "./teamMembers.module.css";

import TeamMemberCard from "@/components/AboutUs/TeamMemberCard/TeamMemberCard";

import teamDetails from "../../../public/teamDetails/teamDetails";

function TeamMembers() {
    return (
        <div className={styles.container}>
            <div className={styles.bgImage}>
                {/* <svg width="900" height="700" viewBox="0 0 1374 904" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1351.8 590.589L1004.78 887.983C992.609 898.415 986.523 903.632 979.399 903.305C972.276 902.978 966.692 897.226 955.525 885.723L942.506 872.312C929.911 859.336 923.613 852.848 924.001 845.032C924.39 837.216 931.3 831.385 945.121 819.723L1216.61 590.636C1231.39 578.172 1238.77 571.94 1238.88 563.721C1238.99 555.502 1231.77 549.078 1217.33 536.229L916.029 268.096C899.934 253.772 891.886 246.61 892.528 237.76C893.171 228.909 902.169 222.985 920.164 211.136L920.164 211.136L936.703 200.246C947.833 192.918 953.398 189.253 959.509 189.706C965.621 190.159 970.585 194.604 980.514 203.493L1352.38 536.433C1366.64 549.2 1373.77 555.584 1373.68 563.745C1373.59 571.907 1366.33 578.134 1351.8 590.589Z" fill="url(#paint0_linear_1249_301)" />
                    <path d="M22.1165 313.433L368.383 16.0863C380.569 5.62258 386.661 0.390703 393.795 0.718042C400.929 1.04538 406.517 6.81322 417.693 18.3489L430.643 31.7165C443.204 44.6813 449.484 51.1636 449.096 58.9692C448.707 66.7748 441.815 72.6022 428.031 84.2568L157.028 313.386C142.295 325.842 134.929 332.07 134.821 340.278C134.713 348.487 141.912 354.907 156.312 367.746L457.07 635.93C473.124 650.245 481.15 657.402 480.508 666.242C479.866 675.082 470.89 681.004 452.936 692.849L436.486 703.702C425.342 711.055 419.77 714.731 413.649 714.277C407.528 713.823 402.559 709.366 392.621 700.45L21.53 367.542C7.30843 354.784 0.19764 348.405 0.285984 340.254C0.374329 332.104 7.62171 325.88 22.1165 313.433Z" fill="url(#paint1_linear_1249_301)" />
                    <defs>
                        <linearGradient id="paint0_linear_1249_301" x1="1132" y1="910" x2="1132" y2="185" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EEF5FF" />
                            <stop offset="1" stopColor="#F8FBFF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1249_301" x1="241.5" y1="-6" x2="241.5" y2="719" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EEF5FF" />
                            <stop offset="1" stopColor="#F8FBFF" />
                        </linearGradient>
                    </defs>
                </svg> */}
            </div>
            <div className={styles.teamMembers}>
                {
                    teamDetails.map((member) => <TeamMemberCard key={member.name} memberDetails={member} />)
                }
            </div>
        </div>
    );
}

export default TeamMembers;