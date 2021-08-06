import React, { useEffect } from "react";
import {
  Grid,
  List,
  Card,
  CardHeader,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Divider,
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import allUsersService from "../../services/allUsersService";
import { useMediaQuery } from "@material-ui/core";
import { AddIcon } from "@material-ui/data-grid";
import WorkerTableView from "./WorkerTableView";

function not(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: any[], b: any[]) {
  return [...a, ...not(b, a)];
}

const WorkerTransferList: React.FC<any> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [checked, setChecked] = React.useState<any[]>([]);
  const { agencyWorkers } = useSelector((state: any) => state.allUsers);
  const [left, setLeft] = React.useState<any>(agencyWorkers);
  const [right, setRight] = React.useState<any>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  useEffect(() => {
    allUsersService.getAgencyWorkers().then((res: any) => setLeft(res.data));
  }, [allUsersService]);

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: any[]) => intersection(checked, items).length;

  const handleToggleAll = (items: any[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };



  const customList = (title: React.ReactNode, items: any[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value: any) => {
          const labelId = `transfer-list-all-item-${value._id}-label`;

          return (
            <ListItem
              key={value._id}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );
  if(matches) 
  return (
    <div>
      <WorkerTableView agencyWorkers={left}/>
    </div>
  )
  return (
    <Grid container spacing={2} alignItems="center" className={classes.root}>
      <Grid item>{customList("Choices", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
    
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto",
    },
    cardHeader: {
      padding: theme.spacing(1, 2),
    },
    list: {
      width: 200,
      height: 230,
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  })
);

export default WorkerTransferList;
