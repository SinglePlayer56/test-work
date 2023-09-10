import {DetailedHTMLProps, HTMLAttributes} from "react";
import {StaticImageData} from "next/image";

export interface ProjectVideoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    poster: StaticImageData;
    time: string;
    videoPath: string;
}
