import HomePage from "../pages/HomePage";
import UserListPage from "../pages/UserListPage";

export const  PATHS = {
    HOME :'/',
    USERlIST :'/users',
};

export const router = [
    {index:true,element:<HomePage/>},
    {path:PATHS.USERlIST ,element:<UserListPage/>},
];