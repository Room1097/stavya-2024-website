import AboutUs from '@/components/about-us/AboutUs';
import Navigation from '../components/navigation/navigation'
import { ThemeProvider } from "../components/providers/theme-provider";

const About = () => {
  return (
  <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navigation />
        <AboutUs />
    </ThemeProvider>
  </>
  )
}

export default About
