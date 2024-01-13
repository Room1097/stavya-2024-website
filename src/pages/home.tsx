
import Navigation from '../components/navigation/navigation'
import { ThemeProvider } from "../components/providers/theme-provider";

const Home = () => {
  return (
  <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navigation />
    </ThemeProvider>
  </>
  )
}

export default Home
