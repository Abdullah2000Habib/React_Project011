import React from 'react';
import Member from '../Member/Member';
import { widgetSmData } from './Data';

export default function Members() {
return (
    <>
    {widgetSmData.map((item)=>{
        return(
            <Member key={item.id} img={item.img} job={item.job} name={item.name}/>
        )
        })}
    </>
)
}
