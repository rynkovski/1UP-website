import { createStyles } from '@mantine/styles'

const useStyles = createStyles((theme) => ({
  footer: {
    background: ' #072f37',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },

  curved: {
    position: 'relative',
    background: '#2c3e50',
    height: '50vh',
    '&:after': {
      content: '""',
      borderTopLeftRadius: '50% 100%',
      borderTopRightRadius: '50% 100%',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      background: 'linear-gradient(#2ecde6 -80%, #162947 95%)',
      height: '15%',
    },
  },
}))

export default useStyles
