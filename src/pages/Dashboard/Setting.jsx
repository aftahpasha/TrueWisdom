import React, { useState } from "react";
import DashboardLayout from "../../layouts/dashboard";
import SettingGeneral from "../../components/setting/General";
import SettingAddress from "../../components/setting/Address";
import SettingSecurity from "../../components/setting/Security";

const Setting = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {
            title: 'Umum',
        },
        {
            title: 'Alamat',
        },
        {
            title: 'Keamanan',
        },
    ];

    const renderingContentTab = () => {
        switch (selectedTab) {
            case 0:
                return <SettingGeneral />
            case 1:
                return <SettingAddress />
            case 2:
                return <SettingSecurity />

            default:
                return <p>Not Found</p>
        }
    }

    return (
        <DashboardLayout title="Pengaturan">
            <div className="flex gap-4 border-b border-gray-300 -mx-6 -mt-6 px-6 mb-16">
                {tabs.map((tab, index) =>
                    <button className={`btn btn-ghost font-semibold px-3 p-3 border-0 ${selectedTab == index && 'border-b-2 rounded-none border-brand-purple-500 text-brand-purple-500'}`}
                        onClick={() => setSelectedTab(index)} key={index}>
                        {tab.title}
                    </button>
                )}
            </div>
            {renderingContentTab()}
        </DashboardLayout>
    );
};

export default Setting;