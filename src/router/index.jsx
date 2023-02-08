import HomePage from "../pages/HomePage";
import NewUserPage from "../pages/NewUserPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage";

export const  PATHS = {
    HOME :'/',
    USERlIST :'/users',
    USER :'/user/:userId',
    NEWUSER :'/newUser',
    PRODUCTLIST :'/products',
    PRODUCT :'/product/:productId',
    NEWPRODUCT :'/newproduct',
};

export const router = [
    {index:true,element:<HomePage/>},
    {path:PATHS.USERlIST ,element:<UserListPage/>},
    {path:PATHS.USER ,element:<UserPage/>},
    {path:PATHS.NEWUSER ,element:<NewUserPage/>},
    {path:PATHS.PRODUCTLIST ,element:<ProductListPage/>},
    {path:PATHS.PRODUCT ,element:<ProductPage/>},
    // {path:PATHS.NEWPRODUCT ,element:<NewProductPage/>},
];