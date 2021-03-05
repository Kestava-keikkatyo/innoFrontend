import { Button, Divider, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../actions/formActions';
import CustomFormInput from './CustomFormInput';

const ExpandedBodyModule = ({ index, children }) => {
  const classes = useStyles()
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()
  const [hidden, setHidden] = useState(true)

 return(
  <>
  <div className={hidden ? classes.hidden: ''} style={{ width: "100%" }}>
    {children}
    <CustomFormInput
      label="question sub title"
      placeholder="Type subtitle here..."
      type="text" name="sub-title"
      value={questions[index].subTitle}
      onChange={(e) => dispatch(
          updateQuestion(
            { ...questions[index], subTitle: e.target.value }, index
          )
        ) }
        />
        {/* TODO: tee tähän tilanhallinta */}
    <div>
      <label>is answer optional</label>
      <input type="checkbox"/>
    </div>
  </div>
  <Divider></Divider>
  <Button color="secondary" onClick={() => setHidden(!hidden)} >Expand</Button>
  </>
 )
}

const ExpandedTextModule = ({ index, children}) => {
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()
  
  return(
    <ExpandedBodyModule index={index} >
      <CustomFormInput
        label="Answer min len"
        type="number" name="sub-title"
        value={questions[index].minLen}
        onChange={(e) => dispatch(
            updateQuestion(
              { ...questions[index], minLen: e.target.value }, index )
          )} />
      <CustomFormInput
        label="Answer max len"
          type="number" name="sub-title"
          value={questions[index].maxLen}
          onChange={(e) => dispatch(
          updateQuestion(
            { ...questions[index], maxLen: e.target.value }, index )
        )} />
      {children}
    </ExpandedBodyModule>
  )
}

/**
 * 
 * @param {*} param0 
 * @todo Laita tähän tilanhallinta
 */
const ExpandedHorizontalRadioModule = ({ index }) => {
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()

  return(
    <ExpandedBodyModule index={index} >
      <CustomFormInput
        label="Scale"
        type="number" name="scale-val"
        value={questions[index].scale}
        onChange={(e) => dispatch(
            updateQuestion(
              { ...questions[index], scale: e.target.value }, index
            )
          ) }
      />
      <Grid container>
        <Grid item xs={4}>
        <CustomFormInput
          label="scale option title left"
          placeholder="Left title"
          type="text" name="scale-left"
          value={questions[index].scaleOptionTitleLeft}
          onChange={(e) => dispatch(
              updateQuestion(
                { ...questions[index], scaleOptionTitleLeft: e.target.value }, index
              )
            ) }
        />
        </Grid>
        <Grid item xs={4}>
        <CustomFormInput
          label="scale option title center"
          placeholder="Center title"
          type="text" name="scale-center"
            value={questions[index].scaleOptionTitleCenter}
            onChange={(e) => dispatch(
                updateQuestion(
                  { ...questions[index], scaleOptionTitleCenter: e.target.value }, index
                )
              ) }
          />
        </Grid>
        <Grid item xs={4}>
        <CustomFormInput
          label="scale option title right"
          placeholder="Right title"
          type="text" name="scale-right"
            value={questions[index].scaleOptionTitleRight}
            onChange={(e) => dispatch(
                updateQuestion(
                  { ...questions[index], scaleOptionTitleRight: e.target.value }, index
                )
              ) }
          />
        </Grid>
      </Grid>
    </ExpandedBodyModule>
  )
}

/**
 * @todo handle options
 */
const ExpandedRadioButtonGroupModule = ({ index }) => <ExpandedBodyModule  index={index} />

/**
 * @todo handle options
 */
const ExpandedCheckBoxModule = ({ index }) => <ExpandedBodyModule  index={index} />

const ExpandedTextAreaModule = ({ index }) => {
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()
  
  return(
    <ExpandedTextModule index={index} >
      <CustomFormInput
      label="row height"
      type="number" name="row-height"
      value={questions[index].rowHeight}
      onChange={(e) => dispatch(
        updateQuestion(
          { ...questions[index], rowHeight: e.target.value }, index
        )
      ) } />
    </ExpandedTextModule>
  )
}

const ExpandableQuestionModule = ({ index }) => {
  const { questions } = useSelector(state => state.form.currentForm)

  if(!questions || !questions[index]) return <></>

  switch (questions[index].type) {
    case 'textfield':
      return <ExpandedTextModule index={index} />
    case 'textarea':
      return <ExpandedTextAreaModule index={index} />
    case 'checkbox':
      return <ExpandedCheckBoxModule index={index} />
    case 'checkbox-group':
      return <ExpandedCheckBoxModule index={index} />
    case 'radiobutton-group':
      return <ExpandedRadioButtonGroupModule index={index} />
    case 'radiobutton-row':
      return <ExpandedHorizontalRadioModule index={index} />
    default:
      return <></>
  }
}
 
const useStyles = makeStyles((theme) => ({
  hidden: {
    display: 'none'
  },
}))

export default ExpandableQuestionModule;