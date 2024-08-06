import styles from './SubHeader.module.css';

import imgArray1 from '../assets/imgArray1.jpg';
import imgArray2 from '../assets/imgArray2.jpg';
import imgArray3 from '../assets/imgArray3.jpg';
import lionPaws from '../assets/lion paws.png';

const SubHeader = () => {
    const imgArray = [imgArray1, imgArray2, imgArray3];

    return (
        <div className={styles.subHeaderContainer}>
            <img src={lionPaws} className={styles.lionPaws} alt="Lion Paws Background"/>
            <div className={styles.subHeader}>
                <div className={styles.side}>
                    <h1 className={styles.mainText}>
                        Welcome to the <span className={styles.website}>Zoo'<span className={styles.color}>Logy</span></span> zoo!
                    </h1>
                    <p className={styles.mainDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum ratione possimus repudiandae ad temporibus quod accusantium recusandae ipsa dolore quisquam,
                    </p>

                    <div className={styles.buttons}>
                        <button className={`${styles.button} ${styles.signUp}`}>Become a member</button>
                        <button className={`${styles.button} ${styles.buyTicket}`}>Buy tickets</button>
                    </div>
                </div>

                <img className={styles.image} src={imgArray[Math.floor(Math.random() * imgArray.length)]} alt="Picture of an animal in the zoo" />
            </div>
        </div>
    );
};

export default SubHeader;
