import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeOption, updateQuestion, updateQuestionOption } from '../../actions/formActions';

interface Props {
  index: number
}

const AddOptionsModule: React.FC<Props> = ({ index }) => {
  const dispatch = useDispatch()
  const { questions } = useSelector((state: any) => state.form.currentForm)

  return ( 
    <>
    {questions[index].options.map((opt: string, i: number) =>
    <div key={i}>
      <input value={opt}
        onChange={({ target }) => dispatch(updateQuestionOption(target.value, index, i ))
        }/>
      <Button color="secondary"
      onClick={() => dispatch(removeOption(index, i))}>
        Delete option</Button>
    </div>
    )}
    <Typography>Add an option</Typography>
    <Button onClick={ () =>
      dispatch(
        updateQuestion(
        { ...questions[index], options: [...questions[index].options, ""] }, index )
      )} >add</Button>
    </>
   );
}
 
export default AddOptionsModule;