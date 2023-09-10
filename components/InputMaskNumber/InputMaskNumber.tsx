'use client';

import {InputMaskNumberProps} from "@/components/InputMaskNumber/InputMaskNumber.props";
import {PatternFormat} from "react-number-format";
import cn from "classnames";
import styles from "@/components/Input/Input.module.scss";
import {Controller} from "react-hook-form";

const InputMaskNumber = ({className, register, onBlur, onFocus, control, label, type, errorsOptions}: InputMaskNumberProps) => {

    const {ref, ...otherRegister} = register(label, errorsOptions);

    return (
        <Controller
            name={label}
            control={control}
            defaultValue={''}
            render={({field: {onChange, value}}) => (
                <PatternFormat
                    id={label}
                    type={type}
                    format="+7 (###) ###-##-##"
                    allowEmptyFormatting mask="_"
                    className={className}
                    {...otherRegister}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                />
            )}
        />
    );
};

export default InputMaskNumber;
