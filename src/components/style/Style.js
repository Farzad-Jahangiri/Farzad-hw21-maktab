import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
        },
        "& .MuiInputLabel-root": {
          textAlign: "right",
        },
        "& .MuiInputLabel-formControl": {
          right: "auto",
          left: 0,
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(0, 1.5px) scale(0.75)",
          transformOrigin: "top right",
        },
        "& option":{
            direction:"rtl"
        },
        direction: "rtl",
        width: "60vw",
        margin: ".5rem",
        backgroundColor: "white",
        borderRadius: ".5rem",
        outline: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
      },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
    },
    button: {
        width: "60vw",
        height: "3rem"
    },
    cardCountact: {
        width: "26rem",
        height: "14rem",
        padding: "10px",
        backgroundColor: "rgba(255,255,255,.2)",
        color: "white"
    },
    typography: {
        direction: "rtl",
        marginTop: "10px !important",
    },
    iconButton:{
        color: 'white !important',
    },
    menuItem:{
        direction:"rtl"
    },
    errorInput:{
        borderBlock:"4px solid red !important"
    }
});


export default useStyles;