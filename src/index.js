import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ReactDom from "react-dom"
import Login from "./pages/Login/Index"
import Button from "./components/Button/Index"

const App = () => (
  <Router basename={process.env.REACT_APP_PUBLIC_URL}>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Routes>
      <Route element={<Button />} path="/" exact />
      <Route element={<Login />} path="/login" />
    </Routes>
  </Router>
)

ReactDom.render(<App />, document.getElementById("app"))
