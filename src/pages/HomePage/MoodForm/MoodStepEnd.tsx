import React from 'react';
// import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch} from 'react-redux';
// import { IRootState } from '../../../utils/store';
// import { updateFeeling } from '../../../actions/feelingActions';
import { useTranslation } from 'react-i18next';
// import FileUploader from '../../../components/FileUploader';

const MoodStepEnd: React.FC = () => {

// const { data } = useSelector((state: IRootState) => state.user);
const { t } = useTranslation();

const useStyles = makeStyles({
        clickableIcon: {
        color: '#ccc',
        '&:hover': {
            color: '#444',
        },
        width: 50,
        height: 50,
        },
        flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        },
});

  // const classes = useStyles();

  // const dispatch: any = useDispatch();

  let initialClickedValues = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };
  // const [clicked, setClicked] = useState(initialClickedValues);

  // const currentFeeling: any = useSelector<IRootState>(
  //   (state) => state.feeling.currentFeeling
  // );

  // const handleChange = (event: any) => {
  //   dispatch(updateFeeling({ ...currentFeeling, note: event.target.value }));
  // };

  // const updateMood = (v: any) => {
  //   setClicked({ ...initialClickedValues, [v]: true });
  //   dispatch(updateFeeling({ ...currentFeeling, value: v }));
  // };

  return (
    <>
     <Typography variant="h4" align="center">
        {t('thank_you')}
      </Typography>
      <h2>{t('thank_you_for_feedback')}</h2>
      
      </>
  );    
  
}
export default MoodStepEnd;