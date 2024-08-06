import React, { useEffect, useRef } from 'react';
import styles from './Animals.module.css';
import image from '../assets/imgArray4.jpg';
import footprint from '../assets/panda paws.png';

const Animals = () => {
    const animalsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target); // stop observing once the element is visible
                    }
                });
            },
            {
                root: null, // relative to document viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of the element is visible
            }
        );

        if (animalsRef.current) {
            observer.observe(animalsRef.current);
        }

        return () => {
            if (animalsRef.current) {
                observer.unobserve(animalsRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.animalsContainer}>
            <img src={footprint} className={styles.footprint} />
            <div ref={animalsRef} className={styles.animals}>
                <img src={image} className={styles.image} />
                <div className={styles.text}>
                    <h1 className={styles.mainText}>Meet our animals!</h1>
                    <p className={styles.mainDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellendus quas illo cupiditate labore accusantium a ex voluptatum aspernatur facere exercitationem. 
                        Harum, laborum nemo omnis cum amet velit beatae veritatis libero.
                    </p>
                    <button className={`${styles.button} ${styles.buyTicket}`}>Buy tickets</button>
                </div>
            </div>
        </div>
    )
}

export default Animals;
