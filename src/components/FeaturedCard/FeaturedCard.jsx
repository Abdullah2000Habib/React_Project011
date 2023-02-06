import React from 'react';
import { ArrowDownwardIcon, ArrowUpwardIcon, FeaturedItem, FeaturedMony, FeaturedMonyContainer, FeaturedMonyRate, FeaturedSub, FeaturedTitle } from './style';
export default function FeaturedCard({title,money,rate,sub}) {
return (
    <>
        <FeaturedItem>
            <FeaturedTitle>{title}</FeaturedTitle>
            <FeaturedMonyContainer>
                <FeaturedMony>{money}</FeaturedMony>
                <FeaturedMonyRate>{rate}{parseInt(rate)> 0? <ArrowUpwardIcon/>:< ArrowDownwardIcon/>}</FeaturedMonyRate>
            </FeaturedMonyContainer>
            <FeaturedSub>{sub}</FeaturedSub>
        </FeaturedItem>
    </>
)
}
