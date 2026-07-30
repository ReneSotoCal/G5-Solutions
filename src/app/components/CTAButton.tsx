import type { ReactNode } from 'react'

interface CTAButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
}

export default function CTAButton({ onClick, children, className = "" }: CTAButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3 lg:px-8 lg:py-4 text-md lg:text-lg rounded-xl cursor-pointer font-semibold transition-colors duration-200 ${className}`}>
                {children}
        </button>
    );
}