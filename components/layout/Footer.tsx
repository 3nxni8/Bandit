"use client";

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-[var(--border)] py-8 text-center text-xs tracking-[0.3em] uppercase text-[color:rgba(5,5,9,0.6)]">
      <p>&copy; {new Date().getFullYear()} Boardroom Bandit. All rights reserved.</p>
    </footer>
  );
};
export default Footer;