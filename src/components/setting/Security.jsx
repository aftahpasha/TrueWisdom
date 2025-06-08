

const SettingSecurity = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-14">
            <div className="w-full max-w-[21.125rem]">
                <p className="font-semibold mb-2">Ubah Kata Sandi</p>
                <p className="text-sm text-brand-gray">Atur kata sandimu disini</p>
            </div>
            <div className="space-y-12 w-full">
                <div className="w-full">
                    <div className='mb-3'>
                        <label htmlFor="password_old" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            id="password_old"
                            placeholder="Masukkan kata sandi"
                            value='Caroline Dash'
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password_new" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Kata Sandi Baru
                        </label>
                        <input
                            type="password"
                            id="password_new"
                            placeholder="Masukkan kata sandi baru"
                            value='Caroline Dash'
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
    );
}

export default SettingSecurity;