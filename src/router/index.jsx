import HomePage from "../pages/HomePage";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage";

export const  PATHS = {
    HOME :'/',
    USERlIST :'/users',
    USER :'/user/:userId',
};

export const router = [
    {index:true,element:<HomePage/>},
    {path:PATHS.USERlIST ,element:<UserListPage/>},
    {path:PATHS.USER ,element:<UserPage/>},
];