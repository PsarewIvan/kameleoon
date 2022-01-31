import React from 'react';

interface Props {
    className?: string;
}

const ChevronIcon = (props: Props) => {
    const { className } = props;
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="4"
            fill="none"
            viewBox="0 0 7 4"
        >
            <path
                d="M0 3.5L3.14.36 3.5 0l.36.36L7 3.5l-.36.36L3.5.73.36 3.86 0 3.5z"
                fill="#999"
            />
        </svg>
    );
};

export default ChevronIcon;
