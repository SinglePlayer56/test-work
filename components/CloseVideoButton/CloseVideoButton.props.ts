import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CloseVideoButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    handleClickCloseVideo: () => void;
}
