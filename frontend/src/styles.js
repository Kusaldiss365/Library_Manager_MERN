import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(()=> ({

    icon: {
        marginRight: '20px',
        fontSize: '3rem !important'
    },

    table: {
        minWidth: '650px',
    },

    tableContainer: {
        margin: '100px 40px',
    },
    container: {
        padding: '20px',
        justifyContent: "center"
    },


    toolBar: {
      justifyContent: 'center'
    },

    Fabs: {
        display: 'flex',
        justifyContent: 'left',
      },

    homeButton: {
        marginRight: '100px !important'
      },
}))

 export default useStyles;