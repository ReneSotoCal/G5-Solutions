import { ReactNode } from 'react'
import Link from 'next/link'
type CardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
};

export default function Card({icon, title, description, link, linkText} : CardProps) {
    
    return (
        <div className="flex flex-col justify-between items-center self-center bg-white text-slate-900 m-16 mt-0 xl:m-8 p-8 w-full h-95 border-b-8 border-red-600">
            <div className="">{icon}</div>
            <p className="font-bold text-2xl text-center">{title}</p>
            <div className="text-center line-clamp-3">{description}</div>
            <Link href={link} className="text-center text-red-600 hover:underline">{linkText}<span>&rarr;</span></Link>
        </div>
    );
}