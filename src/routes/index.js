import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeFoodPage  from "../pages/TypeFoodPage/TypeFoodPage";
import SigninPage from "../pages/SigninPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import FoodDetailPage from "../pages/FoodDetailPage/FoodDetailPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/type',
        page: TypeFoodPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/signin',
        page: SigninPage,
    },
    {
        path: '/signup',
        page: SignupPage,
    },
    {
        path: '/foodDetail',
        page: FoodDetailPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {   
        path: '/profile',
        page: ProfilePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/admin',
        page: AdminPage,
        isPrivate: true
    },
    {
        path: "*",
        page: NotFoundPage,
        isShowHeader: false
    }
];