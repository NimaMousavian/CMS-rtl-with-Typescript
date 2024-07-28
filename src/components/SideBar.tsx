import React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface ListItem {
  id: number;
  title: string;
  link: string;
}

const listItems: ListItem[] = [
  { id: 1, title: "صفحه ی اصلی", link: "/home" },
  { id: 2, title: "محصولات", link: "/products" },
  { id: 3, title: "کاربران", link: "/users" },
  { id: 4, title: "نظرات", link: "/comments" },
  { id: 5, title: "سفارش ها", link: "/orders" },
  { id: 6, title: "تخفیف ها", link: "/discounts" },
  { id: 7, title: "لیست مسافران", link: "/passengers" },
];

const SideBar = () => {
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            به داشبورد خود خوش آمدید
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {listItems.map((item) => (
            <Link to={item.link} className="link">
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary={item.title}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
