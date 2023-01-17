import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";
import {Col, Row} from "react-bootstrap";
import CryptoDashboardCard from "../../components/CryptoDashboardCard";
import FiatDashboardCard from "../../components/FiatDashboardCard";

const DashboardHome = () => {
    return (
        <>
            <DashHeader isActive="dashboard" />
            <div className="container-fluid main-section">
                <div className="dashboard-home">
                    <div className="assets-balance">
                        <h6>Balance of all assets</h6>
                        <h2>0.00 NGN</h2>
                        <p>0.00 USD</p>
                    </div>

                    <div className="fiat-balance">
                        <h6>Fiat funds</h6>
                        <Row>
                            <Col md={4}>
                                <FiatDashboardCard />
                            </Col>
                        </Row>
                    </div>

                    <div className="crypto-balance">
                        <h6>Crypto assets</h6>
                        <Row>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                            <Col md={4}>
                                <CryptoDashboardCard />
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>

        </>
    );
}
export default DashboardHome