import React from 'react';
import Button from '../ui/Button';
import CheckImage from '../../../assets/images/icon_check.png';
import ModalBase from './Base';

const ModalQuoteSent = () => {
    return (
        <ModalBase modal_id='modal_quote_sent'>
            <div className='flex flex-col justify-center items-center'>
                <img src={CheckImage} alt="Icon Check" className='w-[6.25rem] h-[6.25rem] object-contain mb-8' />
                <h3 className='font-semibold text-2xl mb-2 text-black'><span className='italic'>Quote</span> Telah Dikirim 🚀</h3>
                <div className='max-w-[24rem]'>
                    <p className='text-base text-brand-gray text-center mb-6'>
                        Satu langkah kecil hari ini bisa jadi penyemangat besar untuk besok.
                    </p>
                    <p className='text-base text-brand-gray text-center mb-8'>
                        Cek inbox kamu, dan temukan quote yang dirancang khusus buat kamu!
                    </p>
                </div>
                <div className='flex justify-between items-center p-5 border border-brand-gray-light rounded-xl w-full'>
                    <p className='text-brand-gray'>📩 Dikirim ke: </p>
                    <p className='text-black'>[email@kamu.com]</p>
                </div>
            </div>
            <hr className='my-6' />
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Button type="submit" variant="outline" size="md" className="w-full rounded-xl border-brand-gray flex justify-center items-center gap-2">
                    <span className='text-black'>Tutup</span>
                </Button>
            </form>
        </ModalBase>
    );
};

export default ModalQuoteSent;
