import { Outlet, NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import { Select, MenuItem } from "@mui/material"

const Link = styled(NavLink)`
  background-color: black;
  &.active {
    color: white;
  }
`

export default function Dashboard() {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}>
        <MenuItem value={10}>یک</MenuItem>
        <MenuItem value={20}>دو</MenuItem>
        <MenuItem value={30}>سهع</MenuItem>
      </Select>
      <input type="text" placeholder="Name" />
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <div>dashboard layout</div>
      <Outlet />
    </>
  )
}
