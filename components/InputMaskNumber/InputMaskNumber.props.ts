import {Control, Path, RegisterOptions, UseFormRegister} from "react-hook-form";
import {IForm} from "@/types";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputMaskNumberProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: Path<IForm>;
    register: UseFormRegister<IForm>;
    type: 'tel';
    errorsOptions: RegisterOptions;
    control: Control<IForm>;
    onFocus: () => void;
    onBlur: () => void;
}
