'use client';

import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';
import '@/app/globals.css'
import {ReactNode, useEffect} from "react";

class ModalPlugin extends ScrollbarPlugin {
    static pluginName = 'modal';

    static defaultOptions = {
        open: false,
    };

    transformDelta(delta: {x: number, y: number}) {
        return this.options.open ? { x: 0, y: 0 } : delta;
    }
}

Scrollbar.use(ModalPlugin);


const SmoothScrollContainer = ({children}: { children: ReactNode }) => {

    useEffect(() => {
        const fixElem = document.querySelector('header');

        const scrollbar = Scrollbar.init(document.body);

        scrollbar.addListener((status) => {
            const offset = status.offset;

            if (fixElem) {
                fixElem.style.transform = `translate3d(0px, ${offset.y}px, 0px)`;
            }
        })

        return () => {
            Scrollbar.destroy(document.body);
        }
    }, []);


    return (
        <>
            {children}
        </>
    );
};

export default SmoothScrollContainer;
