import {RegisterOptions} from "react-hook-form";

export interface IForm {
    'Ваше имя': string;
    'Телефон': string;
    'E-mail': string;
}

export interface IErrorsVariants {
    tel: RegisterOptions;
    text: RegisterOptions;
    email: RegisterOptions
}
