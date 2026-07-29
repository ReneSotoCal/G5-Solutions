'use client';
import CTAButton from '@/app/components/CTAButton';
import { useFormProvider } from '@/app/context/FormProvider';

export default function HeroSection() {
  const {openForm} = useFormProvider();
  return (
    <div style={{ backgroundImage: "var(--secondary-bg-img)" }} className="secondary-bg-img bg-cover text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Streamline Your Business with Expert IT Solutions
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto pb-8">
            Managed IT, Cloud Services & Infrastructure You Can Trust.
        </p>
        <CTAButton onClick={openForm}>Get Your Free Consultation</CTAButton>
    </div>

  );
}
