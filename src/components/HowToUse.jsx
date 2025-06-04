import React from 'react';

const HowToUse = ({ steps, vector23, vector24 }) => {
    return (
        <div className="lg:w-3/5 xl:w-1/2">
            <div className="mb-10">
                <span className="block text-lg font-medium text-brand-orange-dark capitalize font-ibm-plex-sans mb-2">
                    Cara Pakai TrueWisdom
                </span>
                <h2 className="text-4xl sm:text-5xl font-medium text-brand-purple-dark font-ibm-plex-serif leading-tight tracking-[-1px]">
                    Mulai dengan <i className="italic underline">Sederhana</i>, Namun <i className="italic underline">Bermakna</i>
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-brand-gray-dark font-ibm-plex-sans">
                    Proses sederhana dan efektif untuk memulai membuat <i className="italic">Quotes</i>
                </p>
            </div>

            {/* Steps */}
            <div className="relative flex flex-col">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-6">
                        <div className="flex flex-col items-center">
                            {/* Circle with number */}
                            <div className="bg-brand-purple text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-semibold font-ibm-plex-serif z-10">
                                {step.id}
                            </div>

                            {/* Vertical line - only between steps (not after the last one) */}
                            {index < steps.length - 1 && (
                                <div
                                    className="h-20 w-px mt-1" // Adjust height to connect circles without gaps
                                    style={{
                                        backgroundImage: `url(${index % 2 === 0 ? vector23 : vector24})`,
                                        backgroundRepeat: 'repeat-y',
                                        backgroundSize: '100%',
                                        backgroundPosition: 'center top'
                                    }}
                                />
                            )}
                        </div>

                        <div className="pb-8"> {/* Add padding to create consistent spacing */}
                            <h3 className="text-2xl font-medium text-brand-purple-dark font-ibm-plex-serif mb-2">
                                {step.title}
                            </h3>
                            <p className="text-base text-brand-gray-dark font-ibm-plex-sans">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowToUse;