import React from "react"
import {
  IconButton,
  Badge,
  Tooltip,
  MenuItem,
  Avatar,
  ListItemAvatar,
  Divider,
  Box,
  Typography,
  List,
} from "@mui/material"

import MailIcon from "@mui/icons-material/Mail"

import BasicDropdown, {
  BasicDropdownBody,
  BasicDropdownAnchor,
} from "src/components/BasicDropdown/Index"

const LIST = [
  {
    fullname: "مرتضی محی الدین",
    title: "سفارش مح سیبش یسشب یسشب یسشب سیب یسصولات جدید",
    img: "/img/avatar-1.jpg",
    createdAt: "ده اردیبهشت 92",
  },
  {
    fullname: "حسین کشمیری",
    title: "یادآوری جهت آلارم ها",
    img: "/img/avatar-1.jpg",
    createdAt: "ده اردیبهشت 92",
  },
]

export default function MessageDropdown() {
  return (
    <BasicDropdown id="new_messages_menu">
      <BasicDropdownAnchor>
        <Tooltip title="پیام های جدید">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={1} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </BasicDropdownAnchor>
      <BasicDropdownBody>
        {LIST.map(({ fullname, img, title, createdAt }, index) => (
          <React.Fragment key={index}>
            <MenuItem
              sx={{
                borderBottom: index < LIST.length ? 1 : 0,
                borderColor: "divider",
                p: 2,
              }}>
              <ListItemAvatar>
                <Avatar alt="avatar" src={img} sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <Box>
                <Typography
                  noWrap
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: 600, width: 200 }}>
                  {title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="caption">{fullname}</Typography>
                  <Typography variant="caption">{createdAt}</Typography>
                </Box>
              </Box>
            </MenuItem>
          </React.Fragment>
        ))}
      </BasicDropdownBody>
    </BasicDropdown>
  )
}
