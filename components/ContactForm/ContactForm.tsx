'use client';

import styles from './ContactForm.module.scss';
import {useForm, SubmitHandler} from "react-hook-form";
import {IForm} from "@/types";
import {Input} from "@/components";
import {AnimatePresence, motion} from 'framer-motion';
import Image from "next/image";
import CloseIcon from '@/public/icons/close.svg';
import {ContactFormProps} from "@/components/ContactForm/ContactForm.props";

const animationVariants = {
    hover: {
        transform: ['translateY(0%)', 'translate(0, -200%)', 'translate(-200%, -200%)', 'translate(-200%, 200%)', 'translate(0%, 200%)', 'translate(0%, 0%)'],
        transition: {duration: 0.6}
    },
    initial: {
        transform: ['translate(0%, 0%)', 'translate(0%, 200%)', 'translate(-200%, 200%)', 'translate(-200%, -200%)', 'translate(0, -200%)', 'translateY(0%)'],
        transition: {duration: 0.6}
    }
};

const ContactForm = ({closeHandlerForm, isOpen}: ContactFormProps) => {
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.wrapper}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <div className={styles.container}>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <h2 className={styles.form__title}>Заказать звонок</h2>
                            <div className={styles.form__inputs}>
                                <Input
                                    label={'Ваше имя'}
                                    register={register}
                                    type={'text'}
                                    errors={errors}
                                    required={true}
                                    control={control}
                                    isSubmitted={isSubmitSuccessful}
                                />
                                <Input
                                    label={'Телефон'}
                                    register={register}
                                    type={'tel'}
                                    errors={errors}
                                    required={true}
                                    control={control}
                                    isSubmitted={isSubmitSuccessful}
                                />
                                <Input
                                    className={styles.inputEmail}
                                    label={'E-mail'}
                                    register={register}
                                    type={'email'}
                                    errors={errors}
                                    required={true}
                                    control={control}
                                    isSubmitted={isSubmitSuccessful}
                                />
                            </div>
                            <p className={styles.form__text}>
                                Нажимая на кнопку «Отправить», вы ознакомлены <br/> и подтверждаете согласие с политикой обработки
                                персональных данных
                            </p>
                            <motion.button
                                initial={false}
                                whileHover={'hover'}
                                animate={'initial'}
                                className={styles.form__button}
                            >
                                <div>
                                    <motion.p variants={animationVariants}>
                                        отправить
                                    </motion.p>
                                </div>
                            </motion.button>
                        </form>
                        <motion.div
                            className={styles.close}
                            onClick={closeHandlerForm}
                            initial={false}
                            whileHover={{transform: 'rotate(180deg)'}}
                            transition={{duration: 0.4}}
                        >
                            <Image src={CloseIcon} alt={'close-icon'}/>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactForm;
