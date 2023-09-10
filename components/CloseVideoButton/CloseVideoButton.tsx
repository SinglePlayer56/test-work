'use client';

import cn from "classnames";
import styles from "./CloseVideoButton.module.scss";
import {useEffect, useState} from "react";
import {CloseVideoButtonProps} from "@/components/CloseVideoButton/CloseVideoButton.props";

const CloseVideoButton = ({isOpen, handleClickCloseVideo}: CloseVideoButtonProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [timeoutVisible, setTimeoutVisible] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const mouseMoveHandler = () => {
            setIsVisible(true);

            if (timeoutVisible) {
                clearTimeout(timeoutVisible);
            }

            const timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            setTimeoutVisible(timeoutId);
        };

        if (isOpen) {
            document.addEventListener('mousemove', mouseMoveHandler);
        } else {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [isOpen, timeoutVisible]);

    return (
        <div
            onClick={handleClickCloseVideo}
            className={cn(styles.button, {
                [styles.button_visible]: isVisible
            })}>

        </div>
    );
};

export default CloseVideoButton;
