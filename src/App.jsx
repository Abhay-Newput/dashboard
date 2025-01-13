import { Provider } from './components/ui/provider'
import { QueryProvider } from './utils/QueryProvider'
import Home from './Pages/Home/Home'

function App() {
  return (
    <QueryProvider>
      <Provider>
        <Home />
      </Provider>
    </QueryProvider>
  )
}

export default App