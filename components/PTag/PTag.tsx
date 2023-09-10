import styles from './PTag.module.scss';
import {PTagProps} from "./PTag.props";
import cn from 'classnames';

const PTag = ({className, children}: PTagProps) => {

    return (
        <p className={cn(styles.paragraph, className)}>
            {children}
        </p>
    );
};

export default PTag;
