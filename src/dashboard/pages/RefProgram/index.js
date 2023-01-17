import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardReferralProgram = () => {
    return (
        <>
            <DashHeader isActive="ref_programs" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Referral Program</h1>
            </div>
        </>
    );
}
export default DashboardReferralProgram