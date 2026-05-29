export default function NewArrivals() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32" id="shop">
            <div className="flex justify-between items-end mb-16">
                <h2 className="font-headline-md text-headline-md text-on-surface">New Arrivals</h2>
                <a className="font-label-caps text-label-caps text-on-surface uppercase border-b border-on-surface pb-1 hover:text-on-surface-variant transition-colors duration-300 hidden md:inline-block" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-16">
                <a className="group block" href="#">
                    <div className="aspect-[3/4] bg-surface-variant mb-6 overflow-hidden">
                        <img alt="Charcoal Coat" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvAfyliEixix78HukFl5janCWs0PBSYpFiUuGvxk-T4_RC6LryPLYZLrsHjLvAfsWkkIV_2doXA_4i-GUnmfQU0EQ-TCo0viYsa7UaVjiFOL-EqV33K_GtC-2dPkd7MB-q63Do_--cWDVeflyRmnmzdNTb_clJEXpQ6FvJnvgB7kBA3o46O0BU4FrPDSPL6hONK5CL7Z4XNHX9AMrH-bInJP3ZqKHpC8nJRFiEvwQYJ2O_QvspSa5uQlMSAXGgDi2cxSPYqRvmZHxA" />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-body-md text-body-md text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Charcoal Cashmere Coat</h3>
                        </div>
                        <span className="font-body-md text-body-md text-on-surface-variant">$1,200</span>
                    </div>
                </a>
                <a className="group block" href="#">
                    <div className="aspect-[3/4] bg-surface-variant mb-6 overflow-hidden">
                        <img alt="Silk Slip Dress" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwoRwsrG1n46DW1mcrM1J-qeHDP17yGdCH7t56AdhJ9upN8HRPCBuAjiCcnFmTY6jJ05FkDnXwDXDNwUbnzSP9SEkzJdio54FLWYdte2uUVeqIhyYVwPL5D5KMfl9nTEXopyHFrhJrDje89mIV5rH0MgSbt7Y04vWai1TIEZAPrkz9ODzhT_7OQgPgblfU084QsTXH5Xhsx37NG7ASsK6wSLA8-Mv6ZxDz5gLzQq5FGwkCeUph9d3htMhych7s7ivBlSY3ftOizl_" />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-body-md text-body-md text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Champagne Silk Slip Dress</h3>
                        </div>
                        <span className="font-body-md text-body-md text-on-surface-variant">$850</span>
                    </div>
                </a>
                <a className="group block" href="#">
                    <div className="aspect-[3/4] bg-surface-variant mb-6 overflow-hidden">
                        <img alt="Merino Knit" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGNxCLtFEZk9jWBZAi0dGiSfmcBhAgL5bgxA9LjJSFJ3q-FJs-CqGmKz5CZ6z_nU6upQWggY03HA122amwcKFI7RQs_c3gXCcvE5KLwAB-o5Qp-jslifz9W7yfqriP4Ui51mJUm2vLUo_C-eJgvfQQajzSC3lr1JYMnDNtdSjQckyq53bG23DvpaHH3s6YLytuCv-uRf_Uxz-hCLv6BtCES-gxhDiTx-mR8JyYcOthPj6gpnLLaeAwkFfIaJ0YkD-8cvixPjzHwUia" />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-body-md text-body-md text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Fine Merino Knit Sweater</h3>
                        </div>
                        <span className="font-body-md text-body-md text-on-surface-variant">$450</span>
                    </div>
                </a>
            </div>
            <div className="mt-12 text-center md:hidden">
                <a className="font-label-caps text-label-caps text-on-surface uppercase border-b border-on-surface pb-1 hover:text-on-surface-variant transition-colors duration-300 inline-block" href="#">View All</a>
            </div>
        </section>
    );
}