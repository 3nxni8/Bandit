import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
}

export const FormInput: React.FC<FormInputProps> = ({ label, icon: Icon, className, ...props }) => {
  return (
    <div className="w-full">
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-muted-foreground mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className={cn(
            'w-full rounded-md border bg-transparent py-3 px-4 leading-tight text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none',
            { 'pr-10': !!Icon },
            className
          )}
        />
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
            <Icon size={18} />
          </div>
        )}
      </div>
    </div>
  );
};

