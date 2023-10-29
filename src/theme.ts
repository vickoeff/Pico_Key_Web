import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#2e1437",
    800: "#51425f",
    700: "#948e99",
    600: "#cad1c3",
    500: "#e7eed0",
  }
}

const styles = {
  global: {
    // styles for the `body`
    body: {
      color: "brand.700"
    },
  }
}

const components = {
  Text: {
    baseStyle: {
      color: "brand.700"
    },
    variants: {
      title: {
        fontSize: "2.4rem",
        fontWeight: "bold",
        color: "brand.800"
      }
    }
  },
  Input: {
    baseStyle: {
      borderColor: "brand.800"
    }
  }
}

export const theme = extendTheme({ styles, colors, components })