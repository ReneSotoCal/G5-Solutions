'use client';
import Image from "next/image";
import Footer from "@/app/components/sections/Footer";
import CTAButton from "@/app/components/CTAButton";
import { useFormProvider } from "@/app/context/FormProvider";
export default function EndToEndServiceSection() {
        const {openForm} = useFormProvider();
    
    return (
        <>
            
            <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white text-center text-slate-900">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                    
                    <div className="w-full max-w-4xl aspect-[2/1] relative">
                        <Image 
                            src="/E2E-service.png"
                            fill
                            objectFit="contain"
                            alt="Picture of a man a team working on end to end IT solutions"
                            className="rounded-xl shadow-md object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-8">
                        <h1 className="text-4xl font-extrabold text-slate-800">End-to-End IT Solutions</h1>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">What We Do</h2>
                            <p className="text-lg font-medium leading-relaxed">
                            Provide complete IT lifecycle management, from hardware procurement (servers, storage, and PCs) to virtualization and edge computing, ensuring that your business operates with efficiency and flexibility.
                            </p>
                        </div>

                        <div className="space-y-4 text-left">
                            <h2 className="text-2xl font-bold text-red-600 text-center">How We Do It</h2>
                            <ul className="list-disc list-inside text-lg font-medium space-y-2">
                                <li>Hybrid IT environments that integrate on-premises infrastructure with advanced virtualization tools.</li>
                                <li>Comprehensive support for servers, storage, and device management to optimize your IT infrastructure.</li>
                                <li>Seamless cloud migration services, enabling businesses to transition from legacy systems to scalable cloud platforms with minimal disruption.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">Who It Helps</h2>
                            <p className="text-lg font-medium leading-relaxed">
                                Simplify IT management and maximize performance with solutions tailored to your business’s unique needs.
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