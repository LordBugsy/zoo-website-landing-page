import styles from './Shop.module.css'
import shopImg from '../assets/imgArray5.jpg'
import pandaPaw from '../assets/panda paws.png'
import { useEffect, useRef } from 'react'

const Shop = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observe = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observe.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (containerRef.current) observe.observe(containerRef.current);

        return () => {
            if (containerRef.current) observe.unobserve(containerRef.current);
        }
    }, []);

    return (
        <div id='shop' className={styles.shopContainer}>
            <img src={pandaPaw} className={styles.pandaPaw} />
            <div ref={containerRef} className={styles.shop}>
                <img src={shopImg} className={styles.image} />    

                <div className={styles.text}>
                    <h1 className={styles.sectionHeader}>Join the wildlife!</h1>
                    <p className={styles.sectionDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum voluptate accusantium illum, 
                        animi assumenda? Vitae esse ipsa explicabo cum dicta neque tempora quia assumenda quidem. 
                        Quasi delectus aut nobis?
                    </p>

                    <div className={styles.centerButton}>
                        <button className={`${styles.button} ${styles.shopButton}`}>Go to shop <i className="ri-shopping-cart-2-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop