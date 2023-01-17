import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";
import {Col, Row} from "react-bootstrap";

const DashboardAssets = () => {
    return (
        <>

            <DashHeader isActive="assets" />
            <div className="protect-assets-error">
                <p>  Warning, <span className="text-decoration-underline"> you must enable 2FA. This will help protect your assets. </span> </p>
            </div>

            <div className="dashboard-home">
                <Row>
                    <Col md={3}>
                        <div className="sidebar">
                            <div className="total-asset-card">
                                <h4>Total of all assets</h4>
                                <div className="total-balance">
                                    <h5>0</h5>
                                    <h5>USD <i className='bx bxs-down-arrow-square'></i> </h5>
                                </div>
                                <p>0.00000000 BTC</p>
                            </div>

                            <div className="my-assets">
                                <h3>My assets</h3>
                                <div className="history-card">
                                    <div className="history-card-header">
                                        <h4>Deposit/Withdrawal History</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
}
export default DashboardAssets