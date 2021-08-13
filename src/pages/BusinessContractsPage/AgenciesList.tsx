import React, { ReactNode, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  useMediaQuery,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid
} from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAgencies } from "../../actions/allUsersActions"
import { IRootState } from "../../utils/store"
import AgencyCard from "./AgencyCard"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles"

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const { agencies } = useSelector((state: IRootState) => state.allUsers)
  const [alignment, setAlignment] = React.useState("Kaikki")
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchAllAgencies())
  }, [dispatch])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    event.preventDefault()
    setAlignment(value)
  }

  const handleMobileChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    child: ReactNode
  ) => {
    event.preventDefault()
    setAlignment(event.target.value as string)
  }

  const handleQuerySearchChange = (
    event: any
  ) => {
    setInput(event.target.value)
    setAlignment("Search")
  }

  const showAgencyCards = (type: string) => {
    switch (type) {
      case "Kaikki":
        return (
          agencies
            .map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
        )
      case "Search":
        const query = agencies.filter((agency: any) => agency.name.includes(input.toLowerCase()))
        if (query.length > 0) {
          return (
            query.map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
          )
        } else {
          return (
            <><Typography>{t('no_results')}</Typography></>
          )
        }
      default:
        const result = agencies.filter((agency: any) => agency.category === alignment)
        if (result.length > 0) {
          return (
            result.map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
          )
        } else {
          return (
            <><Typography>{t('no_results')}</Typography></>
          )
        }
    }
  }

  const fields = [
    { field: t("all"), category: "Kaikki" },
    { field: t("construction"), category: "Rakennus, asennus ja huolto"},
    { field: t("it"), category: "IT- ja tietoliikenne"},
    { field: t("education"), category: "Koulutus- ja opetusala" },
    { field: t("medicine"), category: "Lääketeollisuus- ja farmasia" },
    { field: t("estate"), category: "Kiinteistö" }
  ]

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.searchBar}>
              <InputBase
                placeholder={t('search_by_name')}
                value={input}
                onChange={handleQuerySearchChange}
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          {matches ? (
            <FormControl style={{minWidth: "100%"}}>
              <InputLabel>Category</InputLabel>
              <Select autoWidth={true} value={alignment} onChange={handleMobileChange}>
                {fields.map((f) => (
                  <MenuItem key={f.field} value={f.category}>
                    {f.field}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <ToggleButtonGroup 
              classes={{root: classes.buttonGroupRoot }} 
              className={classes.buttonGroup} 
              value={alignment} exclusive 
              onChange={handleChange} 
              orientation="vertical">
              {fields.map((f) => (
                <ToggleButton key={f.field} value={f.category}>
                  {f.field}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
        </Grid>
        <Grid item xs={12} md={10}>
          {showAgencyCards(alignment)}
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft: "0.5%"
    },
    buttonGroup: {
      display: "inline-grid",
      borderRadius: "0px"
    },
    buttonGroupRoot: {
      borderRadius: "0px"
    }
  })
)

export default AgenciesList
