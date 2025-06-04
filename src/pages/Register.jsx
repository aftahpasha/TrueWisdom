import BackgroundRegisterImage from '../../assets/images/background_register.png';
import Logo2Image from '../../assets/images/logo_2.png';
import LogoGoogleImage from '../../assets/images/logo_google.png';
import Button from '../components/ui/Button';

const Register = () => {
    return (
        <div className="flex flex-col p-8 justify-center items-center min-h-screen font-ibm-plex-sans bg-no-repeat bg-[length:100%_auto] md:bg-[length:100%_100%]" style={{ backgroundImage: `url(${BackgroundRegisterImage})` }}>
            <img src={Logo2Image} alt='Logo 2' className='h-10 object-contain mb-4 md:mb-7' />
            <form className='flex flex-col justify-center items-center p-6 md:p-10 bg-white rounded-xl max-w-[33.75rem]'>
                <h2 className='font-semibold text-[1.75rem] leading-[2.5rem] text-center text-black mb-4 md:mb-7'>
                    Mulai <span className='underline italic'>Perjalananmu</span> Menuju Hari yang Lebih <span className='underline italic'>Bermakna</span>
                </h2>
                <div className='flex flex-col gap-4 mb-8 md:mb-12 w-full'>
                    <div>
                        <label htmlFor="full_name" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            placeholder="Masukkan nama lengkap kamu"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Masukkan email kamu"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="no_telephone" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Nomor Telepon
                        </label>
                        <input
                            type="text"
                            id="no_telephone"
                            placeholder="Masukkan nomor telepon kamu"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Masukkan kata sandi kamu"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
                            required
                        />
                    </div>
                </div>
                <Button type="submit" variant="primary" size="md" className="w-full rounded-xl mb-4 font-normal">
                    <span className='font-normal'>Masuk</span>
                </Button>
                <div className='flex flex-row justify-center items-center gap-6 mb-4'>
                    <hr className='flex-grow' />
                    <p className='text-brand-gray'>Atau</p>
                    <hr className='flex-grow' />
                </div>
                <Button type="button" variant="outline" size="md" className="w-full rounded-xl border-black flex justify-center items-center gap-2 mb-7">
                    <img
                        src={LogoGoogleImage}
                        alt="Logo Google"
                        className="object-contain pointer-events-none w-5 h-5"
                    />
                    <span className='text-black font-normal'>Masuk dengan Google</span>
                </Button>
                <p className='text-[1.25rem] leading-[1.75rem] text-brand-gray mb-6'>Sudah punya akun? <a href='/sign-in' className='text-brand-purple font-medium'>Masuk</a></p>
            </form>
        </div>
    );
};
export default Register;
