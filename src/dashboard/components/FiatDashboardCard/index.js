import React from "react";
import "../styles/index.css";
import UAH from "../../../assets/icons/currency/uah.svg";

const FiatDashboardCard = () => {
    return(
        <>
            <div className="fiat-card">
                <div className="header">
                    <div className="balance">

                        <div className="balance-header">
                            <div className="image-section">
                                <img src={UAH} alt="" className="img-fluid"/>
                            </div>
                            <div className="balance-text">
                                <p>Balance</p>
                                <h3>0.00 NGN</h3>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <i className='bx bxs-info-circle'></i>
                    </div>
                </div>

                <div className="action-button">
                    <button className="btn btn-md btn-primary"><i className='bx bx-plus'></i> Deposit</button>
                    <button className="btn btn-md btn-outline-primary"><i className='bx bx-up-arrow-alt'></i> Withdrawal</button>
                </div>
            </div>
        </>
    )
}

export default FiatDashboardCard