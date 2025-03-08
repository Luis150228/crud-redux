import './App.css'
import { TableDemo } from './components/front/userTable'
import { ModeToggle } from './components/ui/mode-toggle'
import { ThemeProvider } from './components/ui/theme-provider'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className='App'>
          <div className='App-header'>
            <ModeToggle/>
            <h1>CRUD-Redux RangelDev</h1>
          </div>
          <div className='App-body'>
            <TableDemo/>
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  )
}

export default App
