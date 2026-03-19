import { createTheme } from '@mui/material/styles'

const theme = createTheme({

  // 1. PALETTE — all your app colors in one place
  palette: {
    mode: 'dark',             // 'light' or 'dark'
    primary: {
      main: '#7C4DFF',        // your brand color — used by buttons, inputs, etc
    },
    background: {
      default: '#0f0f0f',     // page background
      paper: '#1a1a1a',       // Paper/Card background
    },
    text: {
      primary: '#ffffff',
      secondary: '#9e9e9e',   // used for timestamps, subtitles etc
    },
  },

  // 2. TYPOGRAPHY — fonts and scale
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h6: {
      fontWeight: 600,        // room name in sidebar
    },
    body1: {
      fontSize: '0.95rem',    // message text
    },
    caption: {
      fontSize: '0.75rem',    // timestamps, small labels
    },
  },

  // 3. SHAPE — global border radius
  shape: {
    borderRadius: 12,         // applies to all components by default
  },

  // 4. COMPONENTS — override specific MUI components globally
  components: {

    // Every Paper in your app gets this background by default
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    // Every Button gets no text transform (MUI uppercases by default)
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',    // "Send" not "SEND"
          fontWeight: 600,
        },
      },
    },

    // TextField gets a consistent look everywhere
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