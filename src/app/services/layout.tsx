import type { ReactNode } from 'react';

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
        <div style={{backgroundImage: "var(--secondary-bg-img)"}} className="w-full h-36 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>
        </div>
            <div className="space-y-6">
                {children}
            </div>
    </section>
  );
}