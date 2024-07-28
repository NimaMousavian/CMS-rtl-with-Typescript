import Home from "./pages/Home";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Discounts from "./pages/Discounts";
import Passengers from "./components/Passengers";

const routes = [
  {
    path: "/",
    element: <Home />,
    breadcrumb: "صفحه‌ی اصلی",
  },
  {
    path: "/products",
    element: <Products />,
    breadcrumb: "محصولات",
  },
  {
    path: "/comments",
    element: <Comments />,
    breadcrumb: "نظرات",
  },
  {
    path: "/users",
    element: <Users />,
    breadcrumb: "کاربران",
  },
  {
    path: "/orders",
    element: <Orders />,
    breadcrumb: "سفارشات",
  },
  {
    path: "/discounts",
    element: <Discounts />,
    breadcrumb: "تخفیف ها",
  },
  {
    path: "/passengers",
    element: <Passengers />,
    breadcrumb: "لیست مسافران",
  },
];

export default routes;
