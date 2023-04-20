import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '48em',
  lg: '64em',
  xl: '80em',
  '2xl': '96em'
})

export const theme = extendTheme({
  breakpoints,
  lineHeights: {
    tall: 1.8
  },
  colors: {
    orange: {
      600: '#EA580C'
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6b7280',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    indigo: {
      50: '#EEF2FF',
      100: '#E0E7FF',
      200: '#C7D2FE',
      300: '#A5B4FC',
      400: '#818CF8',
      500: '#6366F1',
      600: '#4F46E5',
      700: '#4338CA',
      800: '#3730A3',
      900: '#312E81'
    },
    green: {
      500: '#10B981'
    },
    pink: {
      400: '#E5BFAD',
      300: 'red',
      500: '#c6814d'
    },
    teal: {
      200: '#83C5BE',
      500: '#006d77'
    },
    palette: {
      'white': '#FFFFFF',
      'beige': '#FAF8F2',
      'pink': '#F4E7E4',
      'brown': '#E7D3C6',
      'black': '#1F2938'
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '65ch'
      }
    },
    Link: {
      variants: {
        BROWN: {
          bg: 'palette.brown',
          color: 'palette.black',
          _hover: {
            textDecoration: 'none',
            backgroundColor: 'palette.beige',
          }
        },
        PINK: {
          bg: 'palette.pink',
          color: 'palette.black',
          _hover: {
            textDecoration: 'none',
            backgroundColor: 'palette.beige',
          }
        }
      }
    }
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.800'
      },
      'ul, ol': {
        listStyle: 'none'
      }
    }
  }
})
