import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Secure Authentication",
            desc: "Aadhaar-based verification ensures only eligible citizens can vote. Multi-factor authentication with biometric validation.",
            icon: "🔒",
            color: "emerald"
        },
        {
            title: "Real-time Results",
            desc: "Watch election results unfold live with dynamic visualizations, charts, and instant vote counting.",
            icon: "📊",
            color: "blue"
        },
        {
            title: "Multi-Election Support",
            desc: "Participate in multiple elections simultaneously - national, state, and local - with our batch voting system.",
            icon: "🗳️",
            color: "purple"
        },
        {
            title: "Admin Dashboard",
            desc: "Comprehensive election management tools for administrators with real-time monitoring and control.",
            icon: "⚙️",
            color: "orange"
        },
        {
            title: "Firebase Integration",
            desc: "Cloud-based backend ensures data security, real-time sync, and scalable infrastructure.",
            icon: "☁️",
            color: "cyan"
        },
        {
            title: "Transparent Process",
            desc: "Complete audit trail and transparency in every step from registration to result declaration.",
            icon: "✅",
            color: "green"
        },
        {
            title: "Mobile-First Design",
            desc: "Optimized for Android devices with intuitive UI/UX for seamless voting experience.",
            icon: "📱",
            color: "pink"
        },
        {
            title: "Dark Mode",
            desc: "A sleek, eye-friendly interface designed for all lighting conditions with modern aesthetics.",
            icon: "🌙",
            color: "indigo"
        }
    ];

    const stats = [
        { value: "100%", label: "Secure", icon: "🛡️" },
        { value: "Real-time", label: "Results", icon: "⚡" },
        { value: "24/7", label: "Available", icon: "🌐" },
        { value: "Zero", label: "Paper Waste", icon: "🌱" }
    ];

    return (
        <section id="features" className="py-24 bg-[var(--color-surface)]/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">SmartVoting?</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-[var(--color-text-dim)] max-w-3xl mx-auto leading-relaxed">
                        Built with cutting-edge technology to revolutionize the democratic process.
                        SmartVoting combines security, transparency, and accessibility to ensure a fair and efficient voting experience for every citizen.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-[var(--color-text-dim)]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[var(--color-bg)] border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 text-center group"
                        >
                            <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{f.icon}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{f.title}</h3>
                            <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                        <p className="text-lg text-[var(--color-text)] font-medium">
                            🚀 Empowering democracy through technology - making every vote count, securely and transparently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
