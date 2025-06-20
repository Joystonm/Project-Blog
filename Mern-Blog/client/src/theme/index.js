import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: {
    main: '#3a86ff',
    light: '#83b5ff',
    dark: '#0a58ca',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#8338ec',
    light: '#a56ef5',
    dark: '#6019c0',
    contrastText: '#ffffff',
  },
  accent: {
    main: '#ff006e',
    light: '#ff4d94',
    dark: '#c5004f',
    contrastText: '#ffffff',
  },
  success: {
    main: '#38b000',
    light: '#70c94f',
    dark: '#2a8c00',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ffbe0b',
    light: '#ffce4d',
    dark: '#d99e00',
    contrastText: '#000000',
  },
  error: {
    main: '#d90429',
    light: '#e34a63',
    dark: '#a3001e',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#121212',
  },
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    success: colors.success,
    grey: colors.grey,
    background: {
      default: colors.grey[50],
      paper: '#ffffff',
    },
    text: {
      primary: colors.grey[800],
      secondary: colors.grey[600],
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    code: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 16px 24px rgba(0, 0, 0, 0.05)',
    '0px 24px 32px rgba(0, 0, 0, 0.05)',
    '0px 32px 40px rgba(0, 0, 0, 0.05)',
    // ... rest of the shadows
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(45deg, ${colors.primary.main} 30%, ${colors.primary.light} 90%)`,
        },
        containedSecondary: {
          background: `linear-gradient(45deg, ${colors.secondary.main} 30%, ${colors.secondary.light} 90%)`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default theme;
