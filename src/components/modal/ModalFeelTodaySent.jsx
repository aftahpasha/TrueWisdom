import React from 'react';
import Button from '../ui/Button';
<<<<<<< HEAD

=======
import CheckImage from '../../../assets/images/icon_check.png';
>>>>>>> f4dd6877a5ed1f40b47e9351c411c990308f8429
import ModalBase from './Base';

const ModalFeelTodaySent = () => {
    return (
        <ModalBase modal_id='modal_feel_today_sent'>
            <div className='flex flex-col justify-center items-center'>
<<<<<<< HEAD
                <img src="/assets/images/icon_check.png" alt="Icon Check" className='w-[6.25rem] h-[6.25rem] object-contain mb-8' />
=======
                <img src={CheckImage} alt="Icon Check" className='w-[6.25rem] h-[6.25rem] object-contain mb-8' />
>>>>>>> f4dd6877a5ed1f40b47e9351c411c990308f8429
                <p className='text-center font-semibold text-black text-2xl mb-2'>Terima kasih, John Connor! 🌸</p>
                <p className='text-center text-brand-gray mb-8'>Perasaanmu sudah kami catat. Kami akan menyesuaikan quote besok agar lebih sesuai dengan kondisimu hari ini.</p>
            </div>
            <hr className='my-6' />
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Button type="submit" variant="outline" size="md" className="w-full rounded-xl border-brand-gray flex justify-center items-center gap-2">
                    <span className='text-black'>Tutup dan lanjutkan harimu 💜</span>
                </Button>
            </form>
        </ModalBase>
    );
};

export default ModalFeelTodaySent;
