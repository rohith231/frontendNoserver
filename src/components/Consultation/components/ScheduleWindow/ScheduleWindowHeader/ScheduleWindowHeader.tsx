import React ,{useState} from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useChatContext from "../../../hooks/useChatContext/useChatContext";
import Grid from "@material-ui/core/Grid";
import { Badge, Card, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseSmallIcon from "../../../icons/CloseSmallIcon";
import { ScheduleWindowHeader as useStyles } from "./styles";

export default function ScheduleWindowHeader() {
  const classes = useStyles();
  const { setIsScheduleWindowOpen } = useChatContext();

  return (
    <div className={classes.container}>
      <Grid container className={classes.mainProfileContainer}>
        <Grid item xs={6} className={classes.mt4}>
          <span className={classes.font18}>2 Waiting</span>
        </Grid>
        <Grid
          item
          xs={5}
          className={[classes.textRight, classes.mt4].join(" ")}
        >
          <Button className={[classes.font18, classes.primaryColor].join(" ")}>
            Admit all
          </Button>
        </Grid>
        <Grid item xs={1}>
          <button
            className={classes.closeChatWindow}
            onClick={() => setIsScheduleWindowOpen(false)}
          >
            <CloseSmallIcon />
          </button>
        </Grid>
      </Grid>

      <hr className={classes.horizontalLine} />

      <Grid
        container
        className={[
          classes.mainProfileContainer,
          classes.mt8,
          classes.pr8,
        ].join(" ")}
      >
        <Grid item xs={6}>
          <Typography className={[classes.font16].join(" ")}>
            <b>Alex Den</b>
          </Typography>
          <Typography className={[classes.greyColor, classes.font14].join(" ")}>
            Brother
          </Typography>
        </Grid>
        <Grid item xs={6} container className={classes.mt2}>
          <Grid item xs={5}>
            <Button className={[classes.AdmitButton, classes.w100].join(" ")}>
              Admit
            </Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <Button className={classes.removeButton}>Remove</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={[
          classes.mainProfileContainer,
          classes.mb8,
          classes.mt8,
          classes.pr8,
        ].join(" ")}
      >
        <Grid item xs={6}>
          <Typography className={[classes.font16].join(" ")}>
            <b>Ria Martin</b>
          </Typography>
          <Typography className={[classes.greyColor, classes.font14].join(" ")}>
            Wife
          </Typography>
        </Grid>
        <Grid item xs={6} container className={classes.mt2}>
          <Grid item xs={5}>
            <Button className={[classes.AdmitButton, classes.w100].join(" ")}>
              Admit
            </Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <Button className={classes.removeButton}>Remove</Button>
          </Grid>
        </Grid>
      </Grid>

      <Card className={classes.mainProfileContainer}>
        <Grid item xs={12} className={classes.m4}>
          <Grid container className={[classes.mainProfileContainer].join(" ")}>
            <Grid item xs={8} className={classes.mt4}>
              <span className={classes.font18}>Upcoming event: 11:00 a.m</span>
            </Grid>
            <Grid
              item
              xs={4}
              className={[classes.textRight, classes.mt4].join(" ")}
            >
              <Button
                className={[classes.font18, classes.primaryColor].join(" ")}
              >
                Admit all
              </Button>
            </Grid>
          </Grid>

          <hr className={classes.horizontalLine} />
          <Grid
            container
            className={[
              classes.mainProfileContainer,
              classes.mt8,
              classes.pr8,
            ].join(" ")}
          >
            <Grid item xs={6}>
              <Typography className={[classes.font16].join(" ")}>
                <b>Ria Martin</b>
              </Typography>
              <Badge
                className={[
                  classes.greyColor,
                  classes.pl2,
                  classes.pr2,
                  classes.font11,
                  classes.badge,
                  classes.p1,
                  classes.borderR5,
                ].join(" ")}
              >
                Wife
              </Badge>
            </Grid>
            <Grid item xs={6} container className={classes.mt2}>
              <Grid item xs={5}>
                <Button
                  className={[classes.AdmitButton, classes.w100].join(" ")}
                >
                  Admit
                </Button>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <Button className={classes.removeButton}>Remove</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            className={[
              classes.mainProfileContainer,
              classes.mt8,
              classes.mb8,
              classes.pr8,
            ].join(" ")}
          >
            <Grid item xs={6}>
              <Typography className={[classes.font16].join(" ")}>
                <b>Joslin Rodgers</b>
              </Typography>
              <Typography
                className={[classes.greyColor, classes.font11].join(" ")}
              >
                Mother
              </Typography>
            </Grid>
            <Grid item xs={6} container className={classes.mt2}>
              <Grid item xs={5}>
                <Button
                  className={[classes.AdmitButton, classes.w100].join(" ")}
                >
                  Admit
                </Button>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <Button className={classes.removeButton}>Remove</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

       <Card className={classes.mainProfileContainer}>
        <Grid item xs={12} className={classes.m4}>
          <Grid container className={[classes.mainProfileContainer].join(" ")}>
            <Grid item xs={8} className={classes.mt4}>
              <span className={classes.font18}>Upcoming event: 11:15 a.m</span>
            </Grid>
            <Grid
              item
              xs={4}
              className={[classes.textRight, classes.mt4].join(" ")}
            >
              <Button
                className={[classes.font18, classes.primaryColor].join(" ")}
              >
                Admit all
              </Button>
            </Grid>
          </Grid>

          <hr className={classes.horizontalLine} />
          <Grid
            container
            className={[
              classes.mainProfileContainer,
              classes.mt8,
              classes.pr8,
            ].join(" ")}
          >
            <Grid item xs={6}>
              <Typography className={[classes.font16].join(" ")}>
                <b>Alex Walker</b>
              </Typography>
              <Badge
                className={[
                  classes.greyColor,
                  classes.pl2,
                  classes.pr2,
                  classes.font11,
                  classes.badge,
                  classes.p1,
                  classes.borderR5,
                ].join(" ")}
              >
                Patient
              </Badge>
            </Grid>
            <Grid item xs={6} container className={classes.mt2}>
              <Grid item xs={5}>
                <Button
                  className={[classes.AdmitButton, classes.w100].join(" ")}
                >
                  Admit
                </Button>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <Button className={classes.removeButton}>Remove</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            className={[
              classes.mainProfileContainer,
              classes.mt8,
              classes.mb8,
              classes.pr8,
            ].join(" ")}
          >
            <Grid item xs={6}>
              <Typography className={[classes.font16].join(" ")}>
                <b>Marti Valencia</b>
              </Typography>
              <Typography
                className={[classes.greyColor, classes.font11].join(" ")}
              >
                Sister
              </Typography>
            </Grid>
            <Grid item xs={6} container className={classes.mt2}>
              <Grid item xs={5}>
                <Button
                  className={[classes.AdmitButton, classes.w100].join(" ")}
                >
                  Admit
                </Button>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <Button className={classes.removeButton}>Remove</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card> 
    </div>
  );
}
