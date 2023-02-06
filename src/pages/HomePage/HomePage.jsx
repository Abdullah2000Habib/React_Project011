import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import { userData } from './Data';
import { HomeWrapper } from './style';

export default function HomePage() {
return (
    <>
        <HomeWrapper>
            <FeaturedInfo/>
            <Chart data={userData} title={"user Analytics"} dataKey={"Active User"}  grid/>
        </HomeWrapper>
    </>
)
}
