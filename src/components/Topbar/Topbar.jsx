import React from 'react';
import { LanguageIcon, Logo, NotificationsNoneIcon, SettingsIcon, TopIconBag, TopLeft, TopRight, TopbarAvatar, TopbarContainer, TopbarIconContainer, TopbarWrapper } from './style';

export default function Topbar() {
return (
    <>
        <TopbarContainer>
            <TopbarWrapper>
                <TopLeft>
                    <Logo>Admin</Logo>
                </TopLeft>
                <TopRight>
                    <TopbarIconContainer>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                        <TopIconBag>2</TopIconBag>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <LanguageIcon></LanguageIcon>
                        <TopIconBag>1</TopIconBag>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <SettingsIcon></SettingsIcon>
                    </TopbarIconContainer>
                    <TopbarAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
                </TopRight>
            </TopbarWrapper>
        </TopbarContainer>
    </>
)
}
