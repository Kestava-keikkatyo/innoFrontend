import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeQuestion, updateQuestion } from "../../actions/formActions"
import { Button, Grid } from "@material-ui/core"
import formConstants from "../../constants/formConstants"
import ExpandableQuestionModule from "./ExpandableQuestionOptions"
import AddOptionsModule from "./AddOptionsModule"
import CustomFormInput from "./CustomFormInput"
import Spacing from "../../components/Spacing"

const TypeDropDown: React.FC<{ index: number }> = ({ index }) => {
  const dispatch = useDispatch()
  const questions = useSelector(
    (state: any) => state.form.questions
  )
  
  return (
    <Spacing ph4 className="relative" style={{ width: "100%" }}>
      <label className="absolute label-type">Question type</label>
      <select
        className="customFormInput"
        value={questions[index].questionType}
        onChange={(e) =>{
          dispatch(
            updateQuestion({ ...questions[index], questionType: e.target.value }, index)
          )}
        }
      >
        {formConstants.fieldTypes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.text}
          </option>
        ))}
      </select>
    </Spacing>
  )
}

/**
 * @component
 * @desc Module for displaying and handling user input in the form generation tool
 * @param {int} props.questionIndex - Index for the question in the array in the parent state.
 * @todo Add radiobutton group, radiobutton group inline, checkbox group
 * @todo add options
 */
const QuestionModule: React.FC<{ questionIndex: number }> = ({
  questionIndex,
}) => {
  const dispatch = useDispatch()
  const questions = useSelector(
    (state: any) => state.form.questions
  )

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <CustomFormInput
            labelFontSize="large"
            label={`Question: ${questionIndex}`}
            placeholder="Your question..."
            type="text"
            name="question"
            value={questions[questionIndex].title}
            onChange={(e: any) =>
              dispatch(
                updateQuestion(
                  { ...questions[questionIndex], title: e.target.value },
                  questionIndex
                )
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Grid
            style={{ paddingTop: 4 }}
            container
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button
              style={{ color: "red" }}
              onClick={() => dispatch(removeQuestion(questionIndex))}
            >
              Remove
            </Button>
            <TypeDropDown index={questionIndex} />
          </Grid>
        </Grid>
        {questions[questionIndex].questionType?.includes("group") && (
          <AddOptionsModule index={questionIndex} />
        )}
        <ExpandableQuestionModule index={questionIndex} />
      </Grid>
    </>
  )
}

export default QuestionModule
