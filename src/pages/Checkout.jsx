import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Button from "../components/ui/Button";
import ModalMyAddress from "../components/modal/ModalMyAddress";
import ModalNewAddress from "../components/modal/ModalNewAddress";

const Checkout = () => {
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
                        <div className="lg:w-[65%]">
                            <div className="bg-white rounded-xl border border-brand-gray-light p-3 mb-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-xl leading-6">Alamat Pengiriman</h4>
                                    <button className="btn btn-ghost btn-sm" onClick={() => modal_my_address.showModal()}>
                                        <img src="/assets/images/chevron_right_gray.svg" alt="Arrow Icon" className="object-contain" />
                                    </button>
                                    <ModalMyAddress />
                                    <ModalNewAddress />
                                </div>
                                <hr className="my-3" />
                                <div className="flex gap-4 items-start">
                                    <img src="/assets/images/location_primary.svg" alt="Arrow Icon" className="object-contain pt-2" />
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold text-lg">Caroline,</p>
                                        <p className="text-brand-purple text-lg">6289746172218,</p>
                                        <p className="text-brand-purple text-lg">
                                            Jalan Sudirman Nomor 45, Kelurahan Kebon Kacang, Kecamatan Tanah Abang, Jakarta Pusat, DKI Jakarta, Indonesia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-brand-gray-light p-3">
                                <h4 className="font-semibold text-xl leading-6">Detail Paket</h4>
                                <hr className="my-3" />
                                <div className="flex flex-col gap-5">
                                    <h5 className="text-brand-purple font-semibold text-xl">
                                        <span className="italic">TrueLove</span> - 7 Hari
                                    </h5>
                                    <p className="text-brand-purple leading-[1.5rem]">
                                        Berikut adalah fitur-fitur yang akan Anda dapatkan :
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/images/check_primary.svg" alt="Check Icon" className="object-contain" />
                                        <p className="text-brand-purple leading-5">
                                            Quote harian bertema cinta yang hangat dan dewasa
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/images/check_primary.svg" alt="Check Icon" className="object-contain" />
                                        <p className="text-brand-purple leading-5">
                                            Cocok untuk healing dari patah hati, memperdalam relasi, atau merayakan cinta
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/images/check_primary.svg" alt="Check Icon" className="object-contain" />
                                        <p className="text-brand-purple leading-5">
                                            Dikirim setiap hari via email, selama 7 hari
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/images/check_primary.svg" alt="Check Icon" className="object-contain" />
                                        <p className="text-brand-purple leading-5">
                                            Sudah Termasuk photocard yang dicetak
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="flex justify-between items-center">
                                    <h5 className="font-medium leading-6">Total Pesanan</h5>
                                    <p className="font-semibold text-lg leading-6 text-brand-purple">Rp. 15.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[35%] flex flex-col gap-4">
                            <div className="bg-white rounded-xl border border-brand-gray-light p-3">
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
                                                <button className="btn btn-link">
                                                    <img src="/assets/images/x_circle_black.svg" alt="X Icon" className="object-contain" onClick={removeSelectedPromo} />
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
                                        <img src="/assets/images/check_success.svg" alt="Check Icon" className="object-contain h-5 w-5" />
                                        <p className="text-success font-medium text-sm">1 Voucher telah berhasil diterapkan</p>
                                    </div>
                                }
                            </div>
                            <div className="bg-white rounded-xl border border-brand-gray-light p-3">
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
                            <div className="bg-white rounded-xl border border-brand-gray-light p-3">
                                <div className="flex justify-between items-center">
                                    <p className="font-medium">Metode Pembayaran</p>
                                    <p className="font-semibold text-xl">Otomatis</p>
                                </div>
                                <hr className="my-3" />
                                <h5 className="font-semibold text-xl">Detail Pembayaran</h5>
                                <hr className="my-3" />
                                <div className="flex flex-col gap-2 mb-6">
                                    <div className="flex justify-between items-center">
                                        <p className="font-medium">Sub Total</p>
                                        <p className="font-semibold text-xl">Rp. 15.000</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-medium">Kode Unik</p>
                                        <p className="font-semibold text-xl">-Rp. 150</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-medium">Biaya Aplikasi</p>
                                        <p className="font-semibold text-xl">-Rp. 5.000</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="font-semibold">Total Transfer</p>
                                    <p className="font-bold text-xl text-brand-purple">Rp. 19.850</p>
                                </div>
                                <Button type="submit" variant="primary" size="md" className="w-full rounded-xl flex gap-3 justify-center items-center">
                                    <span className='font-medium'>Bayar Sekarang</span>
                                    <img src="/assets/images/arrow_right_white.svg" alt="Arrow Right Icon" className="object-contain" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Checkout;
