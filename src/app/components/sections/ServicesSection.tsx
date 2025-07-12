import Image from 'next/image';
import Card from '../Card';

export default function ServicesSection() {
    const cloudIcon = <Image src="/cloud-logo" alt="Cloud Computing Logo" width={100} height={100}></Image>; 
    const cloudDesciption = "Leverage scalable cloud services, including compute, storage, and serverless architecture, to drive innovation and enhance operational flexibility."

    const networkIcon = <Image src="/network-logo" alt="Networking and Infrastructure Logo" width={100} height={100}></Image>; 
    const networkDesciption = "Design and implement scalable networking solutions for businesses, focusing on secure, high-performance routing and switching to meet evolving operational demands."

    const cyberIcon = <Image src="/cyber-logo" alt="Cybersecurity Logo" width={100} height={100}></Image>; 
    const cyberDesciption = "Protect your data and networks with proactive threat management, compliance-driven strategies, and robust security solutions tailored to your needs."

    const solutionsIcon = <Image src="/solutions-icon" alt="Solutions Logo" width={100} height={100}></Image>; 
    const solutionsDesciption = "Provide complete IT lifecycle management, from hardware procurement (servers, storage, and PCs) to virtualization and edge computing, ensuring that your business operates with efficiency and flexibility."
   
    return (
        <div style={{ backgroundImage: "var(--secondary-bg-img)" }} className="bg-cover">
            <section id="services-section" className="text-center space-y-8 px-4 py-16 pb-20 scroll-mt-20">
                <p className="text-3xl md:text-5xl text-white font-semibold uppercase tracking-wide">
                    Our Core Services
                </p>
                <p className="text-xl md:text-3xl font-bold text-white">
                    Scalable, Secure, and Custom IT Solutions <br /> Built for Your Business
                </p>
                <p className="text-lg text-gray-100">
                    From infrastructure to automation, we design technology solutions that grow with your company
                    — with performance, reliability, and security at the core.
                </p>
            </section>
            <div className="flex justify-evenly flex-col xl:flex-row w-full h-auto">
                <Card icon={cloudIcon} title="Cloud Computing" description={cloudDesciption} link="" linkText="Explore Cloud Services "/>
                <Card icon={networkIcon} title="Networking & Infrastructure" description={networkDesciption} link="" linkText=" Discover Network Solutions "/>
                <Card icon={cyberIcon} title="CyberSecurity" description={cyberDesciption} link="" linkText=" Protect Your Business "/>
                <Card icon={solutionsIcon} title="End-to-End IT Solutions" description={solutionsDesciption} link="" linkText=" See Our IT Solutions " />
            </div>
        </div>

    );
}