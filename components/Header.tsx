export default function Header() {
    return (
        <header className="bg-surface-container-lowest w-full top-0 sticky z-50">
            <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">

                <div className="hidden md:flex items-center gap-8">
                    <a className="text-on-surface border-b border-on-surface pb-1 font-label-caps text-label-caps uppercase hover:text-primary transition-all duration-300" href="#">Collections</a>
                    <a className="text-on-surface-variant font-label-caps text-label-caps uppercase hover:text-primary transition-all duration-300 underline-offset-8 hover:underline" href="#">Lookbook</a>
                    <a className="text-on-surface-variant font-label-caps text-label-caps uppercase hover:text-primary transition-all duration-300 underline-offset-8 hover:underline" href="#">Archive</a>
                    <a className="text-on-surface-variant font-label-caps text-label-caps uppercase hover:text-primary transition-all duration-300 underline-offset-8 hover:underline" href="#">About</a>
                </div>

                <button aria-label="Open menu" className="md:hidden text-on-surface hover:opacity-80 transition-opacity duration-300">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.5]">
                        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <a className="font-headline-md text-headline-md tracking-widest text-on-surface uppercase transition-opacity duration-300 hover:opacity-80" href="#">ELÉVANCE</a>
                </div>

                <div className="flex items-center gap-6">
                    <button aria-label="Search" className="text-on-surface hover:opacity-80 transition-opacity duration-300 hidden md:block">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.5]">
                            <circle cx="11" cy="11" r="5.5" />
                            <path d="m16 16 4 4" strokeLinecap="round" />
                        </svg>
                    </button>
                    <button aria-label="Shopping Bag" className="text-on-surface hover:opacity-80 transition-opacity duration-300">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.5]">
                            <path d="M6 8h12l-1 12H7L6 8Z" />
                            <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}