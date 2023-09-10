import styles from "./MainImage.module.scss";
import Image from "next/image";
import main1920 from "@/public/img/main-1920.png";
import main1440 from "@/public/img/main-1440.png";
import main1024 from "@/public/img/main-1024.png";
import main768 from "@/public/img/main-768.png";
import main360 from "@/public/img/main-360.png";
import {MainImageProps} from "@/components/MainImage/MainImage.props";
import cn from 'classnames';

const MainImage = ({ className }: MainImageProps) => {

    return (
        <div className={cn(styles.image, className)}>
            <Image className={styles.image__1920} src={main1920} alt={'main-image'}
                   placeholder={'blur'} />
            <Image className={styles.image__1440} src={main1440} alt={'main-image'}
                   placeholder={'blur'} />
            <Image className={styles.image__1024} src={main1024} alt={'main-image'}
                   placeholder={'blur'} />
            <Image className={styles.image__768} src={main768} alt={'main-image'}
                   placeholder={'blur'} />
            <Image className={styles.image__360} src={main360} alt={'main-image'}
                   placeholder={'blur'} />
        </div>
    );
};

export default MainImage;
