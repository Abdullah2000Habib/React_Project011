import React from 'react';
import { Link } from 'react-router-dom';
import { AttachMoneyIcon, BarChartIcon, ChatBubbleOutlineIcon, DynamicFeedIcon, LineStyleIcon, MailOutlineIcon, PermIdentityIcon, ReportIcon, SidebarContainer, SidebarList, SidebarListItem, SidebarMenu, SidebarTitle, SidebarWrapper, StorefrontIcon, TimelineIcon, TrendingUpIcon, WorkOutlineIcon } from './style';

export default function Sidebar() {
return (
    <>
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <Link className='link' to='/'>
                            <SidebarListItem >
                                <LineStyleIcon/> Home
                            </SidebarListItem>
                        </Link>
                        <SidebarListItem >
                            <TimelineIcon/> Analytics
                        </SidebarListItem>
                        <SidebarListItem >
                            <TrendingUpIcon/> Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Quick Menu</SidebarTitle>
                    <SidebarList>
                        <Link className='link' to='/users'>
                            <SidebarListItem >
                                <PermIdentityIcon/> User
                            </SidebarListItem>
                        </Link>
                        <Link className='link' to='/products'>
                            <SidebarListItem >
                                <StorefrontIcon/> Products
                            </SidebarListItem>
                        </Link>
                        <SidebarListItem >
                            <AttachMoneyIcon/> Transactions
                        </SidebarListItem>
                        <SidebarListItem >
                            <BarChartIcon/> Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem >
                            <MailOutlineIcon/> Mail
                        </SidebarListItem>
                        <SidebarListItem >
                            <DynamicFeedIcon/> Feedback
                        </SidebarListItem>
                        <SidebarListItem >
                            <ChatBubbleOutlineIcon/> Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem >
                            <WorkOutlineIcon/> Manage
                        </SidebarListItem>
                        <SidebarListItem >
                            <TimelineIcon/> Analytics
                        </SidebarListItem>
                        <SidebarListItem >
                            <ReportIcon/> Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
)
}
