import React from "react";
import DashboardLayout from "../../layouts/dashboard";
// Asset imports removed; use public asset paths instead
import TableHistoryQuotes from "../../components/dashboard/TableHistoryQuotes";
import GridHistoryQuotes from "../../components/dashboard/GridHistoryQuotes";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
    const [viewHistoryQuotes, setViewHistoryQuotes] = useState(0);

    const typeHistoryQuotes = [
        <TableHistoryQuotes />,
        <GridHistoryQuotes />
    ];

    return (
        <DashboardLayout>
            <h3 className="font-semibold text-2xl mb-6">Selamat Datang Kembali, John Cornor 👋</h3>
            <div className="flex flex-col xl:flex-row gap-4 mb-10">
                <div className="xl:w-[75%]">
                    <div className="px-8 pt-8 pb-5 bg-[#FBF1FF] rounded-lg">
                        <div className="flex justify-between items-center mb-5">
                            <p className="text-brand-purple-dark font-medium text-xl">Quote Hari Ini</p>
                            <p className="text-brand-purple-dark text-lg">5 April 2025</p>
                        </div>
                        <p className="font-semibold text-[2rem] text-brand-purple-dark">
                            “Yang tenang bukan karena semuanya mudah, tapi karena yakin bahwa semuanya selalu cukup.”
                        </p>
                        <hr className="my-5" />
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                            <button className="btn btn-link text-brand-purple-dark">
                                Bagaimana perasaanmu hari ini?
                            </button>
                            <div className="flex items-center gap-3">
                                <button className="btn btn-ghost btn-sm">
                                    <img src="/assets/images/share_primary.svg" alt="Icon Share" className="object-contain" />
                                </button>
                                <button className="hover:bg-brand-honey-yellow/80 bg-brand-honey-yellow rounded-full px-5 py-3 font-semibold flex gap-2 text-brand-honey-yellow-dark">
                                    <img src="/assets/images/download_honey_yellow.svg" alt="Icon Download" className="object-contain" />
                                    <span>Unduh Photocard</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 xl:w-[25%]">
                    <div className="bg-orange-50 rounded-lg p-5">
                        <p className="text-sm text-brand-honey-yellow-dark mb-5 font-semibold">Paket Aktif</p>
                        <div className="flex flex-col gap-1 mb-5">
                            <p className="text-brand-honey-yellow-dark font-semibold text-xl">TrueLove (30 Hari)</p>
                            <p className="text-brand-honey-yellow-dark font-medium">5 Mei – 5 Juni 2025</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-1">
                                <div className="h-5 w-[70%] bg-brand-honey-yellow rounded-l-full"></div>
                                <div className="h-5 w-[30%] bg-brand-honey-yellow-light rounded-r-full"></div>
                            </div>
                            <p className="text-brand-honey-yellow-dark"><span className="font-semibold">Hari ke-25</span> dari 30</p>
                        </div>
                    </div>
                    <div className="bg-brand-purple p-5 flex gap-4 items-center rounded-lg">
                        <p className="flex-grow text-white text-lg font-medium">
                            Kirimkan <span className="italic">Quotes</span> ke Orang Tersayang Kamu
                        </p>
                        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-brand-honey-yellow flex-shrink-0">
                            <img src="/assets/images/send_honey_yellow.svg" alt="Icon Send" className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center mb-3">
                <h4 className="font-medium text-xl">Riwayat Qoute</h4>
                <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-4">
                        <button className="btn btn-ghost btn-sm">
                            <img src="/assets/images/grid_black.svg" alt="Icon Grid" className="object-contain" />
                        </button>
                        <button className="btn btn-ghost btn-sm">
                            <img src="/assets/images/menu_black.svg" alt="Icon Menu" className="object-contain" />
                        </button>
                    </div>
                    <div className='h-6 w-1 border-l-2 border-gray-300'></div>
                    <div className="flex gap-2 lg:w-[20.875rem] p-3 border border-gray-300 rounded-lg">
                        <img src="/assets/images/search_black.svg" alt="Icon Search" className="object-contain" />
                        <input
                            type="text"
                            id="search"
                            placeholder="Cari di sini"
                            className="w-full focus-visible:outline-none"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array(6).fill(null).map((_, idx) =>
                    <div key={idx} className="px-8 pt-8 pb-5 bg-[#FBF1FF] rounded-lg">
                        <div className="flex justify-between items-center text-brand-purple-dark mb-5">
                            <p>Quote</p>
                            <p>5 April 2025</p>
                        </div>
                        <p className="text-brand-purple-dark font-semibold text-xl mb-11">
                            "Ketenangan bukanlah hidup tanpa tantangan, melainkan keyakinan bahwa segalanya akan berada pada tempatnya."
                        </p>
                        <hr className="mb-5" />
                        <div className="flex justify-end items-center gap-4">
                            <button className="btn btn-ghost btn-sm">
                                <img src="/assets/images/share_primary.svg" alt="Icon Share" className="object-contain" />
                            </button>
                            <button className="hover:bg-brand-honey-yellow/80 bg-brand-honey-yellow rounded-full px-5 py-3 font-semibold flex gap-2 text-brand-honey-yellow-dark">
                                <img src="/assets/images/download_honey_yellow.svg" alt="Icon Download" className="object-contain" />
                                <span>Unduh Photocard</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;