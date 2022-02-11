import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeOption, removeOptionValue, updateQuestion, updateQuestionOption } from '../../actions/formActions';
import { useTranslation } from 'react-i18next'

interface Props {
  index: number
}

/**
 * @component
 * @desc In form editors page component which handles add options
 * for radiobutton group and checkbox group.
 * @param {number} props.index
 */
const AddOptionsModule: React.FC<Props> = ({ index }) => {
  const dispatch = useDispatch()
  const { questions } = useSelector((state: any) => state.form)
  const { t } = useTranslation()
  console.log("questions[index].options",questions[index].options)

  const handleDelete = (questionIndex:number, optionIndex:number) => {
    dispatch(removeOption(questionIndex, optionIndex))
    dispatch(removeOptionValue(questionIndex, optionIndex))
  }

  return (
    <>
    {questions[index].options.map((opt: string, i: number) =>
    <div key={i}>
      <input value={opt}
        onChange={({ target }) => dispatch(updateQuestionOption(target.value, index, i ))
        }/>
      <Button color="secondary"
        onClick={() => handleDelete(index, i)}>
        {t("delete_option")}
      </Button>
    </div>
    )}
    <Typography>{t("add_an_option")}</Typography>
    <Button onClick={ () =>
      dispatch(
        updateQuestion(
        { ...questions[index], options: [...questions[index].options, ""], optionValues: [...questions[index].optionValues, false] }, index )
      )} >{t("add")}</Button>
    </>
   );
}

export default AddOptionsModule;