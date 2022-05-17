import './App.css'
import Home from './pages/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal } from '@mui/material/colors'

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
      <Home />
    </ThemeProvider>
  )
}

export default App
