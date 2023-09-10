import styles from './SecondRightSide.module.scss';
import {SecondRightSideProps} from "@/components/SecondRightSide/SecondRightSide.props";
import cn from "classnames";
import {ProjectVideo, PTag} from "@/components";
import videoPoster from "@/public/img/video-preview.png";

const SecondRightSide = ({className}: SecondRightSideProps) => {

    return (
        <div className={cn(className, styles.rightSide)}>
            <PTag className={styles.rightSide__firstText}>
                уютное и безопасное пространство для
                счастливой, <span>спокойной и размеренной жизни</span>
            </PTag>
            <PTag className={styles.rightSide__secondText}>
                <span>Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,</span> балконами,
                лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
            </PTag>
            <ProjectVideo
                poster={videoPoster}
                time={'1:25'}
                videoPath={'/video/video.mp4'}
            />
        </div>
    );
};

export default SecondRightSide;
