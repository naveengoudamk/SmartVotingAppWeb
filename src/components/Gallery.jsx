import React from 'react';

const Gallery = () => {
    const keyScreens = [
        { src: '/snap/AppLogin.png', alt: 'Secure Login', title: 'Secure Aadhaar Login' },
        { src: '/snap/AppDashboard.png', alt: 'User Dashboard', title: 'Voter Dashboard' },
    ];

    const diagrams = [
        { src: '/snap/SystemArchitecture.jpeg', alt: 'System Architecture', title: 'System Architecture' },
        { src: '/snap/Flowchart.png', alt: 'Process Flow', title: 'Process Flowchart' },
        { src: '/snap/use_case_diagram.jpeg', alt: 'Use Case Diagram', title: 'Use Case Diagram' },
        { src: '/snap/uml_diagram.jpeg', alt: 'UML Diagram', title: 'Class Diagram' },
    ];

    const screenshots = Array.from({ length: 12 }, (_, i) => ({
        src: `/snap/screenshot_${i + 1}.png`,
        alt: `App Interface ${i + 1}`,
        title: `App Interface ${i + 1}`
    }));

    const allImages = [...keyScreens, ...diagrams, ...screenshots];

    return (
        <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden" id="gallery">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        App <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Visuals & Architecture</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-[var(--color-text-dim)] leading-relaxed">
                        Explore the comprehensive design of the Smart Voting App. From secure authentication screens to detailed system architecture diagrams, 
                        these visuals demonstrate the robust engineering and user-centric design behind the platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allImages.map((img, index) => (
                        <div
                            key={index}
                            className="group relative bg-[var(--color-surface)] rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-slate-900/50 flex items-center justify-center h-64 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 border-t border-slate-700/50 relative z-20 bg-[var(--color-surface)]">
                                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors text-center">
                                    {img.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
