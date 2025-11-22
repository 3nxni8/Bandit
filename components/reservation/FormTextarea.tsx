import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="w-full">
            <label className="block text-stone-300 text-sm mb-2">
                {label}
            </label>
            <textarea
                {...props}
                rows={5}
                className={`w-full bg-[#1F3A3A] border border-[#2A4F4F] text-stone-100 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-[#A3886D] transition-colors placeholder-stone-500 resize-none ${className}`}
            />
        </div>
    );
};