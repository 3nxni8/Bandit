import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image
                src="/Assets/BanditLogo.svg"
                alt="Bandit Logo"
                width={50}
                height={50}
                className="object-contain transition-transform group-hover:scale-110"
            />
            <div className="flex flex-col leading-none">
                <h1 className="font-bebas text-lg text-foreground tracking-[0.15em] font-bold">
                    BOARDROOM BANDIT
                </h1>
            </div>
        </Link>
    );
}