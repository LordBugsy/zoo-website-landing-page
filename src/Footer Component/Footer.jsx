import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.firstRow}>
                    <a href='https://github.com/LordBugsy/zoo-website-landing-page' target='_blank'>Terms and Conditions</a>
                    <a href='https://github.com/LordBugsy/zoo-website-landing-page' target='_blank'>Privacy and Data Policy</a>
                    <a href='https://github.com/LordBugsy/zoo-website-landing-page' target='_blank'>Cookies Policy</a>
                </div>

                <div className={styles.secondRow}>
                    <h1 className={styles.logo}>Zoo'<span className={styles.color}>Logy</span></h1>
                    <div>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure adipisci esse a ullam. Pariatur non veniam possimus nostrum, voluptates consequuntur reprehenderit harum qui deserunt quae! Consequuntur adipisci neque modi?</p>
                        <p className={styles.copyright}>Copyright © {new Date().getFullYear()} LordBugsy. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
