import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import { userData } from './Data';
import { HomeWidgets, HomeWrapper } from './style';

export default function HomePage() {
return (
    <>
        <HomeWrapper>
            <FeaturedInfo/>
            <Chart data={userData} title={"user Analytics"} dataKey={"Active User"}  grid/>
            <HomeWidgets>
                <WidgetSm/>
                <WidgetLg/>
            </HomeWidgets>
        </HomeWrapper>
    </>
)
}
