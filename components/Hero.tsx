export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-surface-variant">
            <img 
                alt="Autumn Winter Editorial Fashion" 
                className="absolute inset-0 w-full h-full object-cover object-center" 
                src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=2070&auto=format&fit=crop" 
            />
            
            <div className="absolute inset-0 bg-primary/20"></div> {/* Subtle dark overlay for text readability */}
            
            <div className="relative z-10 text-center flex flex-col items-center px-margin-mobile">
                <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-on-primary mb-8 max-w-4xl drop-shadow-sm">Autumn/Winter 2026</h1>
                <a className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-on-surface-variant transition-colors duration-300 inline-block" href="#shop">
                    Shop the Collection
                </a>
            </div>
        </section>
    );
}