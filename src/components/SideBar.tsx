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

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import OrderIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/LocalOffer";
import PassengerIcon from "@mui/icons-material/AirplanemodeActive";
import MapIcon from "@mui/icons-material/Map";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BreadCrumbs from "./BreadCrumbs";

const drawerWidth = 240;
const closedDrawerWidth = 73;

interface ListItem {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
}

const listItems: ListItem[] = [
  { id: 1, title: "پیشخوان", link: "/", icon: <HomeIcon /> },
  { id: 2, title: "محصولات", link: "/products", icon: <ShoppingCartIcon /> },
  { id: 3, title: "کاربران", link: "/users", icon: <PeopleIcon /> },
  { id: 4, title: "نظرات", link: "/comments", icon: <CommentIcon /> },
  { id: 5, title: "سفارش ها", link: "/orders", icon: <OrderIcon /> },
  { id: 6, title: "تخفیف ها", link: "/discounts", icon: <DiscountIcon /> },
  { id: 7, title: "لیست مسافران", link: "/passengers", icon: <PassengerIcon /> },
  { id: 8, title: "نقشه", link: "/map", icon: <MapIcon /> },
];

interface Props {
  router: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
  window?: () => Window;
}

const SideBar = ({ router, window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <IconButton onClick={handleDrawerToggle} sx={{ fontSize: 20 }}>
          <MenuRoundedIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      </Toolbar>
      <Box
        component="img"
        src={open ? "/images/logo/logo-05.png" : "/images/logo/logo-01.png"}
        alt="Menu Image"
        sx={{
          display: "block",
        }}
      />
      <List>
        {listItems.map((item) => (
          <ListItem disablePadding sx={{ display: "block" }} key={item.id}>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
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
            keepMounted: true, // Better open performance on mobile.
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
              transition: "width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              height: `calc(100vh - 40px)`,
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
