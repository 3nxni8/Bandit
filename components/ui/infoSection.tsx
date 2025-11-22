import React from 'react';
import { Diamond } from 'lucide-react';

export const InfoSection = () => {
    return (
        <section className="bg-white text-[var(--color-black)] py-24 px-4 border-t border-[var(--border)]">
            <div className="max-w-[1400px] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-4 text-center">

                    {/* --- Column 1: Get In Touch --- */}
                    <div className="flex flex-col items-center px-4 pb-12 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                        <div className="mb-6 text-[var(--color-red)]">
                            <Diamond size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-4">
                            Get In Touch
                        </h3>
                        <div className="text-muted-foreground text-sm leading-loose font-medium">
                            <p>
                                <span className="text-[var(--color-black)] font-bold mr-2">T.</span>
                                +12 344 0567899
                            </p>
                            <p>
                                <span className="text-[var(--color-black)] font-bold mr-2">M.</span>
                                info@example.com
                            </p>
                        </div>
                    </div>

                    {/* --- Column 2: Address --- */}
                    <div className="flex flex-col items-center px-4 py-12 lg:py-0 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                        <div className="mb-6 text-[var(--color-red)]">
                            <Diamond size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-4">
                            Address
                        </h3>
                        <div className="text-muted-foreground text-sm leading-loose font-medium max-w-[200px]">
                            <p>71 Madison Ave, New York,</p>
                            <p>NY 10016</p>
                        </div>
                    </div>

                    {/* --- Column 3: Sub Branch --- */}
                    <div className="flex flex-col items-center px-4 py-12 lg:py-0 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                        <div className="mb-6 text-[var(--color-red)]">
                            <Diamond size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-4">
                            Sub Branch
                        </h3>
                        <div className="text-muted-foreground text-sm leading-loose font-medium max-w-[250px]">
                            <p>12/A, New booston tower, London,</p>
                            <p>Uk</p>
                        </div>
                    </div>

                    {/* --- Column 4: Opening Hours --- */}
                    <div className="flex flex-col items-center px-4 pt-12 lg:pt-0">
                        <div className="mb-6 text-[var(--color-red)]">
                            <Diamond size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-4">
                            Opening Hours
                        </h3>
                        <div className="text-muted-foreground text-sm leading-loose font-medium">
                            <p className="mb-1">
                                <span className="text-[var(--color-red)] font-bold">Mon — Thu:</span> 10.00 am — 01:00 am
                            </p>
                            <p>
                                <span className="text-[var(--color-red)] font-bold">Fri — Sun:</span> 10.00 am — 01:00 am
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};