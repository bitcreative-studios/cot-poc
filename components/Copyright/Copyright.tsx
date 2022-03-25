import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export type CopyrightProps = {}
const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <MuiLink color="inherit" href="https://mui.com/">
      Your Website
    </MuiLink>{' '}
    {new Date().getFullYear()}.
  </Typography>
)
export default Copyright
