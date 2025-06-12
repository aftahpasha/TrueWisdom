import React, { useState } from 'react';
import Button from '../ui/Button';
import ModalBase from './Base';

const ModalLogout = () => {
    return (
        <ModalBase modal_id='modal_logout'>
            <p className='text-center font-semibold text-black text-2xl mb-2'>Apakah kamu yakin ingin keluar?</p>
            <p className='text-center text-brand-gray mb-8'>Kamu masih bisa kembali kapan saja dan melanjutkan hari dengan kutipan harianmu. 💜</p>
            <div className="flex gap-2">
                <Button type="button" variant="outline" size="md" className="w-full rounded-full">
                    <span>Batal</span>
                </Button>
                <Button type="button" variant="primary" size="md" className="w-full rounded-full">
                    <span className='text-white'>Keluar Akun</span>
                </Button>
            </div>
        </ModalBase>
    );
};

export default ModalLogout;
