'use client';
import Image from "next/image";
import Footer from "@/app/components/sections/Footer";
import CTAButton from "@/app/components/CTAButton";
import { useFormProvider } from "@/app/context/FormProvider";
export default function CloudServicesSection() {
        const {openForm} = useFormProvider();
    
    return (
        <>
            
            <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white text-center text-slate-900">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                    <div className="w-full max-w-3xl aspect-[2/1] relative">
                        <Image 
                            src="/cloud-service.jpg"
                            fill
                            alt="Picture of a tech connected to cloud services"
                            className="rounded-xl shadow-md object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-8">
                        <h1 className="text-4xl font-extrabold text-slate-800">Cloud Computing</h1>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">What We Do</h2>
                            <p className="text-lg font-medium leading-relaxed">
                            Leverage scalable cloud services, including compute, storage, and serverless architecture, to drive innovation and enhance operational flexibility.
                            </p>
                        </div>

                        <div className="space-y-4 text-left">
                            <h2 className="text-2xl font-bold text-red-600 text-center">How We Do It</h2>
                            <ul className="list-disc list-inside text-lg font-medium space-y-2">
                                <li>Hybrid and multi-cloud strategies that combine private and public cloud platforms for optimized performance.</li>
                                <li>Advanced cloud migration and managed services to streamline adoption and integration.</li>
                                <li>Cloud-native application development, enabling faster deployment cycles, reduced infrastructure overhead, and greater scalability through microservices and containerization.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-600">Who It Helps</h2>
                            <p className="text-lg font-medium leading-relaxed">
                               Unlock the power of the cloud with solutions that enable collaboration, scalability, and innovation.
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