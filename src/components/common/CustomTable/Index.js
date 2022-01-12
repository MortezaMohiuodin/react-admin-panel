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
  Checkbox,
  IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import FilterListIcon from "@mui/icons-material/FilterList"
import { visuallyHidden } from "@mui/utils"
import { alpha } from "@mui/material"

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

export default function CustomTable({
  title,
  rows,
  columns,
  loading,
  multiSelect,
  updateMultiSelect,
  deleteAllAction,
}) {
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
  let isAllSelected = rows.length > 0 && multiSelect?.length === rows.length

  const handleClickCheck = (event, id) => {
    if (typeof multiSelect === "undefined") return
    let index = multiSelect.indexOf(id)
    if (index > -1) {
      let newMultiSelect = multiSelect.filter((item) => item.id === id)
      updateMultiSelect(newMultiSelect)
    } else {
      updateMultiSelect([...multiSelect, id])
    }
  }
  const handleClickAllCheck = (event) => {
    if (typeof multiSelect === "undefined") return
    if (!rows.length) return
    if (rows.length !== multiSelect?.length) {
      let all = rows.map(({ id }) => id)
      updateMultiSelect(all)
    } else {
      updateMultiSelect([])
    }
  }
  const deleteAll = () => {
    deleteAllAction()
  }
  const handleCellClick = (event, row, name) => {
    if (name === "actions") return
    handleClickCheck(event, row.id)
  }
  return (
    <Paper sx={{ position: "relative" }}>
      <LoadingLayout loading={loading} />
      <Toolbar
        sx={{
          ...(multiSelect?.length > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity,
              ),
          }),
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}>
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={deleteAll} sx={{ mr: -1 }}>
            {multiSelect?.length > 0 ? <DeleteIcon /> : <FilterListIcon />}
          </IconButton>
        </Box>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {multiSelect && (
                <TableCell sx={{ width: 40 }}>
                  <Checkbox
                    checked={isAllSelected}
                    onChange={handleClickAllCheck}
                    indeterminate={!isAllSelected && multiSelect?.length > 1}
                  />
                </TableCell>
              )}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                let isSelected = false
                if (typeof multiSelect !== "undefined") {
                  isSelected = multiSelect.indexOf(row.id) > -1
                }

                return (
                  <TableRow
                    key={row.id}
                    selected={isSelected}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {multiSelect && (
                      <TableCell
                        key="checkbox"
                        sx={{ width: 40 }}
                        onClick={(event) => handleCellClick(event, row, name)}>
                        <Checkbox checked={isSelected} />
                      </TableCell>
                    )}
                    {columns.map(({ name, en, width, output }) => (
                      <TableCell
                        onClick={(event) => handleCellClick(event, row, name)}
                        key={name}
                        sx={{
                          typography: en ? "en" : "",
                          width: width || "auto",
                        }}>
                        {!output ? row[name] : output(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}
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
