import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="w-full">
            <label className="block text-foreground text-sm mb-2">
                {label}
            </label>
            <textarea
                {...props}
                rows={5}
                className={`w-full bg-background border border-border text-foreground rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-[var(--color-red)] transition-colors resize-none ${className}`}
            />
        </div>
    );
};