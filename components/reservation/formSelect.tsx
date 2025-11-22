import React from 'react';

interface FormSelectProps {
    label: string;
    options: { value: string; label: string }[];
    placeholder?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, options, placeholder, ...props }) => {
    return (
        <div className="w-full">
            <label className="block text-stone-300 text-sm mb-2">
                {label}
            </label>
            <select
                {...props}
                className="w-full bg-[#1F3A3A] border border-[#2A4F4F] text-stone-100 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-[#A3886D] transition-colors placeholder-stone-500"
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};