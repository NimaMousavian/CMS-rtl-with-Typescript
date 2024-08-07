import Home from "./pages/Home";

import Users from "./pages/Users";

import Passengers from "./components/Passengers";
import Map from "./pages/Map";
import Services from "./pages/Services";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Messaging from "./pages/Messaging";
import Requests from "./pages/Requests";
import BasicInfo from "./pages/BasicInfo";
import Settings from "./pages/Settings";



const routes = [
  {
    path: "/",
    element: <Home />,
    breadcrumb: "پیشخوان",
  },
  {
    path: "/passengers",
    element: <Passengers />,
    breadcrumb: "لیست مسافران",
  },
  {
    path: "/map",
    element: <Map />,
    breadcrumb: "نقشه",
  },
  {
    path: "/services",
    element: <Services />,
    breadcrumb: "سرویس ها",
  },
  {
    path: "/finance",
    element: <Finance />,
    breadcrumb: "امور مالی",
  },
  {
    path: "/reports",
    element: <Reports />,
    breadcrumb: "گزارش ها",
  },
  {
    path: "/messaging",
    element: <Messaging />,
    breadcrumb: "پیام رسانی",
  },
  {
    path: "/requests",
    element: <Requests />,
    breadcrumb: "درخواست ها",
  },
  {
    path: "/basic-info",
    element: <BasicInfo />,
    breadcrumb: "اطلاعات پایه",
  },
  {
    path: "/settings",
    element: <Settings />,
    breadcrumb: "تنظیمات",
  },
  {
    path: "/users",
    element: <Users />,
    breadcrumb: "کاربران",
  },
];

export default routes;
