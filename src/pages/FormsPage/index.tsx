import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Fab, Typography, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Paper, Tab, Tabs, withStyles } from "@material-ui/core"
import { AddIcon } from "@material-ui/data-grid"
import GridFormPreview from "./GridFormPreview"
import { useDispatch, useSelector } from "react-redux"
import { fetchFormList } from "../../actions/formListActions"
import Spacing from "../../components/Spacing"

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      width: "100%",
      backgroundColor: "#EB5A00"
    }
  }
})((props: any) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    // textTransform: "none",
    color: "#EB5A00",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))((props: any) => <Tab disableRipple {...props} />);

/**
 * @component
 * @desc This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
 * @todo OnHover preview, pip for every node? So onMouseEnter renders an image(?) of the finished pdf(?)
 */
const FormsPage: React.FC = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (_e: any, newValue: any) => {
    setValue(newValue);
  };

  //add communityForms
  const { myForms } = useSelector((state: any) => state.formList)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchFormList())
  }, [dispatch])
  
  return (
    <Container>
      <div className="form-banner">
        <div className="form-banner-filter">
          <div className="form-filter-search">
            <Typography variant="h5" align="center">Search for templates</Typography>
            <label htmlFor="form-filter-input">Search term</label>
            <input id="form-filter-input" type="text" className="customFormInput"/>
            <FormControl component="fieldset">
              <FormLabel component="legend">Search templates from</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="me"
                  control={<Radio color="secondary" />}
                  label="My forms"
                />
                <FormControlLabel
                  value="common"
                  control={<Radio color="secondary" />}
                  label="Common"
                />
                <FormControlLabel
                  value="community"
                  control={<Radio color="secondary" />}
                  label="Community"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="new-form-btn">
        <Link to="/forms/newform">
          <Fab size="medium" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
      <Paper square>
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
          <StyledTab label="Search" disabled />
          <StyledTab label="My Forms" />
          <StyledTab label="Common" />
          <StyledTab label="Community" />
        </StyledTabs>
      </Paper>
      <Spacing m5/>
      <Typography variant="h4">My Forms</Typography>
      <ul className="horizontal-scroll">
        {myForms.docs.map((t: any, i: number) =>
            <GridFormPreview
              key={i}
              formTitle={t.title}
              formDesc={t.description}
              formId={t._id}
            />
          )}
      </ul>
    </Container>
  )
}

export default FormsPage
