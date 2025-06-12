import React, { useState } from 'react';
import Button from '../ui/Button';

import ModalBase from './Base';

const ModalMyAddress = () => {
    const [selectedAddress, setSelectedAddress] = useState(1);

    const handleSelectedAddress = (value) => {
        setSelectedAddress(value);
    };

    const editAddress = () => {
        modal_new_address.showModal();
    }

    return (
        <ModalBase modal_id='modal_my_address'>
            <h3 className='font-semibold text-xl mb-6 text-center'>Alamat Saya</h3>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className="flex gap-4 items-start p-3 border border-gray-300 rounded-xl w-full">
                    <label className="flex items-center gap-2 cursor-pointer mt-1.5">
                        <input
                            type="radio"
                            checked={selectedAddress}
                            onChange={() => handleSelectedAddress(1)}
                            className="hidden"
                        />
                        <div className={`h-4 w-4 border-brand-purple rounded-full transition-all duration-200 ${selectedAddress == 1 ? 'border-[5px]' : 'border'}`}>
                        </div>
                    </label>
                    <div className='flex flex-col flex-grow'>
                        <div className='flex gap-3 items-center mb-1'>
                            <p className='font-semibold'>Katarina</p>
                            <div className='h-4 w-1 border-l-2 border-gray-300'></div>
                            <p className='font-medium text-brand-gray'>0812 3456 7890</p>
                        </div>
                        <p className='text-brand-gray text-sm mb-2'>Jalan Merdeka No. 45, Jakarta, DKI Jakarta 10110</p>
                        <div>
                            <span className='border border-success rounded-full px-2 py-1 text-[0.625rem] text-success font-medium bg-success/5'>
                                Alamat Utama
                            </span>
                        </div>
                    </div>
                    <button className='btn btn-ghost btn-sm'>
                        <img src="/assets/images/edit_gray.svg" alt="Icon Edit" className='object-contain' onClick={editAddress} />
                    </button>
                </div>
                <div className="flex gap-4 items-start p-3 border border-gray-300 rounded-xl w-full">
                    <label className="flex items-center gap-2 cursor-pointer mt-1.5">
                        <input
                            type="radio"
                            checked={selectedAddress}
                            onChange={() => handleSelectedAddress(2)}
                            className="hidden"
                        />
                        <div className={`h-4 w-4 border-brand-purple rounded-full transition-all duration-200 ${selectedAddress == 2 ? 'border-[5px]' : 'border'}`}>
                        </div>
                    </label>
                    <div className='flex flex-col flex-grow'>
                        <div className='flex gap-3 items-center mb-1'>
                            <p className='font-semibold'>Jonh</p>
                            <div className='h-4 w-1 border-l-2 border-gray-300'></div>
                            <p className='font-medium text-brand-gray'>0856 7890 1234</p>
                        </div>
                        <p className='text-brand-gray text-sm mb-2'>Jalan Pahlawan No. 78, Bandung, Jawa Barat 40211</p>
                    </div>
                    <button className='btn btn-ghost btn-sm'>
                        <img src={EditGraySVG} alt="Icon Edit" className='object-contain' onClick={editAddress} />
                    </button>
                </div>
            </div>
            <hr className='my-6' />
            <Button type="button" variant="primary" size="md" className="w-full rounded-xl flex justify-center items-center gap-2" onClick={editAddress}>
                <img src={PlusWhiteSVG} alt="Icon Plus" className='object-contain' />
                <span className='text-white'>Alamat Baru</span>
            </Button>
        </ModalBase>
    );
};

export default ModalMyAddress;
