"use client";

import React from 'react';
import { User, Mail, Phone, Diamond } from 'lucide-react';
import { FormInput } from '@/components/reservation/FormInput';
import { FormSelect } from '@/components/reservation/FormSelect';
import { FormTextarea } from '@/components/reservation/FormTextarea';
import {Marquee} from "@/components/ui/Marquee";
import {InfoSection} from "@/components/ui/infoSection";
import { Banner } from '@/components/ui/Banner';

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
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState<{type: 'success' | 'error', text: string} | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage({
                type: 'success',
                text: 'Thank you! Your reservation request has been received. We will contact you shortly to confirm.'
            });
            
            // Clear message after 5 seconds
            setTimeout(() => setSubmitMessage(null), 5000);
        }, 1000);
    };

    return (
        <>
            <Banner
                title="Reserve Your Spot"
                subtitle="Book your table for an unforgettable dining experience."
            />

            <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 md:px-8">

                {/* --- Form Container --- */}
                <form onSubmit={handleSubmit} className="w-full max-w-7xl bg-card/50 p-6 sm:p-8 md:p-12 rounded-lg border border-border space-y-6 md:space-y-8">

                    {/* Row 1: Event Name */}
                    <div className="w-full">
                        <FormInput label="Event name" placeholder="e.g., Birthday Dinner, Game Night" />
                    </div>

                    {/* Row 2: Three Columns (People, Date, Time) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <FormInput label="Your name" placeholder="John Doe" icon={User} />
                        <FormInput label="Email address" type="email" placeholder="john@example.com" icon={Mail} />
                        <FormInput label="Phone number" type="tel" placeholder="+1 234 567 890" icon={Phone} />
                    </div>

                    {/* Row 4: Textarea */}
                    <div className="w-full">
                        <FormTextarea label="Tell us more about event (Optional)" placeholder="Any special requests, allergies, or details about your game night?" />
                    </div>

                    {/* Success/Error Message */}
                    {submitMessage && (
                        <div 
                            className={`p-4 rounded-md ${
                                submitMessage.type === 'success' 
                                    ? 'bg-green-50 border border-green-200 text-green-800' 
                                    : 'bg-red-50 border border-red-200 text-red-800'
                            }`}
                            role="alert"
                        >
                            <p className="text-sm font-medium">{submitMessage.text}</p>
                        </div>
                    )}

                    {/* --- Submit Button --- */}
                    <div className="flex justify-center pt-4">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="bg-[var(--color-gold)] hover:bg-[var(--color-black)]/90 text-white py-3 px-6 md:px-8 rounded-sm flex items-center gap-3 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                        </button>
                    </div>
                </form>


            </div>

            <Marquee />
            <Marquee />
            <InfoSection />
        </>
    )
};

export default ReservationPage;