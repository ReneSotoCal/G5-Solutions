import Image from 'next/image';

export default function AboutUs(){
   return( 
    <div className="bg-white flex flex-col justify-center items-center">
    <div className="py-6">
        <Image
        src="/founder-img.jpg"
        width={300}
        height={300}
        className="rounded-full"
        alt="Picture of the founder, Terrill Gant">
        </Image>
    </div>
    <h2 className="font-semibold text-2xl">TERRILL GANT</h2>
    <p className="font-medium text-xl">Chief Executive Officer</p>
    <div className="font-medium text-lg text-center">
        <p>tgant@G5BusinessSolutions.com</p>
        <p>Info@g5businesssolutions.com</p>
        <p >912-217-3104</p>
    </div>
    <div className="h-24 w-full flex justify-center items-center bg-slate-900 my-6">
        <h1 className="font-bold text-3xl text-white">About the Founder</h1>
    </div>
    <div className="font-normal text-md px-6 leading-relaxed indent-6 flex flex-col gap-2">
        <p>Mr. Terrill Gant, a United States Army Veteran and seasoned business leader, resides in Richmond Hill, Georgia, where he combines a passion for leadership and technology with a commitment to helping organizations succeed. As the founder and CEO of G5 Business Solutions, a CVE-Certified Service-Disabled Veteran-Owned Small Business, Mr. Gant has built a company that delivers innovative IT, logistics, and operational solutions to government and private-sector clients.</p>
        <p>Inspired by his years of military service, Mr. Gant established G5 Business Solutions to provide businesses with the tools and strategies they need to thrive in a rapidly evolving digital landscape.</p>
        <p>Mr. Gant brings a diverse skill set and over 20 years of experience in logistics, operations, and IT management to his role at G5 Business Solutions. His career spans military and civilian sectors, where he has consistently delivered measurable results.</p>

    </div>
     <div className="h-24 w-full flex justify-center items-center bg-slate-900 my-6">
        <h1 className="font-bold text-3xl text-white">About G5 Solutions</h1>
    </div>
    <div className="font-normal text-md px-6 leading-relaxed indent-6 flex flex-col gap-2">
        <p>G5 Business Solutions is a professional services and managed IT solutions provider specializing in delivering innovative technology and operational strategies to government, public, and private-sector clients. G5 prides itself on offering unmatched expertise in IT infrastructure management, program and project management, logistics solutions, and business continuity planning.</p>
        <p>Our team combines cutting-edge technology with strategic planning to ensure businesses operate efficiently, securely, and with confidence in today’s ever-changing digital landscape. At G5 Business Solutions, we are committed to empowering organizations with tailored, scalable solutions that drive performance and growth.</p>

    </div>
    </div>
);
}  