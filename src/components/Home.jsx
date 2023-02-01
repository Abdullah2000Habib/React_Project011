
import React from 'react';
import Container from './Container';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';

export default function Home() {
return (
    <>
        <Topbar/>
        <Container>
            <Sidebar />
            <div style={{flex:"4" ,backgroundColor :"red"}}>others</div>
        </Container>

    </>
)
}
