import React, { useState } from "react"

import {
  Container,
  Typography,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputLabel,
  Input,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { useTranslation } from "react-i18next"
import Collapsible from "react-collapsible"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    padding: "30px",
    margin: "20px",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  formControl: {
    margin: theme.spacing(3),
  },

  clickableIcon: {
    color: "black",
    "&:hover": {
      color: "blue",
    },
    width: 60,
    height: 60,
  },
}))

/**
 * @todo useTranslation for languagesupport
 * @todo Styles and responsiveness,
 * @todo Figure out the relationship between worker and agency => does the agency need the form as it is or just templates and the worker needs the "working version".
 * @todo datePicker component should search currentDate for defaultvalue if possible
 * @todo print to pdf?
 * @todo inflation? Figure out a more compact and readable way to produce the forms
 * @exports components/FormContainerExpandable
 */
export const FormContainerExpandable = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <Collapsible className={classes.root} trigger="Lomake">
            <div>
              <AgencyForm></AgencyForm>
            </div>
          </Collapsible>
        </Typography>
      </Container>
    </>
  )
}

export const AgencyForm = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    first: false,
    second: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const {
    lawHonored,
    representative,
    employmentStatement,
    riskAssessment,
    activities,
    rescuePlan,
    trainingGivenF2F,
    trainingGivenPhone,
    assessment,
    assignment,
    overtime,
    equipment,
    contact,
    obligation,
    instructions,
    illness,
    accredited,
  } = state

  return (
    <form>
      <FormInputField
        styles={classes.formControl}
        labelValue="Lomake 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA
          TYÖHYVINVOINTIASIAT (vuokrausyrityksen ja käyttäjäyrityksen edustajat
          täyttävät yhdessä)"
        html="vuokrausyritys-input"
        htmlValue="Vuokrausyritys"
        inputId="vuokra-input"
      />
      <FormInputField
        styles={classes.formControl}
        html="kayttajayritys-input"
        htmlValue="Käyttäjäyritys"
        inputId="kayttaja-input"
      />
      <FormInputField
        styles={classes.formControl}
        labelComponent="legend"
        labelValue="Lainsäädännöstä seuraavat työturvallisuusvastuut on käyty yhdessä läpi"
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={lawHonored} onChange={handleChange} />}
          />
        </FormGroup>
      </FormInputField>
      <FormInputField
        styles={classes.formControl}
        labelComponent="legend"
        labelValue="Työn erityispiirteet, työssä esiintyvät haitta- ja vaaratekijät sekä
        muut työturvallisuuden kannalta erityisesti huomioitavat seikat"
        html="erityispiirteet"
        inputId="erityispiirteet"
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={representative} onChange={handleChange} />
            }
            label="Vuokrayrityksen edustaja käy paikan päällä tutustumassa työolosuhteisiin ennen työntekijöiden valintaa"
          />
        </FormGroup>
      </FormInputField>
      <DatePicker
        styles={classes.Container}
        text={classes.TextField}
        id="date"
        label="Pvm."
        type="date"
        defaultValue="2021-02-04"
        inputLabelProps={true}
      />
      <DatePicker
        styles={classes.Container}
        text={classes.TextField}
        id="time"
        label="klo"
        type="time"
        defaultValue="07:30"
        inputLabelProps={true}
        inputProps={300}
      />

      <FormInputField
        styles={classes.formControl}
        labelValue="Työtehtävissä tarvittavat henkilönsuojaimet (+työvaatetus) ja kuvaus
          siitä kumpi osapuoli vastaa tarvittavien suojainten toimittamisesta
          työntekijöille ja suojainten huollosta"
        html="henkilonsuojaimet"
        inputId="henkilonsuojaimet"
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Kuvaus vuokratyöntekijöiden perehdytyksestä ja työnopastuksesta (ketkä
          perehdyttävät, kuinka kauan kestää, mitä asioita käydään läpi, mitä
          perehdytysmateriaalia vuokratyöntekijöille annetaan jne.)"
        html="perehdytys-opastus"
        inputId="perehdytys-opastus"
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Miten toimitaan työtapaturman sattuessa vuokratyöntekijälle,
          sairauspoissaolotilanteissa ja muissa vaaratilanteissa (onnettomuus ja
          poikkeustilanteet, läheltä piti -tilanteet, väkivalta- ja
          uhkatilanteet)"
        html="tapaturma-vaara"
        inputId="tapaturma-vaara"
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Miten vuokratyöntekijä ilmoittaa työtapaturmista,
          sairauspoissaoloista, muista vaaratilanteista tai muista
          turvallisuushavainnoista (ongelmat, puutteet, turvallisuusaloitteet)"
        html="tekija-ilmoittaa"
        inputId="tekija-ilmoittaa"
      />
      <ContactInformationInput
        styles={classes.formControl}
        labelValue="Työntekijä ottaa työturvallisuusasioissa yhteyttä henkilöön/henkilöihin:"
        room={true}
      />
      <br></br>
      <ContactInformationInput styles={classes.formControl} room={true} />
      <FormGroup>
        Käyttäjäyritys toimittaa vuokrayritykselle kopion (tarvittaessa):
        <FormControlLabel
          control={
            <Checkbox checked={employmentStatement} onChange={handleChange} />
          }
          label="Työterveyshuollon työpaikkaselvityksestä"
        />
        <FormControlLabel
          control={
            <Checkbox checked={riskAssessment} onChange={handleChange} />
          }
          label="Viimeisimmän riskin arvioinnin tuloksista"
        />
        <FormControlLabel
          control={<Checkbox checked={activities} onChange={handleChange} />}
          label="Työsuojelun toimintaohjelmasta"
        />
        <FormControlLabel
          control={<Checkbox checked={rescuePlan} onChange={handleChange} />}
          label="Pelastussuunnitelmasta"
        />
      </FormGroup>
      <DatePicker
        styles={classes.Container}
        text={classes.TextField}
        id="date"
        label="Pvm. mennessä"
        type="date"
        defaultValue="2021-02-04"
        inputLabelProps={true}
      />
      <ContactInformationInput
        styles={classes.formControl}
        labelValue="Vuokrayrityksen yhteyshenkilön yhteystiedot"
      />
      <ContactInformationInput
        styles={classes.formControl}
        labelValue="Vuokrayrityksen yhteyshenkilön yhteystiedot"
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Vuokrausyritys ja perehdytyksen antaja: "
        html="vuokra-perehdytys"
        inputId="vuokra-perehdytys"
      />
      <DatePicker
        styles={classes.Container}
        text={classes.TextField}
        id="date"
        label="Pvm."
        type="date"
        defaultValue="2021-02-04"
        inputLabelProps={true}
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Työntekijä:  "
        html="tyontekija"
        inputId="tyontekija"
      />
      <FormInputField
        styles={classes.formControl}
        labelValue="Yleisperehdytys annettu "
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={trainingGivenF2F} onChange={handleChange} />
          }
          label="Kasvotusten"
        />
        <FormControlLabel
          control={
            <Checkbox checked={trainingGivenPhone} onChange={handleChange} />
          }
          label="Puhelimitse"
        />
      </FormGroup>
      <FormGroup>
        Seuraavat asiat on käyty läpi ylesiperehdytyksen yhteydessä kaikille
        vuokratyöntekijöille
        <FormControlLabel
          control={<Checkbox checked={assignment} onChange={handleChange} />}
          label="Työtehtävä ja siinä vaadittu osaaminen"
        />
        <FormControlLabel
          control={<Checkbox checked={overtime} onChange={handleChange} />}
          label="Ylityökäytäntö"
        />
        <FormControlLabel
          control={<Checkbox checked={equipment} onChange={handleChange} />}
          label="Työssä tarvittavat henkilösuojaimet(+työvaatetus) ja niiden saaminen käyttöön"
        />
        <FormControlLabel
          control={<Checkbox checked={contact} onChange={handleChange} />}
          label="Kenelle työntekijä ilmoittaa havaitsemistaan vioista ja puutteista"
        />
        <FormControlLabel
          control={<Checkbox checked={assessment} onChange={handleChange} />}
          label="Olennaisimmat asiat käyttäjäyrityksen työpaikkaselvityksestä/riskien arvioinnista"
        />
      </FormGroup>
      <FormGroup>
        Seuraavat asiat on käyty läpi yleisperehdytyksen yhteydessä uusille
        vuokratyöntekijöille (jotka saavat ensimmäistä kertaa
        yleisperehdytyksen)
        <FormControlLabel
          control={<Checkbox checked={obligation} onChange={handleChange} />}
          label="Työturvallisuuslain mukaiset työntekijän velvoitteet ja oikeus pidättäytyä työstä"
        />
        <FormControlLabel
          control={<Checkbox checked={instructions} onChange={handleChange} />}
          label="Toimintaohjeet työtapaturman tai muun vaaratilanteen sattuessa vuokratyöntekijälle"
        />
        <FormControlLabel
          control={<Checkbox checked={illness} onChange={handleChange} />}
          label="Toimintaohjeet vuokratyöntekijän sairastuessa"
        />
        <FormControlLabel
          control={<Checkbox checked={accredited} onChange={handleChange} />}
          label="Vuokrayrityksen työsuojeluvaltuutettu"
        />
      </FormGroup>
    </form>
  )
}

export const FormInputField = ({
  styles,
  formLabelValue,
  labelComponent,
  labelValue, //labelValue misuse? maybe should be its own heading or smth
  html,
  htmlValue,
  inputId,
}) => {
  return (
    <FormControl component="fieldset" className={styles}>
      {formLabelValue}
      <FormLabel component={labelComponent}>{labelValue}</FormLabel>
      <InputLabel htmlFor={html}>{htmlValue}</InputLabel>
      <Input id={inputId} />
    </FormControl>
  )
}

export const ContactInformationInput = ({ styles, room, labelValue }) => {
  if (room)
    return (
      <div>
        <FormInputField
          styles={styles}
          formLabelValue={labelValue}
          html="yhteyshenkilonimi"
          htmlValue="Nimi"
          inputId="yhteyshenkilonimi"
        />
        <FormInputField
          styles={styles}
          html="yhteyshenkilopuh"
          htmlValue="Puh."
          inputId="yhteyshenkilpuh"
        />
        <FormInputField
          styles={styles}
          html="yhteyshenkiloemail"
          htmlValue="E-mail"
          inputId="yhteyshenkiloemail"
        />
        <FormInputField
          styles={styles}
          html="yhteyshenkilohuone"
          htmlValue="Työhuoneen sijainti"
          inputId="yhteyshenkilohuone"
        />
      </div>
    )
  else
    return (
      <div>
        <FormInputField
          styles={styles}
          html="yhteyshenkilonimi"
          htmlValue="Nimi"
          inputId="yhteyshenkilonimi"
        />
        <FormInputField
          styles={styles}
          html="yhteyshenkilopuh"
          htmlValue="Puh."
          inputId="yhteyshenkilpuh"
        />
        <FormInputField
          styles={styles}
          html="yhteyshenkiloemail"
          htmlValue="E-mail"
          inputId="yhteyshenkiloemail"
        />
      </div>
    )
}

export const DatePicker = ({
  styles,
  text,
  id,
  label,
  type,
  defaultValue,
  inputLabel,
  inputLabelProps,
}) => {
  return (
    <div className={styles} noValidate>
      <TextField
        id={id}
        label={label}
        type={type}
        defaultValue={defaultValue}
        className={text}
        InputLabelProps={{ shrink: inputLabelProps }}
        InputLabel={{ step: inputLabel }}
      />
    </div>
  )
}

/**
 * @exports components/AgencyForms
 */
export const AgencyForms = (props) => {
  const classes = useStyles()

  const { forms, onAdd } = props

  return (
    <div>
      <Button className={classes.clickableIcon} onClick={onAdd}>
        Uusi lomake
      </Button>
      {forms.map((form) => (
        <FormContainerExpandable key={form.id}></FormContainerExpandable>
      ))}
    </div>
  )
}
