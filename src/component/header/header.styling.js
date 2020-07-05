import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    linkItem: {
        marginLeft: '20px',
        color: 'white'
    },
    userInfo: {
        marginLeft: 'auto',
        display: 'flex'
    },
    logoutIcon: {
        paddingTop: '0px',
        paddingBottom: '0px'
    }
}));