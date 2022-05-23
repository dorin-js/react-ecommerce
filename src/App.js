import './App.css'
import Home from './pages/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import SingleProduct from './pages/SingleProduct'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="products" element={<ProductList />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
