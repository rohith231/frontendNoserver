import { FormHelperText, makeStyles, Theme } from "@material-ui/core";

export const ScheduleWindowHeader = makeStyles((theme: Theme) => ({
  container: {
    // height: '100px',
    background: "#F4F4F6",
    // borderBottom: '1px solid #E4E7E9',
    display: "flex",
    justifyContent: "center",
    // alignItems: 'center',
    padding: "0.5em",
    flexDirection: "column",
  },
  text: {
    fontWeight: "bold",
    marginRight: 2,
  },
  closeChatWindow: {
    cursor: "pointer",
    display: "flex",
    float: "right",
    background: "transparent",
    border: "0",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
  },
  imag: {
    width: 60,
    height: 60,
  },
  imag1: {
    width: 20,
    height: 20,
    marginRight: "0.2em",
  },
  root: {
    // width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
    color: "white",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  topH: {
    backgroundColor: "#5571C6",
  },
  statusBar: {
    width: "200px",
    display: "inline-table",
    verticalAlign: "top",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  scrollableView: {
    overflowY: "scroll",
    float: "left",
    height: "20.5em",
    position: "relative",
    marginTop: "1em",
  },
  mainProfileContainer: {
    margin: "0.4rem",
    paddingRight: "10px",
  },
  pr8: {
    paddingRight: "16px",
  },
  textRight: {
    textAlign: "right",
  },
  mt8: {
    marginTop: "16px",
  },
  mb8: {
    marginBottom: "16px",
  },
  m4: {
    margin: "8px",
  },
  mt4: {
    marginTop: "8px",
  },
  mt2: {
    marginTop: "4px",
  },
  w100: {
    width: "100%",
  },
  p1: {
    padding: "2px",
  },
  pl2: {
    paddingLeft: "4px",
  },
  pr2: {
    paddingRight: "4px",
  },
  borderR5: {
    borderRadius: "5px",
  },
  mr2: {
    marginRight: "4px",
  },
  horizontalLine: {
    width: "100%",
  },
  font18: {
    fontSize: "18px",
  },
  font16: {
    fontSize: "16px",
  },
  font14: {
    fontSize: "14px",
  },
  font12: {
    fontSize: "12px",
  },
  font11: {
    fontSize: "11px",
  },
  font10: {
    fontSize: "10px",
  },
  primaryColor: {
    color: "#5571C6",
  },
  greyColor: {
    color: "#a9a9a9",
  },
  badge: {
    backgroundColor: "green",
    color: "#ffffff",
  },
  AdmitButton: {
    backgroundColor: "#5571C6",
    color: "#ffffff",
    "&:hover": {
      background: "#5571C6",
    },
  },
  removeButton: {
    border: "1px solid #5571C6",
    color: "#5571C6",
  },
}));
