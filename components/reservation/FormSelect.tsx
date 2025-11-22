import React from 'react';

interface FormSelectProps {
    label: string;
    options: { value: string; label: string }[];
    placeholder?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, options, placeholder, ...props }) => {
    return (
        <div className="w-full">
            <label className="block text-foreground text-sm mb-2">
                {label}
            </label>
            <select
                {...props}
                className="w-full bg-background border border-border text-foreground rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-[var(--color-red)] transition-colors"
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