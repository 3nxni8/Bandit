import Image from "next/image";

export function Logo() {
    return (
        <div className="text-center flex items-center justify-center m-5">
            <Image
                src="/Assets/BanditLogo.svg"
                alt="Bandit Logo"
                width={50}
                height={50}
                className="object-contain"
            />
            <div className="ml-3">
                <h1 className="font-bebas text-4xl font-bold text-foreground tracking-[0.1em] leading-none">
                    BOARDROOM
                </h1>
                <h2 className="font-bebas text-xl text-foreground tracking-[0.1em] uppercase mt-1">
                    BANDIT
                </h2>
            </div>
        </div>

    );
}