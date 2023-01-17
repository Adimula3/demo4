import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardSettings = () => {
    return (
        <>
            <DashHeader isActive="dashboard" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Settings</h1>
            </div>
        </>
    );
}
export default DashboardSettings