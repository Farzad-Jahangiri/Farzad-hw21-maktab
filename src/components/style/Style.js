import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input:{
        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",},
        direction:"rtl",
        width:"60vw",
        margin:".5rem",
        backgroundColor:"white",
        borderRadius:".5rem",
        outline:"none",
        border:"none"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        width:"60vw",
        height:"3rem"
    }
  });


export default useStyles;