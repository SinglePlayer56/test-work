import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IForm} from "@/types";
import {Control, FieldErrors, Path, UseFormRegister} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<IForm>;
    register: UseFormRegister<IForm>;
    type: 'text' | 'email' | 'tel';
    required?: boolean;
    errors: FieldErrors;
    control: Control<IForm>;
    isSubmitted: boolean;
}
