export default function CuratedCollections() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-16 text-center">Curated Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                
                <a className="group relative block w-full h-[400px] md:h-full overflow-hidden bg-surface-variant" href="#">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop')" }}
                        data-alt="Editorial shot of a woman in an elegant beige winter coat, minimalist aesthetic."
                    ></div>
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-8 left-8">
                        <h3 className="font-headline-md text-headline-md text-on-primary">Women</h3>
                        <span className="font-label-caps text-label-caps text-on-primary uppercase mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Shop Now</span>
                    </div>
                </a>

                <div className="grid grid-rows-2 gap-6 md:col-span-2 h-[800px] md:h-full">
                    
                    <a className="group relative block w-full h-full overflow-hidden bg-surface-variant" href="#">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=2070&auto=format&fit=crop')" }}
                            data-alt="Detail of a men's tailored charcoal suit and winter styling."
                        ></div>
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-8 left-8">
                            <h3 className="font-headline-md text-headline-md text-on-primary">Men</h3>
                            <span className="font-label-caps text-label-caps text-on-primary uppercase mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Shop Now</span>
                        </div>
                    </a>

                    <a className="group relative block w-full h-full overflow-hidden bg-surface-variant" href="#">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop')" }}
                            data-alt="Minimalist leather handbag on a clean architectural background."
                        ></div>
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-8 left-8">
                            <h3 className="font-headline-md text-headline-md text-on-primary">Accessories</h3>
                            <span className="font-label-caps text-label-caps text-on-primary uppercase mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Shop Now</span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}