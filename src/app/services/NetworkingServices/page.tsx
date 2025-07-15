'use client';
import Image from "next/image";
import Footer from "@/app/components/sections/Footer";
import CTAButton from "@/app/components/CTAButton";
import { useFormProvider } from "@/app/context/FormProvider";
export default function NetworkServiceSection() {
        const {openForm} = useFormProvider();
    
    return (
        <>
            
            <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white text-center text-slate-900">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                    
                    <div className="w-full max-w-3xl aspect-[2/1] relative">
                        <Image 
                            src="/networking-service.jpg"
                            fill
                            alt="Picture of a man working on a switchboard"
                            className="rounded-xl shadow-md object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-8">
                        <h1 className="text-4xl font-extrabold text-slate-800">Networking & Infrastructure</h1>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">What We Do</h2>
                            <p className="text-lg font-medium leading-relaxed">
                                We design and implement scalable networking solutions for businesses, focusing on secure, high-performance routing and switching to meet evolving operational demands.
                            </p>
                        </div>

                        <div className="space-y-4 text-left">
                            <h2 className="text-2xl font-bold text-red-600 text-center">How We Do It</h2>
                            <ul className="list-disc list-inside text-lg font-medium space-y-2">
                                <li>Tailored network optimization services that enhance connectivity and reliability.</li>
                                <li>IoT integration to enable smarter business operations and real-time data insights.</li>
                                <li>Comprehensive network assessments to identify and address vulnerabilities.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">Who It Helps</h2>
                            <p className="text-lg font-medium leading-relaxed">
                                From small businesses to large enterprises, our networking solutions ensure secure and seamless connectivity that scales with your growth.
                            </p>
                        </div>
                        <CTAButton onClick={openForm}>Get Your Free Consultation</CTAButton>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}