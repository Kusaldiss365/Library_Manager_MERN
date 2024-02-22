import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(()=> ({

    icon: {
        marginRight: '20px',
        fontSize: '3rem !important'
    },

    table: {
        minWidth: '650px',
        maxWidth: '100vw',
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
        position: 'relative',
        marginRight: '200px !important'
      },
    
    addBookContainer: {
        justifyContent: 'center',
        marginTop: '70px'
    }
}))

 export default useStyles;