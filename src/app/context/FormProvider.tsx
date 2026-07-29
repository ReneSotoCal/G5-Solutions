'use client';
import { useState, createContext, useContext, ReactNode, useCallback } from 'react';
import Navbar from '@/app/components/Navbar';
import ConsultationForm from '@/app/components/ConsultationForm'; 

type ContextType = {
    isOpen: boolean;
    openForm: () => void;
    closeForm: () => void;    
}

const formContext = createContext<ContextType | undefined>(undefined);

export default function FormProvider({children}: {children: ReactNode}){

    const [isOpen, setIsOpen] = useState(false);
    const openForm = useCallback(() => { setIsOpen(true) }, []);
    const closeForm = useCallback(() => { setIsOpen(false) }, []);
    
    return (
        <formContext.Provider value={{isOpen, openForm, closeForm}}>
            <Navbar/>
            <ConsultationForm/>
            {children}
        </formContext.Provider>  
    );
}

export function useFormProvider() {
    const context = useContext(formContext);
    if(!context)
        throw new Error("Form Context must be used within FormProvider");
    return context;
}