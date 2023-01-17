import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardOrderHistory = () => {
    return (
        <>
            <DashHeader isActive="trades" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Order History</h1>
            </div>
        </>
    );
}
export default DashboardOrderHistory