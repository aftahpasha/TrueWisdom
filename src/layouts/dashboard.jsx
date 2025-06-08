import React from "react";
import BellBlackSVG from '../../assets/images/bell_black.svg';
import LogoTextPrimaryImage from '../../assets/images/logo_text_primary.png';
import SidebarGraySVG from '../../assets/images/sidebar_gray.svg';
import CheckPrimarySVG from '../../assets/images/check_primary.svg';
import ChevronDownGraySVG from '../../assets/images/chevron_down_gray.svg';
import TrueLoveWhiteSVG from '../../assets/images/true_love_white.svg';
import TrueFaithWhiteSVG from '../../assets/images/true_faith_white.svg';
import TrueAffirmWhiteSVG from '../../assets/images/true_affirm_white.svg';
import TrueFriendWhiteSVG from '../../assets/images/true_friend_white.svg';
import DashboardPrimarySVG from '../../assets/images/dashboard_primary.svg';
import ShoppingBagGraySVG from '../../assets/images/shopping_bag_gray.svg';
import SettingGraySVG from '../../assets/images/setting_gray.svg';
import LogoutV2ErrorSVG from '../../assets/images/logout_v2_error.svg';
import AvatarImage from '../../assets/images/avatar.jpg';
import Button from "../components/ui/Button";

const DashboardLayout = ({ children, header = true, title = 'Dashboard' }) => {


    return (
        <div className="flex flex-col md:flex-row md:min-h-screen bg-brand-gray-light">
            <div className="flex-shrink-0 md:w-[15rem] md:min-h-screen p-4">
                <div className="h-full flex flex-col gap-6 bg-brand-gray-light">
                    <div className="flex justify-between items-center">
                        <img src={LogoTextPrimaryImage} alt="Logo" className="object-contain h-5" />
                        <button className="btn btn-ghost btn-sm">
                            <img src={SidebarGraySVG} alt="Sidebar" className="object-contain h-5" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-xs text-brand-gray">Topik Aktif</p>
                        <div className="dropdown dropdown-hover">
                            <Button type="button" variant="ghost" size="sm" className="w-full rounded-lg bg-white flex justify-stretch items-center">
                                <div className="flex-grow flex items-center gap-2.5">
                                    <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                        <img src={TrueLoveWhiteSVG} alt="TrueLove" className="h-4 w-4" />
                                    </div>
                                    <p className='font-semibold text-sm text-secondary-content'>TrueLove</p>
                                </div>
                                <img src={ChevronDownGraySVG} alt="Arrow Down" className="object-contain" />
                            </Button>
                            <ul tabIndex="0" className="dropdown-content menu rounded-lg shadow bg-white min-w-[13rem] space-y-1">
                                <li>
                                    <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-purple-light bg-brand-purple/5'>
                                        <div className="flex-grow flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                <img src={TrueLoveWhiteSVG} alt="TrueLove" className="h-4 w-4" />
                                            </div>
                                            <p className='font-semibold text-sm text-secondary-content'>TrueLove</p>
                                        </div>
                                        <img src={CheckPrimarySVG} alt="Icon Check" className="object-contain h-4 w-4" />
                                    </a>
                                </li>
                                <li>
                                    <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                        <div className="flex-grow flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                <img src={TrueFaithWhiteSVG} alt="TrueFaith" className="h-4 w-4" />
                                            </div>
                                            <p className='font-semibold text-sm text-secondary-content'>TrueFaith</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                        <div className="flex-grow flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                <img src={TrueAffirmWhiteSVG} alt="TrueFaith" className="h-4 w-4" />
                                            </div>
                                            <p className='font-semibold text-sm text-secondary-content'>TrueAffirm</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                        <div className="flex-grow flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                <img src={TrueFriendWhiteSVG} alt="TrueFaith" className="h-4 w-4" />
                                            </div>
                                            <p className='font-semibold text-sm text-secondary-content'>TrueFriend</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col gap-2">
                        <p className="font-medium text-xs text-brand-gray">Main menu</p>
                        <div className="flex-grow flex flex-col justify-between gap-2">
                            <div className="flex flex-col gap-6">
                                <Button type="button" variant="ghost" size="sm" className="w-full rounded-lg bg-white flex justify-stretch items-center py-3" onClick={() => window.location.href = '/dashboard'}>
                                    <div className="flex-grow flex items-center gap-2.5">
                                        <img src={DashboardPrimarySVG} alt="Dashboard" className="h-4 w-4" />
                                        <p className='font-medium text-sm text-secondary-content'>Dashboard</p>
                                    </div>
                                </Button>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <a href="/dashboard/buy-new-package" className="btn btn-ghost flex gap-3 justify-start items-center p-2.5">
                                        <img src={ShoppingBagGraySVG} alt="Dashboard" className="h-4 w-4" />
                                        <p className="font-medium text-brand-gray text-sm">Beli Paket Baru</p>
                                    </a>
                                    <a href="/dashboard/setting" className="btn btn-ghost flex gap-3 justify-start items-center p-2.5">
                                        <img src={SettingGraySVG} alt="Dashboard" className="h-4 w-4" />
                                        <p className="font-medium text-brand-gray text-sm">Pengaturan</p>
                                    </a>
                                </div>
                                <button className="btn btn-ghost flex gap-3 justify-start items-center p-2.5">
                                    <img src={LogoutV2ErrorSVG} alt="Dashboard" className="h-4 w-4" />
                                    <p className="font-medium text-error text-sm">Keluar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="h-1 border-white" />
                    <button className="btn btn-ghost flex gap-3 justify-start items-center p-1">
                        <img src={AvatarImage} alt="Avatar" className="h-8 w-8 object-cover rounded-full" />
                        <div className="flex-grow flex flex-col items-start">
                            <p className="font-semibold text-sm">John Cornor</p>
                            <p className="text-xs text-brand-gray">Johncornor@mail.com</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex-grow h-full md:max-h-screen md:overflow-y-auto py-3 pr-3 pl-3 md:pl-0 z-40">
                <div className="bg-white rounded-lg md:min-h-[calc(100vh-1.5rem)]">
                    {header &&
                        <>
                            <div className="flex justify-between items-center px-6 py-4">
                                <h1 className="font-semibold text-lg">{title}</h1>
                                <button className="btn btn-ghost btn-sm">
                                    <img src={BellBlackSVG} alt="Icon Bell" className="object-contain" />
                                </button>
                            </div>
                            <hr className="bg-gray-300" />
                        </>
                    }
                    <div className="p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;