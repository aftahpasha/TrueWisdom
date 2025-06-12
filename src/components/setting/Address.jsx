import { useState } from "react";
import IconEdit from "../icon/Edit";
import IconPlus from "../icon/Plus";


const SettingAddress = () => {
    const [selectedAddress, setSelectedAddress] = useState(1);

    const handleSelectedAddress = (value) => {
        setSelectedAddress(value);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-14">
            <div className="w-full max-w-[21.125rem]">
                <p className="font-semibold mb-2">Alamat</p>
                <p className="text-sm text-brand-gray mb-2">Semua daftar alamatmu ada disini</p>
                <button className="btn btn-outline rounded-xl border-brand-purple text-brand-purple flex gap-2 items-center">
                    <IconPlus />
                    <span className="text-sm font-medium">Tambahkan Lokasi Baru</span>
                </button>
            </div>
            <div className="space-y-12 w-full">
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
                            <IconEdit />
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
                            <IconEdit />
                        </button>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="min-w-[7.125rem] btn btn-outline rounded-xl border-brand-purple text-brand-purple flex gap-2 items-center">
                        <span className="text-sm font-medium">Batal</span>
                    </button>
                    <button className="min-w-[7.125rem] btn bg-brand-purple hover:bg-brand-purple/90 rounded-xl flex gap-2 items-center text-white">
                        <span className="text-sm font-medium">Simpan</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SettingAddress;