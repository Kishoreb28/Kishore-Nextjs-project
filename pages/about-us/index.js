import { useRouter } from "next/router";

import styles from "./aboutUs.module.css";

import DefaultLayout from "@/components/Layouts/DefaultLayout/Layout/DefaultLayout";
import TeamMembers from "@/components/AboutUs/TeamMembers/TeamMembers";

function AboutUsPage() {
    const router = useRouter();

    return (
        <>
            <section className={styles.aboutUsPage}>
                <header className={styles.header}>
                    <div className={styles.backBtn} onClick={() => router.back()}>
                        <svg style={{ marginRight: "0.5rem" }} width="30" height="16" viewBox="0 0 45 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM45 7L1 7V9L45 9V7Z" fill="#ffffff" />
                        </svg>
                        Back
                    </div>
                    <h1 className={styles.heading}>About Us</h1>
                    <div />
                </header>
                <div className={styles.paragraph}>
                    <p>We are a bunch of techies and young innovators working for dreamers - the generation who wanted to take their career to the next level. By connecting with you with your career twins and helping you to grow in your career with super powerful tools.</p>
                    
                    <p>We are a bunch of techies and young innovators working for dreamers - the generation who wanted to take their career to the next level. By connecting with you with your career twins and helping you to grow in your career with super powerful tools.</p>
                    
                </div>
                <header >
                    
                    <h1 className={styles.heading1}>Our Amazing Team</h1>
                    <div />
                </header>
                <TeamMembers />
            </section>
        </>
    );
}

export default AboutUsPage;

AboutUsPage.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    );
}