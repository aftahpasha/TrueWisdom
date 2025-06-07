import React, { useState } from 'react';
import Button from '../ui/Button';
import ModalBase from './Base';

const ModalNewAddress = () => {
    const [asMainAddress, setAsMainAddress] = useState(false);

    const handleAsMainAddress = () => {
        setAsMainAddress(!asMainAddress);
    };

    return (
        <ModalBase modal_id='modal_new_address'>
            <div className='mb-8'>
                <h3 className='font-semibold text-2xl mb-2 text-center'>Tambah Alamat Baru</h3>
                <p className='text-brand-gray text-center'>📍 Yuk masukkan alamat baru untuk pengiriman!</p>
            </div>
            <form method="dialog">
                <div className='mb-8'>
                    <div className='mb-3'>
                        <label htmlFor="full_name" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            placeholder="Masukkan nama lengkap Anda"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="no_telephone" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Nomor Telepon
                        </label>
                        <input
                            type="text"
                            id="no_telephone"
                            placeholder="Masukkan nomor telepon Anda"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="no_telephone" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Detail Alamat
                        </label>
                        <input
                            type="text"
                            id="no_telephone"
                            placeholder="Masukkan detail alamat Anda"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer text-brand-gray tracking-[0.2px] font-medium">
                        <input
                            type="checkbox"
                            checked={asMainAddress}
                            onChange={handleAsMainAddress}
                            className="hidden"
                        />
                        <div className="h-6 w-6 border-2 border-brand-purple rounded-md flex items-center justify-center transition-all duration-200">
                            {asMainAddress && <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 bg-brand-purple rounded-sm"></div>}
                        </div>
                        Atur sebagai Alamat Utama
                    </label>
                </div>
                {/* if there is a button in form, it will close the modal */}
                <Button type="submit" variant="primary" size="md" className="w-full rounded-xl flex justify-center items-center gap-2">
                    Simpan
                </Button>
            </form>
        </ModalBase>
    );
};

export default ModalNewAddress;
