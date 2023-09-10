'use client';

import Select, {components, DropdownIndicatorProps, PlaceholderProps} from 'react-select';
import {useId, useState} from "react";
import './SelectApartment.scss';
import Image from "next/image";
import {SelectApartmentProps} from "@/components/SelectApartment/SelectApartment.props";
import {motion} from 'framer-motion';
import cn from "classnames";

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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

interface IOption {
    value: string;
    label: string;
}

const DropdownIndicator = (props:DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <Image
                src={'/icons/angle.svg'}
                alt={'dropdown-icon'}
                width={12}
                height={13}
            />
        </components.DropdownIndicator>
    )
}

const Placeholder = (props: PlaceholderProps) => {
    return (
        <components.Placeholder {...props}>
            <motion.div
                whileHover={'hover'}
                animate={'initial'}
                initial={false}
            >
                <motion.div variants={animationVariants}>
                    {props.children}
                </motion.div>
            </motion.div>
        </components.Placeholder>
    )
}

const SelectApartment = ({className}: SelectApartmentProps) => {
    const [selectedOption, setSelectedOption] = useState<IOption | null>();

    return (
        <div className={cn('select-apartment__wrapper', className)}>
            <Select
                isSearchable={false}
                // @ts-ignore
                components={{DropdownIndicator, Placeholder}}
                placeholder={'Выберите квартиру'}
                instanceId={useId()}
                defaultValue={selectedOption}
                // @ts-ignore
                onChange={setSelectedOption}
                options={options}
                classNamePrefix={'select-apartment'}
            />
        </div>
    );
};

export default SelectApartment;
