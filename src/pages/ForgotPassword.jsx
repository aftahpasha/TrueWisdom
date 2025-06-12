
import Button from '../components/ui/Button';

const ForgotPassword = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-8 min-h-screen font-ibm-plex-sans bg-no-repeat bg-[length:100%_auto] md:bg-[length:100%_100%] bg-brand-purple-dark" style={{ backgroundImage: `url(/assets/images/background_forgot_password.png)` }}>
            <img src="/assets/images/logo_2_white.png" alt='Logo 2' className='absolute top-12 left-1/2 -translate-x-1/2 h-10 object-contain mb-4 md:mb-7' />
            <form className='flex flex-col justify-center items-center p-6 md:p-10 bg-white rounded-xl max-w-[33.75rem] mt-20'>
                <div className='bg-brand-purple p-3 rounded-xl h-14 w-14 flex justify-center items-center mb-7'>
                    <img src="/assets/images/key_line.svg" alt="Key" />
                </div>
                <h2 className='font-semibold text-[1.75rem] leading-[2.5rem] text-center text-black'>
                    Lupa Kata Sandi?
                </h2>
                <p className='text-lg text-brand-gray text-center mb-7'>Jangan khawatir, kamu bisa reset kata sandimu kok.</p>
                <div className='flex flex-col gap-4 mb-8 w-full'>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Masukkan email kamu"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray disabled:bg-gray-200 disabled:cursor-not-allowed"
                            required
                        />
                    </div>
                </div>
                <Button type="submit" variant="primary" size="md" className="w-full rounded-xl mb-4 ">
                    <span className='font-normal'>Reset Kata sandi</span>
                </Button>
            </form>
        </div>
    );
};
export default ForgotPassword;
