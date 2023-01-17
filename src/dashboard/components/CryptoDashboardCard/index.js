import React from "react";
import "../styles/index.css";
import BTC from "../../../assets/icons/currency/btc.svg";
import ICONCHART from "../../../assets/icons/currency/chart-icon.png";

const CryptoDashboardCard = () => {

    return(
        <>
            <div className="fiat-card">
                <div className="header">
                    <div className="balance">

                        <div className="balance-header">
                            <div className="image-section">
                                <img src={BTC} alt="" className="img-fluid"/>
                            </div>
                            <div className="balance-text">
                                <p>Balance</p>
                                <h3>0.000000 BTC</h3>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        {/*<i className='bx bxs-info-circle'></i>*/}
                    </div>
                </div>

                <div className="action-button">
                    <button className="btn btn-md btn-primary"><i className='bx bx-plus'></i> Deposit</button>
                    <button className="btn btn-md btn-outline-primary"><i className='bx bx-up-arrow-alt'></i> Withdrawal</button>
                </div>

                <div className="chart-footer">
                    <div className="chart-title">
                        <h6>BTC</h6>
                        <p>Market</p>
                    </div>
                    <div className="chart-section">
                        <img src={ICONCHART} alt="" className="img-fluid"/>
                    </div>
                    <div className="chart-price">
                        <h6>801,824.00 NGN</h6>
                        <p>24h change <span className="chart-status">1.61% </span> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CryptoDashboardCard