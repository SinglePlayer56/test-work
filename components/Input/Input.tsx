'use client';

import {InputProps} from "@/components/Input/Input.props";
import styles from './Input.module.scss';
import {RegisterOptions, useWatch, Controller} from "react-hook-form";
import cn from 'classnames';
import {useEffect, useState} from "react";
import {PatternFormat} from 'react-number-format';
import {motion, AnimatePresence} from "framer-motion";
import {IErrorsVariants} from "@/types";
import {InputMaskNumber} from "@/components";

const Input = ({className, isSubmitted, label, control, register, required = false, errors, type}: InputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const fieldValue = useWatch({control, name: label});
    const errorField = errors[label];
    const errorOptions: IErrorsVariants = {
        tel: {
            required: {
                value: required,
                message: 'Обязательное поле'
            },
            pattern: {
                value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                message: 'Неверный формат номера'
            },

        },
        text: {
            required: {
                value: required,
                message: 'Обязательное поле'
            },
        },
        email: {
            required: {
                value: required,
                message: 'Обязательное поле'
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверный формат email'
            }
        }
    }

    useEffect(() => {
        if (isSubmitted) {
            setIsFocus(false);
        }
    }, [isSubmitted]);

    const onBlurHandler = () => {
        if (!fieldValue || fieldValue === '+7 (___) ___-__-__') {
            setIsFocus(false);
        }
    }

    return (
        <div className={cn(styles.inputContainer, className)}>
            <label
                className={cn(styles.inputContainer__label, {
                    [styles.inputContainer__label_focus]: isFocus
                })}
                htmlFor={label}
            >
                {label}
            </label>
            {type === 'tel' ?
                (
                    <InputMaskNumber
                        label={label}
                        register={register}
                        type={type}
                        errorsOptions={errorOptions[type]}
                        control={control}
                        onFocus={() => setIsFocus(true)}
                        onBlur={onBlurHandler}
                        className={cn(styles.inputContainer__input, {
                            [styles.inputContainer__input_visible]: isFocus
                        })}
                    />
                )
                :
                (
                    <input
                        id={label}
                        type={type}
                        {...register(label, errorOptions[type])}
                        className={cn(styles.inputContainer__input, {
                            [styles.inputContainer__input_visible]: isFocus
                        })}
                        onFocus={() => setIsFocus(true)}
                        onBlur={onBlurHandler}
                    />
                )
            }
            <AnimatePresence>
                {errorField &&
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className={styles.inputContainer__error}
                    >
                        {errorField.message?.toString()}
                    </motion.div>}
            </AnimatePresence>
        </div>
    );
};

export default Input;
