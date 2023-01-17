import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardTrades = () => {
    return (
        <>
            <DashHeader isActive="trades" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Trades</h1>
            </div>
        </>
    );
}
export default DashboardTrades