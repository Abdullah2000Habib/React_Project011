import HomePage from "../pages/HomePage";
import NewUserPage from "../pages/NewUserPage";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage";

export const  PATHS = {
    HOME :'/',
    USERlIST :'/users',
    USER :'/user/:userId',
    NEWUSER :'/newUser',
};

export const router = [
    {index:true,element:<HomePage/>},
    {path:PATHS.USERlIST ,element:<UserListPage/>},
    {path:PATHS.USER ,element:<UserPage/>},
    {path:PATHS.NEWUSER ,element:<NewUserPage/>},
];