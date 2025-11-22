import React from 'react';
import { User, Mail, Phone, Flower2, Diamond } from 'lucide-react';
import { FormInput } from '@/components/reservation/formInput';
import { FormSelect } from '@/components/reservation/formSelect';
import { FormTextarea } from '@/components/reservation/FormTextarea';

// Mock data for dropdowns
const peopleOptions = [
    { value: '1', label: '1 Person' },
    { value: '2', label: '2 People' },
    { value: '3-5', label: '3-5 People' },
    { value: '6+', label: '6+ People' },
];

const timeOptions = [
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '20:00', label: '8:00 PM' },
];

const ReservationPage: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reservation submitted (Not implemented yet)");
        alert("Reservation form submitted!");
    };

    return (
        <div className="min-h-screen bg-[#162A2A] text-stone-100 flex flex-col items-center justify-center py-16 px-4">

            {/* --- Header --- */}
            <div className="text-center mb-12">
                {/* Using Flower2 as a placeholder for the abstract icon */}
                <Flower2 className="mx-auto text-stone-400 mb-4 w-12 h-12 opacity-50" strokeWidth={1} />
                <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wide">
                    Reservation form
                </h1>
            </div>

            {/* --- Form Container --- */}
            <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#1a3333]/50 p-8 md:p-12 rounded-lg border border-[#2A4F4F] space-y-8">

                {/* Row 1: Event Name */}
                <div className="w-full">
                    <FormInput label="Event name" placeholder="e.g., Birthday Dinner, Game Night" />
                </div>

                {/* Row 2: Three Columns (People, Date, Time) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormSelect label="Number of people" options={peopleOptions} placeholder="Select..." />

                    {/* Using type="date" for native picker, styled to blend in */}
                    <FormInput
                        label="DD/MM/YYYY"
                        type="date"
                        className="[&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                    <FormSelect label="Time" options={timeOptions} placeholder="Select time..." />
                </div>

                {/* Row 3: Three Columns with Icons (Name, Email, Phone) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormInput label="Your name" placeholder="John Doe" icon={User} />
                    <FormInput label="Email address" type="email" placeholder="john@example.com" icon={Mail} />
                    <FormInput label="Phone number" type="tel" placeholder="+1 234 567 890" icon={Phone} />
                </div>

                {/* Row 4: Textarea */}
                <div className="w-full">
                    <FormTextarea label="Tell us more about event (Optional)" placeholder="Any special requests, allergies, or details about your game night?" />
                </div>
            </form>

            {/* --- Submit Button --- */}
            <div className="mt-12">
                <button className="bg-[#A3886D] hover:bg-[#8F765C] text-white py-3 px-8 rounded-sm flex items-center gap-3 transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                    <Diamond size={10} className="text-stone-200" fill="currentColor" />
                    Book Appointment
                    <Diamond size={10} className="text-stone-200" fill="currentColor" />
                </button>
            </div>

            {/* --- Framer Badge (Optional based on image) --- */}
            <div className="fixed bottom-4 right-4 bg-white text-black px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                Made in Framer
            </div>

        </div>
    );
};

export default ReservationPage;