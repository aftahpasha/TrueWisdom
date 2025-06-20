import React from "react";
import Button from "../components/ui/Button";
import IconShoppingBag from "../components/icon/ShoppingBag";
import IconSetting from "../components/icon/Setting";
import IconDashboard from "../components/icon/Dashboard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import ModalLogout from "../components/modal/ModalLogout";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children, header = true, title = 'Dashboard' }) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (!token) {
                router.replace('/sign-in');
            }
        }
    }, [router]);

    const topMenus = [
        {
            title: 'Dashboard',
            icon: <IconDashboard />,
            link: '/dashboard'
        },
    ];
    const bottomMenus = [
        {
            title: 'Beli Paket Baru',
            icon: <IconShoppingBag />,
            link: '/dashboard/buy-new-package',
        },
        {
            title: 'Setting',
            icon: <IconSetting />,
            link: '/dashboard/setting',
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:min-h-screen bg-brand-gray-light">
                <div className="flex-shrink-0 md:w-[15rem] md:min-h-screen p-4">
                    <div className="h-full flex flex-col gap-6 bg-brand-gray-light">
                        <div className="flex justify-between items-center">
                            <img src="/assets/images/logo_text_primary.png" alt="Logo" className="object-contain h-5" />
                            <button className="btn btn-ghost btn-sm">
                                <img src="/assets/images/sidebar_gray.svg" alt="Sidebar" className="object-contain h-5" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-xs text-brand-gray">Topik Aktif</p>
                            <div className="dropdown dropdown-hover">
                                <Button type="button" variant="ghost" size="sm" className="w-full rounded-lg bg-white flex justify-stretch items-center">
                                    <div className="flex-grow flex items-center gap-2.5">
                                        <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                            <img src="/assets/images/true_love_white.svg" alt="TrueLove" className="h-4 w-4" />
                                        </div>
                                        <p className='font-semibold text-sm text-secondary-content'>TrueLove</p>
                                    </div>
                                    <img src="/assets/images/chevron_down_gray.svg" alt="Arrow Down" className="object-contain" />
                                </Button>
                                <ul tabIndex="0" className="dropdown-content menu rounded-lg shadow bg-white min-w-[13rem] space-y-1">
                                    <li>
                                        <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-purple-light bg-brand-purple/5'>
                                            <div className="flex-grow flex items-center gap-2.5">
                                                <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                    <img src="/assets/images/true_love_white.svg" alt="TrueLove" className="h-4 w-4" />
                                                </div>
                                                <p className='font-semibold text-sm text-secondary-content'>TrueLove</p>
                                            </div>
                                            <img src="/assets/images/check_primary.svg" alt="Icon Check" className="object-contain h-4 w-4" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                            <div className="flex-grow flex items-center gap-2.5">
                                                <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                    <img src="/assets/images/true_faith_white.svg" alt="TrueFaith" className="h-4 w-4" />
                                                </div>
                                                <p className='font-semibold text-sm text-secondary-content'>TrueFaith</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                            <div className="flex-grow flex items-center gap-2.5">
                                                <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                    <img src="/assets/images/true_affirm_white.svg" alt="TrueFaith" className="h-4 w-4" />
                                                </div>
                                                <p className='font-semibold text-sm text-secondary-content'>TrueAffirm</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='w-full rounded-lg flex justify-stretch items-center border border-brand-gray-light'>
                                            <div className="flex-grow flex items-center gap-2.5">
                                                <div className="p-1.5 rounded-lg bg-brand-purple-500">
                                                    <img src="/assets/images/true_friend_white.svg" alt="TrueFaith" className="h-4 w-4" />
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
                                    {topMenus.map((menu, index) =>
                                        <Link href={menu.link} className={`btn btn-ghost flex gap-3 justify-start items-center p-2.5 ${pathname === menu.link ? 'bg-white text-brand-purple' : ''}`} key={index}>
                                            {menu.icon}
                                            <p className={`font-medium text-sm ${pathname === menu.link ? 'text-secondary-content' : 'text-brand-gray'}`}>{menu.title}</p>
                                        </Link>
                                    )}
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        {bottomMenus.map((menu, index) =>
                                            <Link href={menu.link} className={`btn btn-ghost flex gap-3 justify-start items-center p-2.5 ${pathname === menu.link ? 'bg-white text-brand-purple' : ''}`} key={index}>
                                                {menu.icon}
                                                <p className={`font-medium text-sm ${pathname === menu.link ? 'text-secondary-content' : 'text-brand-gray'}`}>{menu.title}</p>
                                            </Link>
                                        )}
                                    </div>
                                    <button className="btn btn-ghost flex gap-3 justify-start items-center p-2.5" onClick={() => modal_logout.showModal()}>
                                        <img src="/assets/images/logout_v2_error.svg" alt="Dashboard" className="h-4 w-4" />
                                        <p className="font-medium text-error text-sm">Keluar</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="h-1 border-white" />
                        <button className="btn btn-ghost flex gap-3 justify-start items-center p-1">
                            <img src="/assets/images/avatar.jpg" alt="Avatar" className="h-8 w-8 object-cover rounded-full" />
                            <div className="flex-grow flex flex-col items-start">
                                {typeof window !== 'undefined' && localStorage.getItem('user') ? (
                                    (() => {
                                        try {
                                            const user = JSON.parse(localStorage.getItem('user'));
                                            return <>
                                                <p className="font-semibold text-sm">{user.full_name || user.name || 'User'}</p>
                                                <p className="text-xs text-brand-gray">{user.email}</p>
                                            </>;
                                        } catch {
                                            return <>
                                                <p className="font-semibold text-sm">User</p>
                                                <p className="text-xs text-brand-gray">-</p>
                                            </>;
                                        }
                                    })()
                                ) : (
                                    <>
                                        <p className="font-semibold text-sm">User</p>
                                        <p className="text-xs text-brand-gray">-</p>
                                    </>
                                )}
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
                                        <img src="/assets/images/bell_black.svg" alt="Icon Bell" className="object-contain" />
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
            <ModalLogout />
        </>
    );
};

export default DashboardLayout;