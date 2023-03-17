import React from 'react'
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';

{/*LOMAKE 4 – TOIMINNAN ARVIOINTI*/ }
const Form4: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div style={{ position: 'relative' }}>
            <h2 >{t('form4Header')}</h2>
            <div>
                <p >{t('form4Text1')}</p>
                <p >{t('form4Text2')}</p>
                <h4 >{t('form4Text3')}:</h4>
                <Box>
                   
                        <Checkbox />
                        {t('form4Check1')}
                  
                  
                        <Checkbox />
                        {t('form4Check2')}
                  
                 
                        <Checkbox />
                        {t('form4Check3')}
                
                        <Checkbox />
                        {t('form4Check4')}
                
                
                        <Checkbox />
                        {t('form4Check5')}
               
               
                        <Checkbox />
                        {t('form4Check6')}
                
            
                        <Checkbox />
                        {t('form4Check7')}
                
             
                        <Checkbox />
                        {t('form4Check8')}
              
              
                        <Checkbox />
                        {t('form4Check9')}
            
                    <h4 >{t('form4Text4')}</h4>
                    <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                    <h4 >{t('form4Text5')}</h4>
                    <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                    <h4 >{t('form4Text6')}:</h4>
                    <h4 >{t('rentalCompanyCaps')}</h4>
                    <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                    <h4 >{t('userCompanyCaps')}</h4>
                    <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                    <h4 >{t('cooperation')}</h4>
                    <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                </Box>
            </div>
        </div>
    )
}
export default Form4