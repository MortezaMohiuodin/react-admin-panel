import { useState } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  TableSortLabel,
  Box,
  Toolbar,
  Typography,
} from "@mui/material"

import { visuallyHidden } from "@mui/utils"
import LoadingLayout from "src/components/LoadingLayout/Index"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export default function CustomTable({ title, rows, columns, loading }) {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }
  return (
    <Paper sx={{ position: "relative" }}>
      <LoadingLayout loading={loading} />
      <Toolbar sx={{ backgroundColor: "inherit" }}>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(({ name, label, width }) => (
                <TableCell key={name} sx={{ width: width || "auto" }}>
                  <TableSortLabel
                    active={orderBy === name}
                    direction={orderBy === name ? order : "asc"}
                    onClick={createSortHandler(name)}>
                    {label}
                    {orderBy === name ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
              {/* {typeof onDelete === "function" && (
                <TableCell key="action">
                  
                </TableCell>
              )} */}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  {columns.map(({ name, en, width }) => (
                    <TableCell
                      key={name}
                      sx={{
                        typography: en ? "en" : "",
                        width: width || "auto",
                      }}>
                      {row[name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
