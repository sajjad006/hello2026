export default function Timeline() {
    return (
        <div className=" ocean-bg min-h-screen flex flex-col bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white">
            <h2 className="text-center font-extrabold text-4xl lg:text-5xl pt-24 pb-4 text-[#a9e8ff] drop-shadow-lg tracking-wide">
                TIMELINE
            </h2>

            <div className="relative max-w-7xl mx-auto pt-24 pb-24 flex-1">
                <div className="relative">

                    
                    <div className="absolute inset-0 ml-8 w-[4px] bg-gradient-to-b from-transparent via-[#a9e8ff] to-transparent opacity-60" />

                    <div className="space-y-20">
                        {[
                            {
                                time: '12-1.00pm',
                                title: 'Freshman to Founder, Journey with IEEE JUSB: Saptarshi Pani.',
                            },
                            { time: '1.00-2.00pm', title: 'Break' },
                            {
                                time: '2.00-2.30pm',
                                title: 'General Address by VC, Jadavpur University and Chairperson IEEE Kolkata Section.',
                            },
                            { time: '2.30-3.15pm', title: 'Web Dev Session.' },
                            { time: '3.15-4.00pm', title: 'Gen AI session.' },
                            {
                                time: '4.00-4.30pm',
                                title: 'Career Development with IEEE by Saptarshi Ghosh.',
                            },
                            { time: '4.30-4.45pm', title: 'Refreshments' },
                            {
                                time: '5.00-5.45pm',
                                title: 'Infinitieee and Prize Distribution.',
                            },
                        ].map((event, index) => (
                            <div key={index} className="flex justify-start gap-10">

                                <div className="flex flex-col md:flex-row items-center relative z-10">
                                    
                                    {/* Ocean node */}
                                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm shadow-lg shadow-[#022c3d]/60 flex items-center justify-center absolute left-3">
                                        <div className="h-4 w-4 rounded-full bg-[#00d8ff] border border-white/80 shadow-sm" />
                                    </div>

                                    <div className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-[#d9faff]">
                                        {event.time}
                                    </div>
                                </div>

                                <div className="relative pl-20 pr-4 w-full">
                                    <div className="md:hidden block text-lg mb-4 text-left font-[800] text-[#d9faff]">
                                        {event.time}
                                    </div>

                                    <div>
                                        <h2 className="text-white text-2xl md:text-3xl font-medium mb-8 drop-shadow-md">
                                            {event.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
