import styles from './News.module.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import { useEffect, useRef } from 'react'


const News = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach( entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target); // stop observing once visible
                    }
                })
            },
            {
                root: null, // relative to document viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of the element is visible
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return (
        <div id='news' className={styles.newsContainer}>
            <div ref={containerRef} className={styles.news}>
                <div className={styles.rowStyle}>
                    <h1 className='sectionHead'>Our latest news</h1>
                    <button className={`${styles.button} ${styles.allNews}`}>View all News <i className="ri-arrow-right-s-line"></i></button>
                </div>
                
                <div className={styles.newsDisplay}>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img1} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img2} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img3} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.rowStyle}>
                    <h1 className='sectionHead'>Events in the zoo</h1>
                    <button className={`${styles.button} ${styles.allNews}`}>View all events <i className="ri-arrow-right-s-line"></i></button>
                </div>
                
                <div className={styles.newsDisplay}>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img4} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img5} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img className={styles.cardImage} src={img6} />
                            <i className={`ri-external-link-line ${styles.iconHover}`}></i>
                        </div>
                        
                        <div className={styles.text}>
                            <h1 className={styles.cardName}>Lorem Ipsum</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News