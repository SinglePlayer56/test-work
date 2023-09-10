import {SecondSectionProps} from "@/components/SecondSection/SecondSection.props";
import styles from './SecondSection.module.scss';
import cn from "classnames";
import {SecondLeftSide, SecondRightSide} from "@/components";

const SecondSection = ({className}: SecondSectionProps) => {

    return (
        <section className={cn(styles.second, className)}>
            <div className={'container'}>
                <div className={styles.second__wrapper}>
                    <SecondLeftSide />
                    <SecondRightSide />
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
