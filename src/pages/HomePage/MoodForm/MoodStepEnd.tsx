import React from 'react';
// import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { makeStyles, Typography  } from '@material-ui/core';
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