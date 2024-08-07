import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PassengerIcon from "@mui/icons-material/AirplanemodeActive";
import MapIcon from "@mui/icons-material/Map";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import BreadCrumbs from "./BreadCrumbs";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const drawerWidth = 240;
const closedDrawerWidth = 73;

interface ListItem {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
}

const listItems: ListItem[] = [
  { id: 1, title: "پیشخوان", link: "/", icon: <DashboardIcon /> },
  { id: 2, title: "لیست مسافران", link: "/passengers", icon: <EmojiPeopleIcon /> },
  { id: 3, title: "نقشه", link: "/map", icon: <MapIcon /> },
  { id: 4, title: "سرویس ها", link: "/services", icon: <DirectionsBusIcon /> },
  { id: 5, title: "امور مالی", link: "/finance", icon: <MonetizationOnIcon /> },
  { id: 6, title: "گزارش ها", link: "/reports", icon: <AssessmentIcon /> },
  { id: 7, title: "پیام رسانی", link: "/messaging", icon: <MessageIcon /> },
  { id: 8, title: "اطلاعات پایه", link: "/basic-info", icon: <StorageIcon /> },
  { id: 9, title: "تنظیمات", link: "/settings", icon: <SettingsIcon /> },
  { id: 10, title: "کاربران", link: "/users", icon: <PeopleIcon /> },
];

interface Props {
  router: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
  window?: () => Window;
}

const SideBar = ({ router, window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(() => {
    const savedOpen = localStorage.getItem("drawerOpen");
    return savedOpen ? JSON.parse(savedOpen) : false;
  });

  const openImage = "/images/logo/shodamad-logo-02.webp";
  const closedImage = "/images/logo/shodamad-logo-01.webp";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    localStorage.setItem("drawerOpen", JSON.stringify(open));
  }, [open]);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      if (isMobile) {
        setMobileOpen(!mobileOpen);
      } else {
        setOpen(!open);
      }
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
    setOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const FIXED_IMAGE_HEIGHT = 70;

  const drawer = (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          px: [1],
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ fontSize: 20, marginLeft: "10px" }}>
          <MenuRoundedIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      </Toolbar>

      <Box
        component="img"
        src={open ? openImage : closedImage}
        alt="Menu Image"
        sx={{
          display: "block",
          height: open ? FIXED_IMAGE_HEIGHT : FIXED_IMAGE_HEIGHT * 0.8, // کاهش ارتفاع در حالت بسته
          width: 'auto',
          maxWidth: open ? "200px" : "100%",
          margin: '0 auto',
          transition: 'max-width 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          objectFit: 'contain',
          ...(open
            ? {
              marginRight: "30px",
              marginBottom: "10px",
            }
            : {
              padding: "5px",
              marginBottom: "5px",
            }),
        }}
      />
      <List>
        {listItems.map((item) => (
          <ListItem disablePadding sx={{ display: "block" }} key={item.id}>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{
                minHeight: open ? 48 : 45, // کاهش ارتفاع در حالت بسته
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                py: open ? 1 : 0.8, // کاهش بیشتر پدینگ عمودی در حالت بسته
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  "& .MuiSvgIcon-root": {
                    fontSize: open ? 20 : 24, // کاهش بیشتر اندازه آیکون در حالت بسته
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": {
                    fontSize: open ? 14 : 0, // اضافه کردن این خط برای کنترل اندازه متن
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? drawerWidth + 20 : closedDrawerWidth + 20}px)` },
          ml: { sm: `${open ? drawerWidth : closedDrawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            داشبورد ادمین
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: open ? drawerWidth : closedDrawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              margin: 2,
              borderRadius: "16px",
              border: "1px solid #ddd",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: open ? drawerWidth : closedDrawerWidth,
              margin: 2,
              borderRadius: "16px",
              border: "1px solid #ddd",
              overflowX: "hidden",
              transition: "width 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              height: `calc(100vh - 40px)`,
              // اضافه کردن این استایل‌ها برای مخفی کردن نوار اسکرول
              overflowY: "scroll",
              scrollbarWidth: "none",  // برای Firefox
              msOverflowStyle: "none",  // برای Internet Explorer 10+
              "&::-webkit-scrollbar": {
                display: "none"  // برای Chrome, Safari, و Opera
              },
            },
          }}
          open={open}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)` },
          mt: 2,
        }}
      >
        <Toolbar />
        <BreadCrumbs />
        {router}
      </Box>
    </Box>
  );
};

export default SideBar;