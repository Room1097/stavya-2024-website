import Navigation from "./components/navigation/navigation"
import Preloader from "./components/preloader/preloader"
import { ThemeProvider } from "./components/providers/theme-provider"

function App() {
 return(
  <>
    <Preloader />
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navigation />
    </ThemeProvider> */}
  </>
 )
}

export default App
