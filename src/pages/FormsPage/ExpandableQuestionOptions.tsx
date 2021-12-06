import { Button, Divider, Grid, makeStyles } from '@material-ui/core';
import React, { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../actions/formActions';
import { questionTypes } from '../../types/types';
import CustomFormInput from './CustomFormInput';
import { useTranslation } from 'react-i18next';


interface Index {
  index: number
}

interface Props extends Index {
  children?: ReactNode
}

/**
 * @component
 * @desc basic part of question module.
 * @param props
 * @param {number} props.index
 * @param {ReactNode} props.children
 */
const ExpandedBodyModule: React.FC<Props> = ({ index, children }) => {
  const classes = useStyles()
  const { questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch()
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation();

 return(
  <>
  <div className={hidden ? classes.hidden: ''} style={{ width: "100%" }}>
    {children}
    <CustomFormInput
      label={t("question_sub_title")}
      placeholder={t("type_subtitle_here")}
      type="text" name="sub-title"
      value={questions[index].subTitle}
      onChange={(e: any) => dispatch(
          updateQuestion(
            { ...questions[index], subTitle: e.target.value }, index
          )
        ) }
        />
        {/* TODO: tee tähän tilanhallinta */}
    <div>
      <label>{t("is_answer_optional")}</label>
      <input type="checkbox"/>
    </div>
  </div>
  <Divider></Divider>
  <Button color="secondary" onClick={() => setHidden(!hidden)} >{t("expand")}</Button>
  </>
 )
}

const ExpandedTextModule: React.FC<Props> = ({ index, children }) => {
  const { questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  return(
    <ExpandedBodyModule index={index} >
      <CustomFormInput
        label={t("answer_min_len")}
        type="number" name="sub-title"
        value={questions[index].answerMinLength}
        onChange={(e: any) => dispatch(
            updateQuestion(
              { ...questions[index], answerMinLength: e.target.value }, index )
          )} />
      <CustomFormInput
        label={t("answer_max_len")}
          type="number" name="sub-title"
          value={questions[index].answerMaxLength}
          onChange={(e: any) => dispatch(
          updateQuestion(
            { ...questions[index], answerMaxLength: e.target.value }, index )
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
const ExpandedHorizontalRadioModule: React.FC<Index> = ({ index }) => {
  const { questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return(
    <ExpandedBodyModule index={index} >
      <CustomFormInput
        label={t("scale")}
        type="number" name="scale-val"
        value={questions[index].scale}
        onChange={(e: any) => dispatch(
            updateQuestion(
              { ...questions[index], scale: e.target.value }, index
            )
          ) }
      />
      <Grid container>
        <Grid item xs={4}>
        <CustomFormInput
          label={t("scale_option_title_left")}
          placeholder={t("left_title")}
          type="text" name="scale-left"
          value={questions[index].scaleOptionTitleLeft}
          onChange={(e: any) => dispatch(
              updateQuestion(
                { ...questions[index], scaleOptionTitleLeft: e.target.value }, index
              )
            ) }
        />
        </Grid>
        <Grid item xs={4}>
        <CustomFormInput
          label={t("scale_option_title_center")}
          placeholder={t("center_title")}
          type="text" name="scale-center"
            value={questions[index].scaleOptionTitleCenter}
            onChange={(e: any) => dispatch(
                updateQuestion(
                  { ...questions[index], scaleOptionTitleCenter: e.target.value }, index
                )
              ) }
          />
        </Grid>
        <Grid item xs={4}>
        <CustomFormInput
          label={t("scale_option_title_right")}
          placeholder={t("right_title")}
          type="text" name="scale-right"
            value={questions[index].scaleOptionTitleRight}
            onChange={(e: any) => dispatch(
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
const ExpandedRadioButtonGroupModule: React.FC<Index> = ({ index }) => <ExpandedBodyModule index={index} />

/**
 * @todo handle options
 */
const ExpandedCheckBoxModule: React.FC<Index> = ({ index }) => <ExpandedBodyModule index={index} />

const ExpandedTextAreaModule: React.FC<Index> = ({ index }) => {
  const { questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  return(
    <ExpandedTextModule index={index} >
      <CustomFormInput
      label={t("row_height")}
      type="number" name="row-height"
      value={questions[index].rowHeight}
      onChange={(e: any) => dispatch(
        updateQuestion(
          { ...questions[index], rowHeight: e.target.value }, index
        )
      ) } />
    </ExpandedTextModule>
  )
}

const ExpandableQuestionModule: React.FC<Index> = ({ index }) => {
  const { questions } = useSelector((state: any) => state.form)

  if(!questions || !questions[index]) return <></>

  switch (questions[index].questionType) {
    case questionTypes.Text:
      return <ExpandedTextModule index={index} />
    case questionTypes.Textarea:
      return <ExpandedTextAreaModule index={index} />
    case questionTypes.CheckBox:
      return <ExpandedCheckBoxModule index={index} />
    case questionTypes.CheckboxGroup:
      return <ExpandedCheckBoxModule index={index} />
    case questionTypes.RadiobuttonGroup:
      return <ExpandedRadioButtonGroupModule index={index} />
    case questionTypes.RadiobuttonGroupHorizontal:
      return <ExpandedHorizontalRadioModule index={index} />
    default:
      return <></>
  }
}
 
const useStyles = makeStyles(() => ({
  hidden: {
    display: 'none'
  },
}))

export default ExpandableQuestionModule;