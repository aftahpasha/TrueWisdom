import AvatarImage from '../../../assets/images/avatar.jpg';
import IconEdit from "../../components/icon/Edit";
import IconRemove from "../../components/icon/Remove";

const SettingGeneral = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="w-full max-w-[21.125rem]">
                    <p className="font-semibold mb-2">Foto Profil</p>
                    <p className="text-sm text-brand-gray">Min 400x400px, PNG atau JPEG</p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={AvatarImage} alt="Avatar" className="h-14 w-14 object-cover rounded-full" />
                    <div className="flex items-center gap-3">
                        <button className="btn btn-outline rounded-xl border-brand-purple text-brand-purple flex gap-2 items-center">
                            <IconEdit />
                            <span className="text-sm font-medium">Ubah</span>
                        </button>
                        <button className="btn btn-error rounded-xl flex gap-2 items-center text-white">
                            <IconRemove />
                            <span className="text-sm font-medium">Hapus</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="w-full max-w-[21.125rem]">
                    <p className="font-semibold mb-2">Informasi Profil</p>
                    <p className="text-sm text-brand-gray">Update info pribadimu supaya akunmu selalu up to date!</p>
                </div>
                <div className="space-y-12 w-full">
                    <div className="w-full">
                        <div className='mb-3'>
                            <label htmlFor="full_name" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                placeholder="Masukkan nama lengkap"
                                value='Caroline Dash'
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                value='Caroline@gmail.com'
                                placeholder="Masukkan email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                required
                                disabled
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="no_telephone" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                                Nomor Telepon
                            </label>
                            <input
                                type="text"
                                id="no_telephone"
                                placeholder="Masukkan nomor telepon"
                                value='0873626472881'
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                                required
                            />
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
        </div>
    );
}

export default SettingGeneral;