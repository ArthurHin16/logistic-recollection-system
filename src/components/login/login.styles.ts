import { makeStyles } from '@material-ui/core/styles'
import BAMX from '../images/BAMX.jpg'

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${BAMX})`,
        backgroundRepeat: 'no-reapeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        opacity: '0.8',
        //background: 'rgb(255,255,255,0.5)',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            margingTop: 0,
            width:'100%',
            height:'100%'
        }
    },
    div: {
        marginTop:theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundPosition: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(10),
        spacing: 4
        
    }

}))