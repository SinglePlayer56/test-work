import {MainSectionProps} from "@/components/MainSection/MainSection.props";
import styles from './MainSection.module.scss';
import {MainImage, PTag} from "@/components";
import Image from "next/image";
import cn from 'classnames';

const MainSection = ({className}: MainSectionProps) => {

    return (
        <section className={cn(styles.main, className)}>
            <div className={'container'}>
                <div className={styles.main__wrapper}>
                    <MainImage className={styles.main__image}/>
                    <div className={styles.main__subsection}>
                        <PTag className={styles.main__text}>
                            <span>
                                Дом бизнес-класса <br/>
                                для ценителей роскоши
                            </span>
                        </PTag>
                        <div className={styles.main__inchapin}>
                            <Image
                                src={'/icons/INCHAPIN.svg'}
                                alt={'inchapin'}
                                width={862}
                                height={137}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
