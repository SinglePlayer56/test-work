import styles from "./SecondImage.module.scss";
import Image from "next/image";
import main1920 from "@/public/img/main-1920.png";
import main1440 from "@/public/img/main-1440.png";
import main1024 from "@/public/img/main-1024.png";
import main768 from "@/public/img/main-768.png";
import main360 from "@/public/img/main-360.png";
import cn from 'classnames';
import {SecondImageProps} from "@/components/SecondImage/SecondImage.props";
import second1920 from "@/public/img/second-1920.png";
import second1440 from "@/public/img/second-1440.png";
import second1024 from "@/public/img/second-1024.png";
import second768 from "@/public/img/second-768.png";
import second360 from "@/public/img/second-360.png";

const SecondImage = ({ className }: SecondImageProps) => {

    return (
        <div className={cn(styles.image, className)}>
            <Image className={styles.image__1920} src={second1920} placeholder={'blur'}
                   alt={'second'}/>
            <Image className={styles.image__1440} src={second1440} placeholder={'blur'}
                   alt={'second'}/>
            <Image className={styles.image__1024} src={second1024} placeholder={'blur'}
                   alt={'second'}/>
            <Image className={styles.image__768} src={second768} placeholder={'blur'}
                   alt={'second'}/>
            <Image className={styles.image__360} src={second360} placeholder={'blur'}
                   alt={'second'}/>
        </div>
    );
};

export default SecondImage;
