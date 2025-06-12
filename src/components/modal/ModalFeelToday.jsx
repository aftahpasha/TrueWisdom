import React, { useState } from 'react';
import Button from '../ui/Button';
import ModalBase from './Base';

const ModalFeelToday = () => {
    const [selectedFeeling, setSelectedFeeling] = useState(null);

    const feelings = [
        {
            title: 'Aku merasa baik 😊',
        },
        {
            title: 'Cukup tenang 😌',
        },
        {
            title: 'Sedikit sedih 😔',
        },
        {
            title: 'Butuh semangat 😣',
        },
    ];

    const submitForm = () => {
        modal_feel_today_sent.showModal();
    }

    return (
        <ModalBase modal_id='modal_feel_today'>
            <p className='text-center font-semibold text-black text-2xl mb-2'>Bagaimana perasaanmu hari ini? 🌤️</p>
            <p className='text-center text-brand-gray mb-8'>Kami akan menyesuaikan quote besok agar lebih mendukung kondisimu.</p>
            <div className="grid grid-cols-2 gap-2 mb-8">
                {feelings.map((feeling, index) =>
                    <Button type="button" variant={selectedFeeling == index ? 'primary' : 'outline'} size="md" className="w-full rounded-full" onClick={() => setSelectedFeeling(index)} key={index}>
                        <span>{feeling.title}</span>
                    </Button>
                )}
            </div>
            {selectedFeeling !== null &&
                <>
                    <div className='mb-5'>
                        <label htmlFor="description" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            📝 Ceritakan tentang apa yang kamu rasakan yuk
                        </label>
                        <textarea
                            id="description"
                            placeholder="Tulis disini"
                            rows={4} // Adjusted rows
                            className="w-full p-3 bg-brand-gray-light border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <form onSubmit={submitForm} method='dialog'>
                        <Button type="submit" variant="primary" size="md" className="w-full rounded-full">
                            <span>Simpan Perasaan Hari Ini</span>
                        </Button>
                    </form>
                </>
            }
        </ModalBase>
    );
};

export default ModalFeelToday;
