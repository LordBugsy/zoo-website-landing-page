import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <nav>
                    
                    <ul className={styles.navLinks}>
                        <div className={styles.left}>
                            <li className={styles.logo}>Zoo'<span className={styles.out}>Logy</span></li>
                        </div>

                        <div className={styles.right}>                            
                            <li className={`${styles.listItem} ${styles.responsive}`}>
                                <a href='#news'>News</a>
                            </li>

                            <li className={`${styles.listItem} ${styles.responsive}`}>
                                <a href='#shop'>Shop</a>
                            </li>

                            <li className={`${styles.listItem} ${styles.responsive}`}>
                                <i className={`ri-search-2-line ${styles.icon}`}></i>
                            </li>
                        </div>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Header