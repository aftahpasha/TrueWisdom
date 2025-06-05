import SignInQuotesImage from '../../assets/images/signin_quotes.png';
import LogoImage from '../../assets/images/logo.png';
import LogoGoogleImage from '../../assets/images/logo_google.png';
import Button from '../components/ui/Button';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/checkout';
    }

    return (
        <div className="flex flex-col-reverse md:flex-row justify-stretch items-stretch min-h-screen md:max-h-screen font-ibm-plex-sans">
            <div className='md:w-1/2 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center max-w-[30rem] p-4'>
                    <img
                        src={LogoImage}
                        alt="Logo"
                        className="object-cover pointer-events-none h-full w-full max-w-[3.75rem] max-h-[3.75rem] mb-4"
                    />
                    <h2 className='font-semibold text-[2rem] leading-[2.5rem] mb-2 text-center'>Selamat Datang Kembali!</h2>
                    <p className='text-[1.25rem] leading-[1.75rem] text-brand-gray mb-6'>Belum punya akun? <a href='/register' className='text-brand-purple font-medium'>Daftar</a></p>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='mb-4'>
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
                        <div className='mb-3'>
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
                        <a href='/forgot-password' className='text-sm font-medium float-right mb-3'>Lupa Kata Sandi?</a>
                        <Button type="submit" variant="primary" size="md" className="w-full rounded-xl mb-4 font-normal">
                            <span className='font-normal'>Masuk</span>
                        </Button>
                        <div className='flex flex-row justify-center items-center gap-6 mb-4'>
                            <hr className='flex-grow' />
                            <p className='text-brand-gray'>Atau</p>
                            <hr className='flex-grow' />
                        </div>
                        <Button type="button" variant="outline" size="md" className="w-full rounded-xl border-black flex justify-center items-center gap-2">
                            <img
                                src={LogoGoogleImage}
                                alt="Logo Google"
                                className="object-contain pointer-events-none w-5 h-5"
                            />
                            <span className='text-black font-normal'>Masuk dengan Google</span>
                        </Button>
                    </form>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img
                    src={SignInQuotesImage}
                    alt="Sign In Quotes"
                    className="object-cover pointer-events-none h-full w-full"
                />
            </div>
        </div>
    );
};
export default SignIn;
