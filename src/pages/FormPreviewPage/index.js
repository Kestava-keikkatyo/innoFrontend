import { Container } from '@material-ui/core';
import React from 'react';
import FormCheckBox from '../../components/FormComponents/FormCheckBox';
import FormCheckBoxGroup from '../../components/FormComponents/FormCheckBoxGroup';
import FormComment from '../../components/FormComponents/FormComment';
// import { useSelector } from 'react-redux';
import FormHeader from '../../components/FormComponents/FormHeader';
import FormRadio from '../../components/FormComponents/FormRadio';
import FormRadioGroup from '../../components/FormComponents/FormRadioGroup';
import FormText from '../../components/FormComponents/FormText';
import FormTextArea from '../../components/FormComponents/FormTextArea';
import FormPreviewHeader from './FormPreviewHeader';

const FormPreviewPage = ({ _ }) => {
  // const { currentForm } = useSelector(state => state.form)

  return ( 
    <Container>
      <FormPreviewHeader />
      <div className="create-form" >
        <FormHeader />
        <FormText />
        <FormTextArea />
        <FormCheckBox />
        <FormCheckBoxGroup />
        <FormRadio />
        <FormRadioGroup />
        <FormComment />
      </div>
    </Container>
  );
}
 
export default FormPreviewPage;