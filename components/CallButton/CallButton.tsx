'use client';

import {CallButtonProps} from "@/components/CallButton/CallButton.props";
import styles from './CallButton.module.scss';
import cn from 'classnames';
import {Button, ContactForm} from "@/components";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";

import Scrollbar from 'smooth-scrollbar';



const CallButton = ({className}: CallButtonProps) => {
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const [scrollbar, setScrollbar] = useState<Scrollbar>();

    const handleOpenForm = () => {
        setIsOpenForm(true);
        if (scrollbar) {
            scrollbar.updatePluginOptions('modal', { open: true });
        }
    };
    const handleCloseForm = () => {
        setIsOpenForm(false);
        if (scrollbar) {
            scrollbar.updatePluginOptions('modal', { open: false });
        }
    }
    const handleCloseFormEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpenForm(false);
            if (scrollbar) {
                scrollbar.updatePluginOptions('modal', { open: false });
            }
        }
    }, [scrollbar]);

    useEffect(() => {
        if (isOpenForm) {
            document.addEventListener('keydown', handleCloseFormEscape);
        }

        if (!scrollbar) {
            const scrollbarInstance = Scrollbar.init(document.body);
            setScrollbar(scrollbarInstance);
        }

        if (!isOpenForm) {
            document.removeEventListener('keydown', handleCloseFormEscape);
        }
    }, [isOpenForm, scrollbar, handleCloseFormEscape]);

    return (
        <>
            <div className={cn(styles.callButton, className)}>
                <Button onClick={handleOpenForm} className={styles.callButton__button} color={'white'}>Заказать
                    звонок</Button>
                <div onClick={handleOpenForm} className={styles.callButton__phoneButton}>
                    <Image
                        src={'/icons/phone.svg'}
                        alt={'phone-number'}
                        width={14}
                        height={14}
                    />
                </div>
            </div>
            <ContactForm
                closeHandlerForm={handleCloseForm}
                isOpen={isOpenForm}
            />
        </>
    );
};

export default CallButton;
