import {CircularProgress, Button, Tooltip, Divider, TextField} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import Box from '@mui/material/Box';
import { FormikTextField } from '../../../../components/FormField';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../utils/store';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


const ContractOfEmploymentForm: React.FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);
    const isLoading = useSelector((state: IRootState) => state.feedback.loading);
    const classes = useStyles();

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
            <div
                style={{
                    borderLeft: '1px solid #ccc',
                    borderRight: '1px solid #ccc',
                    borderBottom: '1px solid #ccc',

                }}
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-force-tabpanel-${index}`}
                aria-labelledby={`scrollable-force-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={2}>{children}</Box>}
            </div>
        );
    }

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="primary"
                aria-label="scrollable force tabs example"
                centered
            >
                <Tab
                    label={t('form2Header')}
                    {...a11yProps(0)}
                />
                <Tab
                    label={t('form5Header')}
                    {...a11yProps(1)}
                />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0}>
                <h2 className={classes.center}>{t('form2Header')}</h2>
                <Formik
                    initialValues={{
                    }}
                    onSubmit={() => { console.log('Submit form2'); }}
                >
                    <Form>
                        <p className={classes.p}>{t('form2Text1')}</p>
                        <p className={classes.p}>{t('form2Text2')}</p>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('rentalCompanyAndOrientation')}:</h4>
                            <FormikTextField className={classes.textField} label={t('rentalCompanyAndOrientation')} name={'rentalCompany'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('date')}:</h4>
                            <FormikTextField className={classes.smallerTextField} name={'date'} type={'date'} label={''}></FormikTextField>
                        </Box>
                        <h4>{t('form2Text3')}:</h4>
                        <Box className={classes.boxColumn}>
                            <label>
                                <input type="radio" name="check" />
                                {t('form2Check1')}
                            </label>
                            <label>
                                <input type="radio" name="check" />
                                {t('form2Check2')}
                            </label>
                        </Box>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('worker')}:</h4>
                            <FormikTextField className={classes.textField} label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
                        </Box>
                        <Box className={classes.boxColumn}>
                            <label>
                                <Field type="checkbox" name="check3" />
                                {t('form2Check3')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check4" />
                                {t('form2Check4')}
                            </label>
                        </Box>
                        <h4>{t('form2Text4')}:</h4>
                        <Box className={classes.boxColumn}>
                            <label>
                                <Field type="checkbox" name="check5" />
                                {t('form2Check5')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check6" />
                                {t('form2Check6')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check7" />
                                {t('form2Check7')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check8" />
                                {t('form2Check8')}
                            </label>
                        </Box>
                        <h4>{t('form2Text5')}:</h4>
                        <Box className={classes.boxColumn}>
                            <label>
                                <Field type="checkbox" name="check9" />
                                {t('form2Check9')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check10" />
                                {t('form2Check10')}
                            </label>
                            <label>
                                <Field type="checkbox" name="check11" />
                                {t('form2Check11')}
                            </label>
                        </Box>
                        <Box className={classes.boxRow}>
                            <label className={classes.checkbox}>
                                <Field type="checkbox" name="check12" />
                                {t('form2Check12')}
                            </label>
                            <h4 className={classes.h4}>{t('user_contact_details')}:</h4>
                            <FormikTextField className={classes.textField} label={t('user_contact_details')} name={'contact1'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
                            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber1'} type={'tel'}></FormikTextField>
                        </Box>
                        <h4>{t('form2Text6')}</h4>
                        <h4>{t('form2Text7')}</h4>
                        <h4>{t('form2Text8')}</h4>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('name')}:</h4>
                            <FormikTextField className={classes.textField} label={t('name')} name={'name1'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
                            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber2'} type={'tel'}></FormikTextField>
                            <h4 className={classes.h4}>{t('email')}:</h4>
                            <FormikTextField className={classes.textField} label={t('email')} name={'email1'} type={'email'}></FormikTextField>
                        </Box>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('userCompanyAddress')}:</h4>
                            <FormikTextField className={classes.textField} label={t('userCompanyAddress')} name={'address'} type={'text'}></FormikTextField>
                        </Box>
                        <Box className={classes.boxColumn}>
                            <h4>{t('form2Text9')}</h4>
                            <TextField placeholder={t('textAreaPlaceholder')} multiline rows={4}/>
                        </Box>
                        <h4 className={classes.marginTop}>{t('form2Text10')}</h4>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('name')}:</h4>
                            <FormikTextField className={classes.textField} label={t('name')} name={'name2'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('user_phone_number')}:</h4>
                            <FormikTextField className={classes.textField} label={t('user_phone_number')} name={'phonenumber3'} type={'tel'}></FormikTextField>
                            <h4 className={classes.h4}>{t('email')}:</h4>
                            <FormikTextField className={classes.textField} label={t('email')} name={'email2'} type={'email'}></FormikTextField>
                        </Box>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('workRoomPlace')}:</h4>
                            <FormikTextField className={classes.textField} label={t('workRoomPlace')} name={'workRoomPlace'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('registrationTime')}:</h4>
                            <FormikTextField className={classes.smallerTextField} label={''} name={'registrationTime'} type={'date'}></FormikTextField>
                            <h4 className={classes.h4}>{t('clock')}:</h4>
                            <FormikTextField className={classes.smallerTextField} label={''} name={'clock'} type={'time'}></FormikTextField>
                        </Box>
                        <h4>{t('form2Text11')}:</h4>
                        <Box className={classes.boxColumn}>
                            <label>
                                <input type="radio" name="check" />
                                {t('form2Check13')}
                            </label>
                            <label>
                                <input type="radio" name="check" />
                                {t('form2Check14')}
                            </label>
                        </Box>
                        <h4 className={classes.marginTop}>{t('signatures')}</h4>
                        <Box className={classes.boxRow}>
                            <h4 className={classes.h4}>{t('orientator')}:</h4>
                            <FormikTextField className={classes.textField} label={t('orientator')} name={'orientator'} type={'text'}></FormikTextField>
                            <h4 className={classes.h4}>{t('orientated')}:</h4>
                            <FormikTextField className={classes.textField} label={t('orientated')} name={'orientated'} type={'text'}></FormikTextField>
                        </Box>
                        {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>{t('submit')}</Button>}
                    </Form>
                </Formik>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Formik
                    initialValues={{
                    }}
                    onSubmit={() => { console.log('Submit form5'); }}
                >
                    <Form>
                        <h2 className={classes.center}>{t('form5Header')}</h2>
                        <p className={classes.p}>{t('form5Text1')}</p>
                        <h3>{t('form5Text2')}</h3>
                        <Box className={classes.boxColumn}>
                            <h4>{t('serviceCompany')}:</h4>
                            <FormikTextField label={t('serviceCompany')} name={'serviceCompany'} type={'text'}></FormikTextField>
                            <h4>{t('orientator')}:</h4>
                            <FormikTextField label={t('orientator')} name={'orientator'} type={'text'}></FormikTextField>
                            <h4>{t('worker')}:</h4>
                            <FormikTextField label={t('worker')} name={'worker'} type={'text'}></FormikTextField>
                            <h4>{t('date')}:</h4>
                            <FormikTextField label={''} name={'date2'} type={'date'}></FormikTextField>
                            <h4>{t('form2Check4')}:</h4>
                            <FormikTextField label={t('form2Check4')} name={'requiredSkills'} type={'text'}></FormikTextField>
                            <h4>{t('form2Check5')}:</h4>
                            <FormikTextField label={t('form2Check5')} name={'protectiveEquipment'} type={'text'}></FormikTextField>
                            <h4>{t('form5Text3')}:</h4>
                            <FormikTextField label={t('form5Text3')} name={'safetyAndRisks'} type={'text'}></FormikTextField>
                            <h4>{t('form5Text4')}:</h4>
                            <FormikTextField label={t('form5Text4')} name={'contact1'} type={'text'}></FormikTextField>
                            <h4>{t('form5Text5')}:</h4>
                            <FormikTextField label={t('form5Text5')} name={'addressAndInstructions'} type={'text'}></FormikTextField>
                            <h4>{t('form5Text6')}:</h4>
                            <FormikTextField label={t('form5Text6')} name={'contact2'} type={'text'}></FormikTextField>
                        </Box>
                        <h3>{t('form5Text7')}</h3>
                        <Box className={classes.boxColumn}>
                            <h4>{t('userCompanyName')}:</h4>
                            <FormikTextField label={t('userCompanyName')} name={'userCompanyName'} type={'text'}></FormikTextField>
                            <h4>{t('jobAdvisor')}:</h4>
                            <FormikTextField label={t('jobAdvisor')} name={'jobAdvisor'} type={'text'}></FormikTextField>
                            <h4>{t('worker')}:</h4>
                            <FormikTextField label={t('worker')} name={'worker2'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check1')}:</h4>
                            <FormikTextField label={t('form3Check1')} name={'workDuties'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check2')}:</h4>
                            <FormikTextField label={t('form3Check2')} name={'harmfulAndDangerous'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check3')}:</h4>
                            <FormikTextField label={t('form3Check3')} name={'hoursAndBreaks'} type={'text'}></FormikTextField>
                            <h4>{t('form5Text8')}:</h4>
                            <FormikTextField label={t('form5Text8')} name={'equipment'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check6')}:</h4>
                            <FormikTextField label={t('form3Check6')} name={'accidents'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check8')}:</h4>
                            <FormikTextField label={t('form3Check8')} name={'firstAidCabinets'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check9')}:</h4>
                            <FormikTextField label={t('form3Check9')} name={'facilities'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check10')}:</h4>
                            <FormikTextField label={t('form3Check10')} name={'specials'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check12')}:</h4>
                            <FormikTextField label={t('form3Check12')} name={'informationPractices'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check14')}:</h4>
                            <FormikTextField label={t('form3Check14')} name={'licensing'} type={'text'}></FormikTextField>
                            <h4>{t('form3Check16')}:</h4>
                            <FormikTextField label={t('form3Check16')} name={'askHelp'} type={'text'}></FormikTextField>
                        </Box>
                        {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>{t('submit')}</Button>}
                    </Form>
                </Formik>
            </TabPanel>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: 8,
    },
    header: {
        marginLeft: 24,
        fontSize: theme.typography.pxToRem(38),
        fontWeight: theme.typography.fontWeightRegular,
    },
    center: {
        textAlign: 'center'
    },
    p: {
        textAlign: 'left',
        marginBottom: '50px'
    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    boxColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    h4: {
        marginRight: '5px',
        whiteSpace: 'nowrap'
    },
    textField: {
        marginRight: '10px',
        width: '100%',
        top: '5px'
    },
    smallerTextField: {
        marginRight: '10px',
        width: '40%',
        top: '5px'
    },
    marginTop: {
        marginTop: '50px'
    },
    submitButton: {
        fontSize: '20px',
        display: 'block',
        margin: '0 auto',
        marginTop: '50px'
    },
    marginBottom: {
        marginBottom: '30px'
    },
    checkbox: {
        width: '60%',
        marginTop: '21px'
    },
}));

export default ContractOfEmploymentForm;