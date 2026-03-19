import { createTheme } from '@mui/material/styles'

// Extend MUI's theme types to include our custom tokens
declare module '@mui/material/styles' {
  interface TypeBackground {
    sidebar: string        // adds background.sidebar as a valid token
  }
}

const theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      main: '#7289da',
    },
    background: {
      default: '#1e2124',
      paper: '#36393e',
      sidebar: '#282b30',   // ✅ now a proper theme token
    },
    text: {
      primary: '#ffffff',
      secondary: '#99aab5',
    },
    divider: '#424549',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h6: { fontWeight: 600 },
    body1: { fontSize: '0.95rem' },
    caption: { fontSize: '0.75rem' },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
      },
    },
  },
})

export default theme