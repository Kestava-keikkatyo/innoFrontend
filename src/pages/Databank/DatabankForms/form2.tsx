import React from 'react'
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';

{/*LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS*/ }
const Form2: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div style={{ padding: '100px' }}>
            <h2 >{t('form2Header')}</h2>
            <div>
                <p >{t('form2Text1')}</p>
                <p >{t('form2Text2')}</p>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('rentalCompanyAndOrientation')}:</h4>
                        <TextField id="standard-basic" variant="standard" style={{ width: '600px' }} />
                    </Box>
                    <Box>
                        <h4>{t('date')}:</h4>
                        <TextField id="standard-basic" variant="standard" style={{ width: '200px' }} />
                    </Box>
                </Box>
                <h4>{t('form2Text3')}:</h4>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check1')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check2')}
                    </label>
                </Box>
                <Box>
                    <h4>{t('worker')}:</h4>
                    <TextField id="standard-basic" variant="standard" style={{ width: '600px' }} />
                </Box>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check3')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check4')}
                    </label>
                </Box>
                <h4>{t('form2Text4')}:</h4>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check5')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check6')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check7')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check8')}
                    </label>
                </Box>
                <h4>{t('form2Text5')}:</h4>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check9')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check10')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check11')}
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check12')}
                    </label>
                    <h4>{t('user_contact_details')}:</h4>
                    <TextField size='small' style={{ width: '500px' }}></TextField>
                    <h4>{t('user_phone_number')}:</h4>
                    <TextField size='small' style={{ width: '500px' }}></TextField>
                </Box>
                <h4>{t('form2Text6')}</h4>
                <h4>{t('form2Text7')}</h4>
                <h4>{t('form2Text8')}</h4>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('name')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                    <Box>
                        <h4>{t('user_phone_number')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('email')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                    <Box>
                        <h4>{t('userCompanyAddress')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                </Box>
                <Box>
                    <h4>{t('form2Text9')}</h4>
                    <Box sx={{ border: 1, height: '400px' }} />
                </Box>
                <h4>{t('form2Text10')}</h4>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('name')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                    <Box>
                        <h4>{t('user_phone_number')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('email')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                    <Box>
                        <h4>{t('workRoomPlace')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('registrationTime')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                    <Box>
                        <h4>{t('clock')}:</h4>
                        <TextField size='small' style={{ width: '500px' }}></TextField>
                    </Box>
                </Box>
                <h4>{t('form2Text11')}:</h4>
                <Box>
                    <label>
                        <Checkbox />
                        {t('form2Check13')}
                    </label>
                    <label>
                        <Checkbox />
                        {t('form2Check14')}
                    </label>
                </Box>
                <h4>{t('signatures')}</h4>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginRight: '30px' }}>
                        <h4>{t('orientator')}:</h4>
                        <TextField id="standard-basic" variant="standard" style={{ width: '500px' }} />
                    </Box>
                    <Box>
                        <h4 >{t('orientated')}:</h4>
                        <TextField id="standard-basic" variant="standard" style={{ width: '500px' }} />
                    </Box>
                </Box>
            </div>
        </div>
    )
}
export default Form2