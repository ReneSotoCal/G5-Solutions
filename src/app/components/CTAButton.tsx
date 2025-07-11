import ConsultationForm from "./ConsultationForm";
import React from 'react'

interface CTAButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function CTAButton({ onClick, children, className = "" }: CTAButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`bg-red-600 hover:bg-red-700 active:bg-red-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors duration-200 ${className}`}>
                {children}
        </button>
    );
}