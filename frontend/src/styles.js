import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(()=> ({

    icon: {
        marginRight: '20px',
        marginLeft: '200px',
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
      justifyContent: 'start'
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
    },

    addBookBox: {
        minWidth: '600px',
        minHeight: '500px',
        margin: '20px',
        padding: '20px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    smallButton: {
        padding: '4px 6px !important', // Adjust padding to make the button smaller
        fontSize: '0.70rem !important', // Adjust font size to make the button text smaller
    },
    viewBookBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh', // Optional: to center vertically as well
    }
}))

 export default useStyles;