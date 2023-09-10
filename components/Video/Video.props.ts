import {DetailedHTMLProps, HTMLAttributes} from "react";
import {StaticImageData} from "next/image";

export interface VideoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    poster: StaticImageData;
    videoPath: string;
}
