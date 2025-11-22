import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: LucideIcon;
}

export const FormInput: React.FC<FormInputProps> = ({ label, icon: Icon, className = '', ...props }) => {
    return (
        <div className="w-full">
        <label className="block text-stone-300 text-sm mb-2">
            {label}
            </label>
            <div className="relative">
        <input
            {...props}
    className={`w-full bg-[#1F3A3A] border border-[#2A4F4F] text-stone-100 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-[#A3886D] transition-colors placeholder-stone-500 ${Icon ? 'pr-10' : ''} ${className}`}
    />
    {Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-400">
        <Icon size={18} />
    </div>
    )}
    </div>
    </div>
);
};