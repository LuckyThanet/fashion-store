export default function Lookbook() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 mt-12 md:mt-0 px-4 md:px-0">
                    <blockquote className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-8 relative">
                        &quot;Luxury is in the details, defined not by excess, but by precise restraint and intentionality.&quot;
                    </blockquote>
                    <a className="font-label-caps text-label-caps text-on-surface uppercase border-b border-on-surface pb-1 hover:text-on-surface-variant transition-colors duration-300 inline-block" href="#">Explore the Campaign</a>
                </div>
                <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
                    <div className="aspect-[4/5] bg-surface-variant w-full overflow-hidden" data-alt="A striking high-fashion editorial lifestyle shot of a model wearing minimalist, structured autumn outerwear. The setting is a sparse, brutalist concrete environment with dramatic natural lighting casting sharp shadows. The color palette is monochromatic with subtle beige accents, creating a calm, exclusive mood. The composition emphasizes clean lines and superior tailoring.">
                        <div className="w-full h-full bg-surface-container-high bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}