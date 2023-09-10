import styles from './BurgerMenu.module.scss';
import {BurgerMenuProps} from "@/components/BurgerMenu/BurgerMenu.props";
import cn from 'classnames';


const BurgerMenu = ({className}: BurgerMenuProps) => {

    return (
        <div className={cn(styles.burger, className)}>
            <div className={styles.burger__iconWrapper}>
                <span className={styles.burger__icon}></span>
            </div>
            <div className={styles.burger__text}>
                Меню
            </div>
        </div>
    );
};

export default BurgerMenu;
