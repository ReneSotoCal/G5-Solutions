'use server'
type FormState = {
    errors?: Record<string, string>;
    success?: boolean;
};

export async function handleFormSubmission(prevData: FormState, formData: FormData): Promise<FormState> {
    const fName = formData.get('fName')?.toString().trim();
    const mName = formData.get('mName')?.toString().trim();
    const lName = formData.get('lName')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    //const message = formData.get('message')?.toString().trim();

    const fNameRegex = /^[A-Za-z'-]+$/;
    const lNameRegex = /^[A-Za-z\s'-]+$/;
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors: Record<string, string> = {};

    if (!fName || !fNameRegex.test(fName)) {
        errors.fName = 'Invalid first name';
    }
    if (mName && !fNameRegex.test(mName)) {
        errors.mName = 'Invalid middle name';
    }
    if (!lName || !lNameRegex.test(lName)) {
        errors.lName = 'Invalid last name';
    }
    if (!email || !emailRegex.test(email)) {
        errors.email = 'Invalid email';
    }
    if (!phone || !phoneRegex.test(phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    // Process form here (e.g., store in DB, send email, etc.)
    return { success: true };
}