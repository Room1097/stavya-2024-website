import Navigation from "./components/navigation/navigation"
import { ThemeProvider } from "./components/providers/theme-provider"

function App() {
 return(
  <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div >

    <Navigation/>
     <div
      className=" text-zinc-500 h-screen text-9xl flex items-center justify-center"
      >
        Hello Stavya
      </div>
        </div>
    </ThemeProvider>
  </>
 )
}

export default App
