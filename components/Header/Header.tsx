import {BurgerMenu, Button, CallButton, SelectApartment} from "@/components";
import Image from 'next/image';
import Link from "next/link";
import styles from './Header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={'container'}>
                <div className={styles.header__wrapper}>
                    <BurgerMenu className={styles.header__burger }/>
                    <SelectApartment className={styles.header__select}/>
                    <Link className={styles.header__logo} href={'/'}>
                        <Image
                            src={'/icons/logo.svg'}
                            alt={'logo'}
                            width={156}
                            height={25}
                        />
                    </Link>
                    <a className={styles.header__number} href="tel:+74955272121">+7 495 527 21 21</a>
                    <CallButton className={styles.header__button}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
