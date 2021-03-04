import { Button, Divider, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ExpandedBodyModule = ({ children }) => {
  const classes = useStyles()
  const [hidden, setHidden] = useState(true)

 return(
  <>
  <div className={hidden ? classes.hidden: ''}>
    {children}
    <div>
      <label>question sub title</label>
      <input type="text" />
    </div>
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

const ExpandedTextModule = ({children}) => {
  return(
    <ExpandedBodyModule>
      <div>
        <label>Answer min len</label>
        <input type="number"/>
      </div>
      <div>
        <label>Answer max len</label>
        <input type="number"/>
      </div>
      {children}
    </ExpandedBodyModule>
  )
}

const ExpandedHorizontalRadioModule = () => {
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()

  return(
    <ExpandedBodyModule>
      <div>
        <label>Scale</label>
        <input type="number"/>
      </div>
      <div>
        <label>scale option title left</label>
        <input type="text"/>
      </div>
      <div>
        <label>scale option title center</label>
        <input type="text"/>
      </div>
      <div>
        <label>scale option title right</label>
        <input type="text"/>
      </div>
    </ExpandedBodyModule>
  )
}

const ExpandedRadioButtonGroupModule = () => {
  const { questions } = useSelector(state => state.form.currentForm)
  const dispatch = useDispatch()

  return(
    <ExpandedBodyModule>
      <div>
        <label>Answer min len</label>
        <input type="number"/>
      </div>
      <div>
        <label>Answer max len</label>
        <input type="number"/>
      </div>
    </ExpandedBodyModule>
  )
}

/**
 * @todo handle options
 */
const ExpandedCheckBoxModule = () => {
  return(
    <>
      <ExpandedBodyModule />
    </>
  )
}

const ExpandedTextAreaModule = () => {
  return(
    <ExpandedTextModule>
      <div>
        <label>row height</label>
        <input type="number"/>
      </div>
    </ExpandedTextModule>
  )
}

const ExpandableQuestionModule = ({ index }) => {
  const { questions } = useSelector(state => state.form.currentForm)

  if(!questions || !questions[index]) return <></>
  
  switch (questions[index].type) {
    case 'textfield':
      return <ExpandedTextModule />
    case 'textarea':
      return <ExpandedTextAreaModule />
    case 'checkbox':
      return <ExpandedCheckBoxModule />
    case 'checkbox-group':
      return <ExpandedCheckBoxModule />
    case 'radiobutton-group':
      return <ExpandedRadioButtonGroupModule />
    case 'radiobutton-group-row':
      return <ExpandedHorizontalRadioModule />
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