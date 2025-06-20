import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CheckPrimarySVG from '../../assets/images/check_primary.svg';
import CheckSuccessSVG from '../../assets/images/check_success.svg';
import XCircleBlackSVG from '../../assets/images/x_circle_black.svg';
import ArrowRightWhiteSVG from '../../assets/images/arrow_right_white.svg';
import Button from "../components/ui/Button";

const CheckoutAddress = () => {
    const [codePromo, setCodePromo] = useState('');
    const [selectedPromo, setSelectedPromo] = useState(null);
    const [sendAsGift, setSendAsGift] = useState(false);

    const removeSelectedPromo = () => {
        setSelectedPromo(null);
    }

    const handleGiftToggle = () => {
        setSendAsGift(!sendAsGift);
        console.log("Send as gift toggled:", !sendAsGift);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-ibm-plex-sans">
            <Navbar authenticated={true} />
            <main className="relative overflow-hidden bg-white pt-12 min-h-screen">
                {/* Background Gradient */}
                <div className="absolute inset-x-0 top-[100px] h-[743px] bg-[linear-gradient(180.0deg,rgba(229,210,253,1.00)_0.0%,rgba(229,211,253,0.00)_100.0%)]"></div>
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-[rgba(229,211,253,1.00)]"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 pt-16 pb-24">
                    <h3 className="font-semibold text-[2rem] mb-5">Checkout Paket</h3>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column - Address & Package Details */}
                        <div className="lg:w-[65%] space-y-6">
                            {/* Address Information Display */}
                            <div className="bg-white rounded-xl border border-brand-gray-light p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-semibold text-xl leading-6">Alamat Pengiriman</h4>
                                    <button className="text-brand-purple font-medium text-sm hover:underline">
                                        Ubah
                                    </button>
                                </div>
                                <hr className="mb-4" />

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-brand-purple text-white px-2 py-1 rounded text-xs font-medium">
                                            Rumah
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-brand-purple-dark">Stephen Kurniawan</p>
                                            <p className="text-brand-gray text-sm">+62 812-3456-7890</p>
                                        </div>
                                    </div>
                                    <div className="text-brand-gray-dark text-sm leading-relaxed">
                                        <p>Jl. Kebon Jeruk Raya No. 123, RT 001/RW 002</p>
                                        <p>Kebon Jeruk, Jakarta Barat, DKI Jakarta 11530</p>
                                    </div>
                                </div>
                            </div>

                            {/* Package Details */}
                            <div className="bg-white rounded-xl border border-brand-gray-light p-6">
                                <h4 className="font-semibold text-xl leading-6">Detail Paket</h4>
                                <hr className="my-4" />

                                <div className="flex flex-col gap-5">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h5 className="text-brand-purple font-semibold text-xl mb-2">
                                                <span className="italic">TrueLove</span> - 7 Hari
                                            </h5>
                                            <p className="text-brand-purple leading-[1.5rem] mb-4">
                                                Berikut adalah fitur-fitur yang akan Anda dapatkan :
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-brand-gray">Qty: 1</p>
                                            <p className="font-semibold text-lg text-brand-purple">Rp. 25.000</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain flex-shrink-0" />
                                            <p className="text-brand-purple leading-5">
                                                Quote harian bertema cinta yang hangat dan dewasa
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain flex-shrink-0" />
                                            <p className="text-brand-purple leading-5">
                                                Cocok untuk healing dari patah hati, memperdalam relasi, atau merayakan cinta
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain flex-shrink-0" />
                                            <p className="text-brand-purple leading-5">
                                                Dikirim setiap hari via email, selama 7 hari
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain flex-shrink-0" />
                                            <p className="text-brand-purple leading-5">
                                                Sudah Termasuk photocard yang dicetak dan dikirim ke alamat Anda
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Payment Summary */}
                        <div className="lg:w-[35%] flex flex-col gap-4">
                            {/* Promo Code */}
                            <div className="bg-white rounded-xl border border-brand-gray-light p-4">
                                <div className="flex gap-3">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            id="promo"
                                            value={codePromo}
                                            onChange={(e) => setCodePromo(e.target.value)}
                                            placeholder="Masukkan code promo"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                        />
                                        {selectedPromo != null &&
                                            <div className="absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2">
                                                <button type="button\" className="btn btn-link">
                                                    <img src={XCircleBlackSVG} alt="X Icon" className="object-contain" onClick={removeSelectedPromo} />
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    <Button type="button" variant="primary" size="sm" className="rounded-xl" disabled={selectedPromo != null} onClick={() => codePromo != null ? setSelectedPromo(codePromo) : null}>
                                        <span className='font-medium'>Terapkan</span>
                                    </Button>
                                </div>
                                {selectedPromo != null &&
                                    <div className="flex gap-2 items-center mt-4">
                                        <img src={CheckSuccessSVG} alt="Check Icon" className="object-contain h-5 w-5" />
                                        <p className="text-success font-medium text-sm">1 Voucher telah berhasil diterapkan</p>
                                    </div>
                                }
                            </div>

                            {/* Gift Option */}
                            <div className="bg-white rounded-xl border border-brand-gray-light p-4">
                                <label className="flex items-center gap-2 cursor-pointer text-brand-purple tracking-[0.2px] text-sm">
                                    <input
                                        type="checkbox"
                                        checked={sendAsGift}
                                        onChange={handleGiftToggle}
                                        className="hidden"
                                    />
                                    <div className="h-6 w-6 sm:h-7 sm:w-7 border-2 border-brand-purple rounded-md flex items-center justify-center transition-all duration-200">
                                        {sendAsGift && <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 bg-brand-purple rounded-sm"></div>}
                                    </div>
                                    Kirim sebagai Hadiah
                                </label>
                                {sendAsGift &&
                                    <div className="mt-4">
                                        <div className='mb-3'>
                                            <label htmlFor="receive_name" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Nama Penerima
                                            </label>
                                            <input
                                                type="text"
                                                id="receive_name"
                                                placeholder="Masukkan nama penerima"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                                required
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="receive_email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Email Penerima
                                            </label>
                                            <input
                                                type="text"
                                                id="receive_email"
                                                placeholder="Masukkan email penerima"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                                required
                                            />
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Payment Summary */}
                            <div className="bg-white rounded-xl border border-brand-gray-light p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="font-medium">Metode Pembayaran</p>
                                    <p className="font-semibold text-lg">Otomatis</p>
                                </div>
                                <hr className="mb-4" />

                                <h5 className="font-semibold text-xl mb-4">Ringkasan Pembayaran</h5>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <p className="text-brand-gray-dark">Sub Total (1 item)</p>
                                        <p className="font-medium">Rp. 15.000</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-brand-gray-dark">Ongkos Kirim</p>
                                        <p className="font-medium">Rp. 10.000</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-brand-gray-dark">Biaya Layanan</p>
                                        <p className="font-medium">Rp. 2.500</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-brand-gray-dark">Kode Unik</p>
                                        <p className="font-medium text-green-600">-Rp. 350</p>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-lg">Total Pembayaran</p>
                                        <p className="font-bold text-xl text-brand-purple">Rp. 27.150</p>
                                    </div>
                                </div>

                                <Button type="button" variant="primary" size="md" className="w-full rounded-xl flex gap-3 justify-center items-center">
                                    <span className='font-medium'>Bayar Sekarang</span>
                                    <img src={ArrowRightWhiteSVG} alt="Arrow Right Icon" className="object-contain" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutAddress;