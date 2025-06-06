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
    const [addressForm, setAddressForm] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        province: '',
        city: '',
        district: '',
        postalCode: '',
        fullAddress: '',
        addressLabel: 'Rumah'
    });

    const removeSelectedPromo = () => {
        setSelectedPromo(null);
    }

    const handleGiftToggle = () => {
        setSendAsGift(!sendAsGift);
        console.log("Send as gift toggled:", !sendAsGift);
    };

    const handleAddressChange = (field, value) => {
        setAddressForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Address form submitted:", addressForm);
        // Add form submission logic here
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
                    
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Column - Address Form */}
                            <div className="lg:w-[65%] space-y-6">
                                {/* Address Details */}
                                <div className="bg-white rounded-xl border border-brand-gray-light p-6">
                                    <h4 className="font-semibold text-xl leading-6 mb-4">Detail Alamat</h4>
                                    <hr className="mb-6" />
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label htmlFor="fullName" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Nama Lengkap*
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                value={addressForm.fullName}
                                                onChange={(e) => handleAddressChange('fullName', e.target.value)}
                                                placeholder="Masukkan nama lengkap"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Nomor Telepon*
                                            </label>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                value={addressForm.phoneNumber}
                                                onChange={(e) => handleAddressChange('phoneNumber', e.target.value)}
                                                placeholder="Masukkan nomor telepon"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Email*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={addressForm.email}
                                                onChange={(e) => handleAddressChange('email', e.target.value)}
                                                placeholder="Masukkan email"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="province" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Provinsi*
                                            </label>
                                            <select
                                                id="province"
                                                value={addressForm.province}
                                                onChange={(e) => handleAddressChange('province', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm"
                                                required
                                            >
                                                <option value="">Pilih Provinsi</option>
                                                <option value="DKI Jakarta">DKI Jakarta</option>
                                                <option value="Jawa Barat">Jawa Barat</option>
                                                <option value="Jawa Tengah">Jawa Tengah</option>
                                                <option value="Jawa Timur">Jawa Timur</option>
                                                <option value="Banten">Banten</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Kota/Kabupaten*
                                            </label>
                                            <select
                                                id="city"
                                                value={addressForm.city}
                                                onChange={(e) => handleAddressChange('city', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm"
                                                required
                                            >
                                                <option value="">Pilih Kota/Kabupaten</option>
                                                <option value="Jakarta Pusat">Jakarta Pusat</option>
                                                <option value="Jakarta Selatan">Jakarta Selatan</option>
                                                <option value="Jakarta Utara">Jakarta Utara</option>
                                                <option value="Bandung">Bandung</option>
                                                <option value="Surabaya">Surabaya</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="district" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Kecamatan*
                                            </label>
                                            <select
                                                id="district"
                                                value={addressForm.district}
                                                onChange={(e) => handleAddressChange('district', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm"
                                                required
                                            >
                                                <option value="">Pilih Kecamatan</option>
                                                <option value="Menteng">Menteng</option>
                                                <option value="Kebayoran Baru">Kebayoran Baru</option>
                                                <option value="Kelapa Gading">Kelapa Gading</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="postalCode" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Kode Pos*
                                            </label>
                                            <input
                                                type="text"
                                                id="postalCode"
                                                value={addressForm.postalCode}
                                                onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                                                placeholder="Masukkan kode pos"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="md:col-span-2">
                                            <label htmlFor="fullAddress" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                                Alamat Lengkap*
                                            </label>
                                            <textarea
                                                id="fullAddress"
                                                value={addressForm.fullAddress}
                                                onChange={(e) => handleAddressChange('fullAddress', e.target.value)}
                                                placeholder="Masukkan alamat lengkap (nama jalan, nomor rumah, RT/RW, dll)"
                                                rows={3}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-brand-purple-dark mb-3">
                                                Label Alamat
                                            </label>
                                            <div className="flex gap-3">
                                                {['Rumah', 'Kantor', 'Lainnya'].map((label) => (
                                                    <button
                                                        key={label}
                                                        type="button"
                                                        onClick={() => handleAddressChange('addressLabel', label)}
                                                        className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                                                            addressForm.addressLabel === label
                                                                ? 'bg-brand-purple text-white border-brand-purple'
                                                                : 'bg-white text-brand-purple border-brand-purple hover:bg-brand-purple/10'
                                                        }`}
                                                    >
                                                        {label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Package Details */}
                                <div className="bg-white rounded-xl border border-brand-gray-light p-6">
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
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain" />
                                            <p className="text-brand-purple leading-5">
                                                Quote harian bertema cinta yang hangat dan dewasa
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain" />
                                            <p className="text-brand-purple leading-5">
                                                Cocok untuk healing dari patah hati, memperdalam relasi, atau merayakan cinta
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain" />
                                            <p className="text-brand-purple leading-5">
                                                Dikirim setiap hari via email, selama 7 hari
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={CheckPrimarySVG} alt="Check Icon" className="object-contain" />
                                            <p className="text-brand-purple leading-5">
                                                Sudah Termasuk photocard yang dicetak dan dikirim ke alamat Anda
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-medium leading-6">Total Pesanan</h5>
                                        <p className="font-semibold text-lg leading-6 text-brand-purple">Rp. 25.000</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Payment Summary */}
                            <div className="lg:w-[35%] flex flex-col gap-4">
                                {/* Promo Code */}
                                <div className="bg-white rounded-xl border border-brand-gray-light p-3">
                                    <div className="flex gap-3">
                                        <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="promo"
                                                value={codePromo}
                                                onChange={(e) => setCodePromo(e.target.value)}
                                                placeholder="Masukkan code promo"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                            />
                                            {selectedPromo != null &&
                                                <div className="absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2">
                                                    <button type="button" className="btn btn-link">
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
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
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
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    }
                                </div>

                                {/* Payment Summary */}
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
                                            <p className="font-medium">Ongkos Kirim</p>
                                            <p className="font-semibold text-xl">Rp. 10.000</p>
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
                                        <p className="font-bold text-xl text-brand-purple">Rp. 29.850</p>
                                    </div>
                                    <Button type="submit" variant="primary" size="md" className="w-full rounded-xl flex gap-3 justify-center items-center">
                                        <span className='font-medium'>Bayar Sekarang</span>
                                        <img src={ArrowRightWhiteSVG} alt="Arrow Right Icon" className="object-contain" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default CheckoutAddress;