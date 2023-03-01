import { Container, Link } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import linkout from '../assets/icons/linkkiulos.svg';
import email from '../assets/icons/email.svg';

const Footer: React.FC<any> = ({ }) => {

    const { t } = useTranslation()
    return (
      <div className="footer">
        <div style={{ width: "60%", margin: "auto" }}  >
          <h1 style={{textAlign: "left", marginTop: "-50px"}}>KEIKKAKAVERI</h1>
          <Container className="footer-container">
            <div className="row">
              {t('keikkakaveri_summary')}
            </div>
            <div className="row">
              <div>{t('databank')}</div>
              <div>{t('stages_of_work')}</div>
              <div>{t('work_responsibilities')}</div>
              <div>{t('instructions')}</div>
              <div>{t('good_practices')}</div>
              <div>{t('rwm_forms')}</div>
              <div>
                <img style={{ height: "20px", width: "20px" }} src={email} alt="keikkakaveri logo" />{' '}info(at)keikkakaveri.fi
              </div>
            </div>
            <div className="row">
              <div>
                <Link>
                  <img style={{ height: "20px", width: "20px" }} src={linkout} alt="keikkakaveri logo" />{''}
                </Link>
                  {t('sustainable_work')}
              </div>
              <div>
                <Link>
                  <img style={{ height: "20px", width: "20px" }} src={linkout} alt="keikkakaveri logo" />{''}
                </Link>
                  {t('ttk')}
              </div>
              <div>Saavutettavuusseloste</div>
              <div>Tietoturvaseloste</div>
            </div>
          </Container>
        </div>
      </div>
    );
};
export default Footer;
