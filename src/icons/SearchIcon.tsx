import React from 'react';

interface Props {
    className?: string;
}

const SearchIcon = (props: Props) => {
    const { className } = props;
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            fill="none"
            viewBox="0 0 13 14"
        >
            <path
                d="M12.8 12.75L9.6 9.29c.82-1.02 1.28-2.3 1.28-3.63C10.87 2.54 8.44 0 5.44 0S0 2.54 0 5.65s2.44 5.65 5.44 5.65c1.13 0 2.2-.35 3.11-1.02l3.23 3.49c.14.15.32.23.51.23.18 0 .36-.07.49-.21.28-.28.29-.75.02-1.04zM5.44 1.47a4.1 4.1 0 0 1 4.02 4.18 4.1 4.1 0 0 1-4.02 4.18 4.1 4.1 0 0 1-4.02-4.18 4.1 4.1 0 0 1 4.02-4.18z"
                fill="#222"
            />
        </svg>
    );
};

export default SearchIcon;
