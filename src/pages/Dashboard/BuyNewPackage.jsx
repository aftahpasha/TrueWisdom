import React from "react";
import PricingSection from "../../components/PricingSection";
import DashboardLayout from "../../layouts/dashboard";

const BuyNewPackage = () => {
    return (
        <DashboardLayout header={false}>
            <PricingSection />
        </DashboardLayout>
    );
};

export default BuyNewPackage;