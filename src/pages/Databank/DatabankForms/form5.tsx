import React from 'react'
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

{/*LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa*/ }
const Form5: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h2 >{t('form5Header')}</h2>
            <p >{t('form5Text1')}</p>
            <h3 >{t('form5Text2')}</h3>
            <Box >

            <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                    <h4>{t('serviceCompany')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                    </Box>
                    <Box style={{ marginRight: '30px' }} >
                    <h4>{t('orientator')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                    <h4>{t('worker')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                    </Box>
                    <Box style={{ marginRight: '30px' }}>
                    <h4>{t('date')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                    </Box>
                </Box>

                <h4>{t('form2Check4')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form2Check5')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form5Text3')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form5Text4')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form5Text5')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form5Text6')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
            </Box>
            <h3 >{t('form5Text7')}</h3>
            <Box >
                <h4>{t('userCompanyName')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                <h4>{t('jobAdvisor')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                <h4>{t('worker')}:</h4>
                <TextField size='small' style={{ width: '300px' }}></TextField>
                <h4>{t('form3Check1')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check2')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check3')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form5Text8')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check6')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check8')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check9')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check10')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check12')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check14')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
                <h4>{t('form3Check16')}:</h4>
                <TextField placeholder={t('textAreaPlaceholder')} multiline rows={7} fullWidth />
            </Box>
        </div>
    )
}
export default Form5