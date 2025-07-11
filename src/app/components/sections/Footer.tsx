import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="flex flex-col text-center items-center py-4 px-2 gap-4">
                <div className="flex flex-row gap-4">
                    <Link href="https://www.instagram.com/g5_business_solutions/">
                        <Image
                        src="/instagram.png"
                        alt="Instagram Icon"
                        width={50}
                        height={50}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/g5businesssolutions/">
                        <Image
                        src="/linkedin.png"
                        alt="LinkedIn Icon"
                        width={50}
                        height={50}/>
                    </Link>
                    <Link href="https://www.facebook.com/people/G5-Business-Solutions/61576352015023/">
                        <Image
                        src="/facebook.png"
                        alt="FaceBook Icon"
                        width={50}
                        height={50}/>
                    </Link>
                    <Link href="https://x.com/G5BizSolutions">
                        <Image
                        src="/x.png"
                        alt="X Icon"
                        width={50}
                        height={50}/>
                    </Link>
                </div>
                <Link href="" className="hover:text-red-600">Privacy Policy</Link>
                <Link href="" className="hover:text-red-600">Terms & Conditions</Link>
                <p>&copy; {new Date().getFullYear()} G5 Business Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}