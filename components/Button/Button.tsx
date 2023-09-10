'use client';

import {ButtonProps} from "./Button.props";
import styles from './Button.module.scss';
import cn from 'classnames';
import {motion} from 'framer-motion';

const animationVariants = {
    hover: {
        transform: ['translateY(0%)', 'translate(0, -150%)', 'translate(-150%, -150%)', 'translate(-150%, 150%)', 'translate(0%, 150%)', 'translate(0%, 0%)'],
        transition: {duration: 0.6}
    },
    initial: {
        transform: ['translate(0%, 0%)', 'translate(0%, 150%)', 'translate(-150%, 150%)', 'translate(-150%, -150%)', 'translate(0, -150%)', 'translateY(0%)'],
        transition: {duration: 0.6}
    }
};

const Button = ({children, color, className, onClick}: ButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            initial={false}
            whileHover={'hover'}
            animate={'initial'}
            className={cn(styles.button, className, {
                [styles.white]: color === 'white',
                [styles.blue]: color === 'blue'
            })}

        >
            <div data-text={children} className={styles.button__content}>
                <motion.p variants={animationVariants} className={styles.button__text} >{children}</motion.p>
            </div>
        </motion.button>
    );
};

export default Button;
