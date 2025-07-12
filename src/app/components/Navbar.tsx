'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import CTAButton from './CTAButton';
import { useFormProvider } from '../context/FormProvider';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isDrpDwnOpen, setIsDrpDwnOpen] = useState(false);
    const {openForm} = useFormProvider();

    return (
        <nav className="sticky top-0 z-50 h-20 bg-slate-900 text-white" onMouseLeave={() => setIsDrpDwnOpen(false)}>
            <div className="max-w-7xl mx-auto lg:px-8 md:pt-1.5 relative">

                <div className="hidden md:flex justify-between items-center">      
                    
                    <div className="flex items-center space-x-2">
                        <Link
                            href="/">
                            <Image 
                            src="/G5-logo.png"
                            alt="G5 logo"
                            className="order-1"
                            height={64}
                            width={64}
                            />
                        </Link>
                        <span className="text-white text-xl font-semibold hidden sm:inline">G5 Solutions</span>
                    </div>
                    <Link 
                        href="/" 
                        className="space-x-6 order-2 block px-4 py-2 hover:bg-slate-800 hover:text-red-600 active:text-red-600 rounded font-medium uppercase tracking-wide transition-colors duration-200"
                        >Home</Link>
                    <div className='relative order-3 flex items-center justify-center' >
                        <Link 
                            href="/#services-section" 
                            onMouseOver={() => setIsDrpDwnOpen(true)}
                            className="space-x-6 block px-4 py-2 hover:bg-slate-800 hover:text-red-600 rounded active:text-red-600 font-medium uppercase tracking-wide transition-colors duration-200"
                            >Services</Link>
                            {isDrpDwnOpen && (
                                <div 
                                onMouseOver={() => setIsDrpDwnOpen(true)}
                                onMouseLeave={() => setIsDrpDwnOpen(false)}
                                className={`absolute text-center top-8 mt-4 w-68 bg-slate-900 text-white rounded-md shadow-lg p-4 space-y-2 ${isDrpDwnOpen ? 'block' : 'hidden'}`}>
                                    <Link href="/services/CloudServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded uppercase tracking-wide">Cloud Services</Link>
                                    <Link href="/services/NetworkingServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded uppercase tracking-wide">Networking & Infrastructure</Link>
                                    <Link href="/services/SecurityServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded uppercase tracking-wide">CyberSecurity</Link>
                                    <Link href="/services/EndToEndServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded uppercase tracking-wide">End-to-End IT Solutions</Link>
                                </div>
                            )}

                    </div>
                    <Link 
                        href="/AboutUs" 
                        className="space-x-6 order-4 block px-4 py-2 hover:bg-slate-800 hover:text-red-600 active:text-red-600 rounded font-medium uppercase tracking-wide cursor-pointer transition-colors duration-200"
                        >About Us</Link>
                    {isMobile ? <CTAButton onClick={openForm} className="hidden">Get a Free Consultation</CTAButton> : <CTAButton onClick={openForm} className="order-5">Get a Free Consultation</CTAButton>}

                </div>
                <div className="flex justify-between p-2">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <CTAButton onClick={openForm} className="md:hidden">Get a Free Consultation</CTAButton>
                </div>
                
                {isMobile && (
                    <div className="md:hidden flex flex-col p-4 space-y-4 bg-slate-900 text-white">
                    <div className="flex items-center">
                        <Link href="/" >
                            <Image 
                            src="/G5-logo.png"
                            alt="G5 logo"
                            className="order-1"
                            height={64}
                            width={64}
                            />
                        </Link>
                        <span className="text-white text-xl font-semibold hidden sm:inline">G5 Solutions</span>
                    </div>
                        <Link href="/" onClick={() => setIsMobile(false)} className="active:text-red-600 focus:text-red-600">Home</Link>

                            <Link href="/#services-section" onMouseOver={() => setIsDrpDwnOpen(true)} onClick={() => setIsMobile(false)} className="active:text-red-600 focus:text-red-600">Services</Link>
                            {/* {isDrpDwnOpen && (
                                    <div 
                                    onMouseOver={() => setIsDrpDwnOpen(true)}
                                    onMouseLeave={() => setIsDrpDwnOpen(false)}
                                    className={`absolute text-center top-20 w-68 bg-slate-900 text-white rounded-md shadow-lg p-4 space-y-2 ${isDrpDwnOpen ? 'block' : 'hidden'}`}>
                                        <Link href="/services/CloudServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded font-medium uppercase tracking-wide">Cloud Services</Link>
                                        <Link href="/services/NetworkingServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded font-medium uppercase tracking-wide">Networking & Infrastructure</Link>
                                        <Link href="/services/SecurityServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded font-medium uppercase tracking-wide">CyberSecurity</Link>
                                        <Link href="/services/EndToEndServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 rounded font-medium uppercase tracking-wide">End-to-End IT Solutions</Link>
                                    </div>
                                )} */}
                        <Link href="/AboutUs" onClick={() => setIsMobile(false)} className="active:text-red-600 focus:text-red-600">About Us</Link>
                    </div>
        )}
            </div>

        
        </nav>
    );
}