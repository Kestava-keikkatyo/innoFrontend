import React from 'react';
import GeneralInfo from '../../components/GeneralInfo';
import Chart from '../../components/chart/Chart';

const AdminHome = () => {
    return (
        <div className="home">
            <GeneralInfo />
            <div className="chart">
                <Chart />
            </div>
        </div>
    );
};

export default AdminHome;