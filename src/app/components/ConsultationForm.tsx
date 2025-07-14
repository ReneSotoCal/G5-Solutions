// components/OffcanvasForm.js
"use client"; // add this if you're using Next.js 13 app router
import { useFormProvider } from '@/app/context/FormProvider';
import { handleFormSubmission } from '@/app/api/submit-form/route';
import { useActionState, useEffect } from 'react';
import { X } from 'lucide-react';

const initialState = {  errors: {},
                        success: false
                    }

export default function ConsultationForm() {
    const {isOpen, closeForm} = useFormProvider();
    const [state, action, isLoading] = useActionState(handleFormSubmission, initialState);
    useEffect(()=>{
        if(state.success)
            closeForm();
    }, [state.success]);
    

    if(!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-blend-overlay flex items-center justify-center z-50 backdrop-blur-sm bg-opacity-50">
                <div className="bg-white w-full  md:h-md max-w-lg max-h-lg rounded-lg lg:w-[600px] lg:h-auto m-8 p-4 sm:p-6 shadow-lg">
                    <button onClick={closeForm} className="text-gray-500 mb-4 hover:text-red-600 active:text-red-600"> <X className="w-6 h-6" /></button>
                    {/* Form */}
                    <form  
                    action = {action}
                    className="p-4 overflow-y-auto">
                    <label className="block mb-2">
                        First Name:
                        <input
                        type="text"
                        name="fName"
                        placeholder='John'
                        required
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        autoComplete="given-name"
                        />
                        {state.errors?.fName && <p className="text-red-500">{state.errors.fName}</p>}
                    </label>
                    <label className="block mb-2">
                        Middle Name:
                        <input
                        type="text"
                        name="mName"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        />
                    </label>
                    <label className="block mb-2">
                        Last Name:
                        <input
                        type="text"
                        name="lName"
                        placeholder="Doe"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        autoComplete="family-name"
                        required
                        />
                        {state.errors?.lName && <p className="text-red-500">{state.errors.lName}</p>}
                    </label>

                    <label className="block mb-4">
                        Email:
                        <input
                        type="email"
                        placeholder="johndoe123@gmail.com"
                        autoComplete="email"
                        name="email"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        required
                        />
                        {state.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
                    </label>

                    <label className="block mb-4">
                        Phone Number:
                        <input
                        type="tel"
                        placeholder='(123)456-7890'
                        name="phone"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        autoComplete="tel"
                        required
                        />
                        {state.errors?.phone && <p className="text-red-500">{state.errors.phone}</p>}
                    </label>
                    <label className="block mb-4">
                        Message:
                        <textarea
                        placeholder='Tell us more...'
                        name="message"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        />
                    </label>

                    <button
                        type="submit"
                        className={`w-full text-white px-4 py-2 rounded ${isLoading ? 'bg-gray-500' : 'bg-blue-600'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                    </form>
                </div>
            </div>
        </>
    );
}
