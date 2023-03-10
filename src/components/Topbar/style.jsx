import styled from "@emotion/styled";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";


export const TopbarContainer = styled("div")`
label:TopbarContainer;
width: 100%;
height: 50px;
background-color: white;
position: sticky;
top: 0;
z-index: 999;
`
export const TopbarWrapper = styled("div")`
label:TopbarWrapper;
height: 100%;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const TopLeft = styled("div")`
label:TopLeft;

`
export const Logo = styled("span")`
label:Logo;
font-weight: bold;
font-size: 30px;
color: darkblue;
cursor: pointer;
`
export const TopRight = styled("div")`
label:TopRight;
display: flex;
align-items: center;

`
export const TopbarIconContainer = styled("div")`
label:TopbarIconContainer;
position: relative;
cursor: pointer;
margin-right: 10px;
color: #555;
`
export const NotificationsNoneIcon = styled(NotificationsNone)`
label:NotificationsNone;

`
export const TopIconBag = styled("span")`
label:TopIconBag;
width: 15px;
height: 15px;
position: absolute;
top: -5px;
right: 0;
background-color: red;
color:white;
border-radius: 50%;
display:flex;
align-items: center;
justify-content: center;
font-size: 10px;
`
export const LanguageIcon = styled(Language)`
label:TopIconBag;
`
export const SettingsIcon = styled(Settings)`
label:SettingsIcon; 
`
export const TopbarAvatar = styled("img")`
label:TopbarAvatar;
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
object-fit: cover;
`
