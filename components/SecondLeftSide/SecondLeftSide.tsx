import styles from './SecondLeftSide.module.scss';
import {SecondLeftSideProps} from "@/components/SecondLeftSide/SecondLeftSide.props";
import cn from "classnames";
import {PTag, SecondImage} from "@/components";
import Image from "next/image";
import up from "@/public/icons/up.svg";

const SecondLeftSide = ({className}: SecondLeftSideProps) => {

    return (
        <div className={cn(className, styles.leftSide)}>
          <PTag className={styles.leftSide__head}><span>О проекте</span></PTag>
          <SecondImage/>
          <div className={styles.leftSide__up}>
            <Image src={up} alt={'up'}/>
          </div>
        </div>
    );
};

export default SecondLeftSide;
