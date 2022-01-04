import {
  IconButton,
  Badge,
  Tooltip,
  MenuItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"

import NotificationsIcon from "@mui/icons-material/Notifications"
import MailIcon from "@mui/icons-material/Mail"

import BasicDropdown, {
  BasicDropdownBody,
  BasicDropdownAnchor,
} from "src/components/BasicDropdown/Index"

export default function Left({ open }) {
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        sx={{ marginLeft: { sm: open ? "-12px" : 0 } }}>
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
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
          <MenuItem>
            <ListItemAvatar>
              <Avatar
                alt="avatar"
                src="/img/avatar-1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </ListItemAvatar>
            <ListItemText>تست</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemAvatar>
              <Avatar
                alt="avatar"
                src="/img/avatar-1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </ListItemAvatar>
            <ListItemText>تست</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemAvatar>
              <Avatar
                alt="avatar"
                src="/img/avatar-1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </ListItemAvatar>
            <ListItemText>تست</ListItemText>
          </MenuItem>
        </BasicDropdownBody>
      </BasicDropdown>
    </>
  )
}
