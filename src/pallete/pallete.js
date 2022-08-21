import {createTheme} from '@mui/material/styles'
import { blueGrey, red } from '@mui/material/colors'

const styles = createTheme({
    palette: {
        primary: {
            main: red[900]
        }
      },
    background: {
        default: {
            paper: blueGrey[900],
            default: blueGrey[900]
        }
    }
})

export default styles;