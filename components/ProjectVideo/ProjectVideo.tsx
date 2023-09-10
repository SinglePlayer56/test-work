import {ProjectVideoProps} from "@/components/ProjectVideo/ProjectVideo.props";
import styles from './ProjectVideo.module.scss';
import {PTag, Video} from "@/components";
import cn from 'classnames';

const ProjectVideo = ({className, time, poster, videoPath}: ProjectVideoProps) => {

    return (
        <div className={cn(styles.video, className)}>
            <div className={styles.video__text}>
                <PTag>
                    Видео о проекте
                </PTag>
                <span>
                    {time} минут
                </span>
            </div>
            <div className={styles.video__dash}>

            </div>
            <Video poster={poster} videoPath={videoPath}/>
        </div>
    );
};

export default ProjectVideo;
