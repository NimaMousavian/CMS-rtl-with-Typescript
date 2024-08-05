import React from "react";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadCrumbs from "./../components/BreadCrumbs";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface IListItem {
  id: number;
  title: string;
  link: string;
}

const listItems: IListItem[] = [
  { id: 1, title: "صفحه ی اصلی", link: "/" },
  { id: 2, title: "محصولات", link: "/products" },
  { id: 3, title: "کاربران", link: "/users" },
  { id: 4, title: "نظرات", link: "/comments" },
  { id: 5, title: "سفارش ها", link: "/orders" },
  { id: 6, title: "تخفیف ها", link: "/discounts" },
  { id: 7, title: "لیست مسافران", link: "/passengers" },
  { id: 8, title: "نقشه", link: "/map" },
];

interface Props {
  router: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

const SideBar = ({ router, window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div">
              داشبورد ادمین
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap>
                به داشبورد خود خوش آمدید
              </Typography>
            </Toolbar>
            <Divider />
            <List>
              {listItems.map((item) => (
                <Link key={item.id} to={item.link} className="link">
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        sx={{ textAlign: "left" }}
                        primary={item.title}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Toolbar>
              <Typography variant="h6" noWrap>
                به داشبورد خود خوش آمدید
              </Typography>
            </Toolbar>
            <Divider />
            <List>
              {listItems.map((item) => (
                <Link key={item.id} to={item.link} className="link">
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        sx={{ textAlign: "left" }}
                        primary={item.title}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <BreadCrumbs />
          {router}
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
