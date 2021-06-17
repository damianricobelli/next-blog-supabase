import { extendTheme, useColorModeValue } from "@chakra-ui/react"

const styles = {
  global: () => ({
    body: {
      bg: useColorModeValue("white", "gray.800")
    }
  })
}

const theme = extendTheme({
  styles,
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif"
  }
})

export default theme
