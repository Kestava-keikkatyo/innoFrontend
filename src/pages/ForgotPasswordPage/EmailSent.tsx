import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import '../LoginPage/forms.css';
import logo_kk from '../../assets/logo_keikkakaveri_navbar.svg'

import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    createTheme,
    ThemeProvider,
    Grid,
} from '@mui/material';

const EmailSent: React.FC<any> = () => {
    const { t } = useTranslation();

    const fontTheme = createTheme({
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={fontTheme}>
            <Grid
                container
                justifyContent="center"
                spacing={0}
                alignItems="center"
                style={{ minHeight: 'calc(100vh - 64px)' }}
            >
                <Box display="flex" justifyContent="center">
                    <Card variant="outlined" style={{ width: '320px' }}>
                        <CardContent>
                            <Typography align="center" className="marginTop2">
                                <img src={logo_kk} style={{ width: '200px' }} />
                            </Typography>
                            <Typography align="center" className="marginTop2">
                                {t('email_sent_text')}
                            </Typography>
                            <Box display="flex" flexDirection="column">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="marginTop2"
                                    onClick={() => { window.location.href = '/'; }}
                                >
                                    {t('back_to_landingpage')}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

EmailSent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default EmailSent;
