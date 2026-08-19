import { createTheme } from '@mui/material/styles'

const palette = {
  dark: {
    mode: 'dark',
    primary: { main: '#3ddc84', contrastText: '#07090b' },
    background: { default: '#07090b', paper: '#0d1013' },
    text: { primary: '#e9edf1', secondary: '#9aa6b0' },
    divider: 'rgba(255,255,255,0.08)',
  },
  light: {
    mode: 'light',
    primary: { main: '#0e9f58', contrastText: '#ffffff' },
    background: { default: '#f4f6f7', paper: '#ffffff' },
    text: { primary: '#10151b', secondary: '#5a6571' },
    divider: 'rgba(10,15,20,0.1)',
  },
}

export function getMuiTheme(mode) {
  const tokens = palette[mode]
  return createTheme({
    palette: tokens,
    shape: { borderRadius: 14 },
    typography: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h5: { fontWeight: 700, letterSpacing: '-0.02em' },
      body1: { lineHeight: 1.65 },
      body2: { lineHeight: 1.6 },
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: 'none',
            border: '1px solid var(--line)',
            borderRadius: 20,
          },
          backdrop: { backgroundColor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' },
        },
      },
      MuiTextField: {
        defaultProps: { variant: 'outlined', fullWidth: true },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              fontSize: '0.875rem',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              '&.Mui-focused': {
                boxShadow: '0 0 0 3px color-mix(in srgb, #3ddc84 25%, transparent)',
              },
            },
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 12,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            fontWeight: 600,
          },
        },
      },
      MuiSnackbar: {
        styleOverrides: { root: { fontFamily: 'ui-monospace, monospace' } },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            fontSize: '0.75rem',
          },
        },
      },
    },
  })
}