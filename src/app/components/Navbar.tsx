'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import CTAButton from './CTAButton';
import { useFormProvider } from '../context/FormProvider';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [navCollapsed, setNavCollapsed] = useState(true);
    const [isDrpDwnOpen, setIsDrpDwnOpen] = useState(false);
    const {openForm} = useFormProvider();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="sticky top-0 z-50 h-20 bg-slate-900 text-white pt-1.5">
            <div className="max-w-full mx-auto lg:px-8 relative">

                <div className="hidden md:flex justify-between items-center">      
                    
                    <div className="flex items-center space-x-2">
                        <Link
                            href="/">
                            <Image 
                            src="/g5-new-logo.png"
                            alt="G5 logo"
                            className="order-1"
                            height={64}
                            width={64}
                            />
                        </Link>
                        <Link href="/" className="text-white text-xl font-semibold hidden sm:inline pl-2">G5 Solutions</Link>
                    </div>
                    <Link 
                        href="/" 
                        className="space-x-6 order-2 block px-4 py-2 hover:bg-slate-800 hover:text-red-600 active:text-red-600 rounded font-medium uppercase tracking-wide transition-colors duration-200"
                        >Home</Link>
                    <div className='relative order-3 flex items-center justify-center'>
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
                    {isMobile ? <CTAButton onClick={openForm} className="hidden">Get Your Free Consultation</CTAButton> : <CTAButton onClick={openForm} className="order-5">Get Your Free Consultation</CTAButton>}

                </div>
                <div className="flex justify-between p-2">
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-slate-800 active:bg-slate-800"
                        onClick={() => setNavCollapsed(!navCollapsed)}>
                        {!navCollapsed ? <X className="w-6 h-6 hover:text-red-600 focus:text-red-600 active:text-red-600 cursor-pointer" /> : <Menu className="cursor-pointer w-6 h-6" />}
                    </button>

                    <CTAButton onClick={openForm} className="md:hidden">Get Your Free Consultation</CTAButton>
                </div>
                
                {isMobile && !navCollapsed && (
                    <div className="md:hidden flex flex-col p-4 space-y-4 bg-slate-900 text-white top-2">
                    <div className="flex items-center">
                        <Link href="/" onClick={() => setNavCollapsed(true)}>
                            <Image 
                            src="/g5-new-logo.png"
                            alt="G5 logo"
                            className="order-1"
                            height={64}
                            width={64}
                            />
                        </Link>
                        <Link href="/" className="text-white text-xl font-semibold sm:inline pl-2">G5 Solutions</Link>
                    </div>
                        <Link href="/" onClick={() => setNavCollapsed(true)} className="active:text-red-600 focus:text-red-600 hover:text-red-600">Home</Link>
                            <div 
                                className='relative hover:cursor-pointer hover:text-red-600 focus:text-red-600 active:text-red-600'>
                                <div className="flex items-center space-x-1">
                                    <Link
                                        href="/#services-section"
                                        onClick={() => {setNavCollapsed(true); setIsDrpDwnOpen(false)}} 
                                    >Services</Link>
                                    {
                                        isDrpDwnOpen ? 
                                        <ChevronUp 
                                            className="inline pb-1" 
                                            onClick={() => setIsDrpDwnOpen(false)}/>
                                        : <ChevronDown 
                                            className="inline pb-1"
                                            onClick={() => setIsDrpDwnOpen(true)}/>
                                    }
                                    {isDrpDwnOpen && (
                                            <div 
                                            className="absolute text-center z-55 top-10 w-56 bg-slate-900 text-white rounded-md shadow-lg p-4 space-y-2">
                                                <Link href="/services/CloudServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 active:text-red-600 active:bg-slate-800 focus:text-red-600 focus:bg-slate-800 rounded font-medium uppercase tracking-wide" onClick={() => {setIsDrpDwnOpen(false); setNavCollapsed(true)}}>Cloud Services</Link>
                                                <Link href="/services/NetworkingServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 active:text-red-600 active:bg-slate-800 focus:text-red-600 focus:bg-slate-800 rounded font-medium uppercase tracking-wide" onClick={() => {setIsDrpDwnOpen(false); setNavCollapsed(true)}}>Networking & Infrastructure</Link>
                                                <Link href="/services/SecurityServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 active:text-red-600 active:bg-slate-800 focus:text-red-600 focus:bg-slate-800 rounded font-medium uppercase tracking-wide" onClick={() => {setIsDrpDwnOpen(false); setNavCollapsed(true)}}>CyberSecurity</Link>
                                                <Link href="/services/EndToEndServices" className="block px-4 py-2 hover:text-red-600 hover:bg-slate-800 active:text-red-600 active:bg-slate-800 focus:text-red-600 focus:bg-slate-800 rounded font-medium uppercase tracking-wide" onClick={() => {setIsDrpDwnOpen(false); setNavCollapsed(true)}}>End-to-End IT Solutions</Link>
                                            </div>
                                        )}
                                </div>
                            </div>

                        <Link href="/AboutUs" onClick={() => setNavCollapsed(true)} className="active:text-red-600 focus:text-red-600 hover:text-red-600">About Us</Link>
                    </div>
        )}
            </div>

        
        </nav>
    );
}