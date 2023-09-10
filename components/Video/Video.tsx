'use client';

import {VideoProps} from "@/components/Video/Video.props";
import styles from './Video.module.scss';
import Image from "next/image";
import play from "@/public/icons/play.svg";
import {CloseVideoButton, PTag} from "@/components";
import cn from "classnames";
import {useEffect, useRef, useState} from "react";

const Video = ({className, videoPath, poster}: VideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const video = videoRef.current;
        document.addEventListener('fullscreenchange', closeVideo);
        if (video) {
            video.addEventListener('webkitendfullscreen', closeVideo)
        }

        return () => {
            document.removeEventListener('fullscreenchange', closeVideo);
            if (video) {
                video.addEventListener('webkitendfullscreen', closeVideo)
            }
        }
    }, []);


    function openVideo() {
        const video = videoRef.current;
        const videoContainer = videoContainerRef.current;

        if (video && videoContainer) {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen()
                    .then(() => video.play());
                setIsOpen(true);
                //@ts-ignore
            } else if (video.webkitEnterFullscreen) {
                //@ts-ignore
                video.webkitEnterFullscreen();
                video.play();
                setIsOpen(true);
            }
        }
    }

    function closeVideo() {
        const video = videoRef.current;
        if (document.fullscreenElement === null) {
            if (video) {
                video.pause();
                video.currentTime = 0;
                setIsOpen(false)
            }
        }
    }

    function handleClickCloseVideo() {
        const video = videoRef.current;

        if (document.fullscreenElement) {
            if (video) {
                document.exitFullscreen();
                video.pause();
                video.currentTime = 0;
                setIsOpen(false);
            }
        }
    }

    return (
        <div className={cn(styles.video__preview, className)}>
            <Image src={poster} alt={'video-poster'}/>
            <div onClick={openVideo} className={styles.video__play}>
                <Image
                    src={play}
                    alt={'play'}
                />
                <PTag>Play</PTag>
            </div>
            <div ref={videoContainerRef} className={styles.video__player}>
                <div className={styles.video__player_container}>
                    <CloseVideoButton
                        isOpen={isOpen}
                        handleClickCloseVideo={handleClickCloseVideo}
                    />
                    <video src={videoPath} playsInline ref={videoRef} controls>
                        <source src={videoPath} type={'video/mp4'}/>
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Video;
