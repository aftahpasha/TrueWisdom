import React, { useState } from 'react';;
import ModalBase from './Base';;

// Import icons for plans if available, or use placeholders

import DetailedPricingCard from '../DetailedPricingCard';
import { useLocation } from 'react-router-dom';

const pricingPlansData = [
    {
        id: 'truelove',
        title: "TrueLove",
        price: "Rp 15.000",
        icon: '/assets/images/vector_1.svg',
        description: "Untuk kamu yang sedang jatuh cinta, rindu, atau butuh ruang untuk mencintai diri sendiri.",
        durations: [
            { label: "7 Hari", price: "Rp 15.000" },
            { label: "14 Hari", price: "Rp 25.000" },
            { label: "21 Hari", price: "Rp 35.000" },
            { label: "30 Hari", price: "Rp 45.000" },
        ],
        features: [
            "Quote harian bertema cinta yang hangat dan dewasa",
            "Cocok untuk healing dari patah hati, memperdalam relasi, atau merayakan cinta",
            "Dikirim setiap hari via email, selama durasi pilihan",
            "Sudah Termasuk photocard yang dicetak (untuk paket tertentu)"
        ]
    },
    {
        id: 'truefaith',
        title: "TrueFaith",
        price: "Rp 15.000",
        // icon: trueFaithIcon, // Placeholder for actual icon path
        icon: '/assets/images/vector_3.svg',
        description: "Untuk kamu yang mencari ketenangan spiritual dan penguatan iman dalam setiap langkah.",
        durations: [
            { label: "7 Hari", price: "Rp 15.000" },
            { label: "14 Hari", price: "Rp 25.000" },
            { label: "30 Hari", price: "Rp 45.000" },
        ],
        features: [
            "Quote harian bertema spiritual dan keimanan",
            "Membantu refleksi diri dan menemukan kedamaian batin",
            "Dikirim setiap hari via email",
        ]
    },
    {
        id: 'trueaffirm',
        title: "TrueAffirm",
        price: "Rp 15.000",
        // icon: trueAffirmIcon, // Placeholder for actual icon path
        icon: '/assets/images/vector_4.svg',
        description: "Untuk kamu yang butuh afirmasi positif untuk memulai hari dengan semangat dan percaya diri.",
        durations: [
            { label: "7 Hari", price: "Rp 15.000" },
            { label: "14 Hari", price: "Rp 25.000" },
            { label: "30 Hari", price: "Rp 45.000" },
        ],
        features: [
            "Afirmasi positif harian untuk membangun mindset kuat",
            "Meningkatkan rasa percaya diri dan motivasi",
            "Dikirim setiap hari via email",
        ]
    },
    {
        id: 'truefriend',
        title: "TrueFriend",
        price: "Rp 15.000",
        // icon: trueFriendIcon, // Placeholder for actual icon path
        icon: '../../../assets/images/vector_5.svg', // Example, replace with actual icon
        description: "Untuk kamu yang menghargai arti persahabatan dan ingin merayakannya setiap hari.",
        durations: [
            { label: "7 Hari", price: "Rp 15.000" },
            { label: "14 Hari", price: "Rp 25.000" },
            { label: "30 Hari", price: "Rp 45.000" },
        ],
        features: [
            "Quote harian tentang persahabatan sejati",
            "Menginspirasi untuk menjadi teman yang lebih baik",
            "Dikirim setiap hari via email",
        ]
    }
];

const ModalSubscription = () => {
    const { hash } = useLocation();

    return (
        <ModalBase modal_id='modal_subscription'>
            <p className='text-center font-semibold text-black text-2xl mb-2'>Quote personalmu untuk hari ini tidak dapat dikirim 😔</p>
            <p className='text-center text-brand-gray mb-8'>Tapi kamu bisa tetap mendapatkan afirmasi harian yang sesuai hatimu — cukup dengan berlangganan paket sesuai topik yang kamu butuhkan.</p>
            <div className="carousel w-full">
                {pricingPlansData.map((plan, index) => (
                    <div id={`pricing-${index + 1}`} className="carousel-item w-full">
                        <DetailedPricingCard plan={plan} />
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {pricingPlansData.map((plan, index) =>
                    <a href={`#pricing-${index + 1}`} className={`h-4 w-4 rounded-full ${hash == `#pricing-${index + 1}` ? 'bg-brand-purple ' : 'bg-[#F2ECF8]'}`}></a>
                )}
            </div>
        </ModalBase>
    );
};

export default ModalSubscription;
