import { createStyles } from '@mantine/styles'

const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    borderColor: '#e2e8f0d2',
    borderWidth: 1,
  },

  default: {
    background: `linear-gradient(to bottom, #072f37 0%, #E9ECEF 10%, #E9ECEF 10%, #E9ECEF 100%)`,
  },

  cardHeader: {
    borderColor: '#e2e8f0d2',
    borderWidth: 1,
    borderRadius: '10px 10px 0 0',
  },

  cardBody: {
    borderColor: '#e2e8f0d2',
    borderWidth: 1,
  },
}))

export default useStyles
