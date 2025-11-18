"use client";

const Footer = () => {
    return (
        <footer className="w-full mt-12 border-t border-black/10 py-8 text-center text-xs tracking-[0.3em] uppercase text-black/60">
            <p>&copy; {new Date().getFullYear()} Boardroom Bandit. All rights reserved.</p>
        </footer>
    );
};
export default Footer;