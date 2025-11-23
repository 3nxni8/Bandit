import { Clock, Phone, MapPin, Diamond } from "lucide-react";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

export function UtilityBar() {
  return (
    <div className="container mx-auto mt-4 mb-2 px-4 lg:px-8 flex flex-col gap-2 text-[var(--color-white)]">
      {/* Top row: Content above the line */}
      <div className="flex flex-col md:flex-row justify-between items-end text-[12px] tracking-widest font-medium uppercase opacity-80">
        {/* Left Section: Hours and Social Media */}
        <div className="flex-1 flex flex-col md:flex-row items-end justify-start gap-2 mb-0 md:mb-0">
          {/* Hours */}
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            <span>Mon - Thu: 11am - 11pm</span>
          </div>

          {/* Diamond separator */}
          <Diamond className="h-2 w-2 hidden md:block" />

          {/* Socials */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline">Follow Us:</span>
            <div className="flex gap-2">
              <FaInstagram className="h-3 w-3 cursor-pointer hover:text-[var(--color-black)] transition-colors" />
              <FaXTwitter className="h-3 w-3 cursor-pointer hover:text-[var(--color-black)] transition-colors" />
              <FaFacebook className="h-3 w-3 cursor-pointer hover:text-[var(--color-black] transition-colors" />
            </div>
          </div>
        </div>


        {/* Right Section: Phone and Address */}
        <div className="flex-1 flex flex-col md:flex-row items-end justify-end gap-2">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 cursor-pointer hover:text-[var(--color-black)] transition-colors" />
            <span>+60182730350</span>
          </div>

          {/* Diamond separator */}
          <Diamond className="h-2 w-2 hidden md:block" />

          {/* Address */}
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="h-3 w-3 cursor-pointer hover:text-[var(--color-black)] transition-colors" />
            <span>Evolve Mall , Ara-Damansara, Malaysia</span>
          </div>
        </div>
      </div>

      {/* Middle row: Line with logo cutout in center */}
      <div className="flex items-center justify-center">
        {/* Left line */}
        <div className="flex-1 flex items-center">
          <div className="w-full border-t border-[var(--color-gold)]" />
        </div>


        {/* Right line */}
        <div className="flex-1 flex items-center">
          <div className="w-full border-t border-[var(--color-gold)]" />
        </div>
      </div>
    </div>
  );
}