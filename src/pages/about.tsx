import Navigation from '../components/navigation/navigation'
import { ThemeProvider } from "../components/providers/theme-provider";

const About = () => {
  return (
  <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navigation />
        <h1 className='text-5xl'>INSIDE ABOUT US PAGE</h1>
    </ThemeProvider>
  </>
  )
}

export default About
