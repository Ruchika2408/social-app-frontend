import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./index.css"
import { setAdvertisements } from '../../store/advertisementSlice';
import getAdvertisements from '../../services/getAdvertisements';
import { useDispatch } from 'react-redux';
import AdvertisementModal from '../AdvertisementModal';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data,setData] = React.useState([])
  let maxSteps = data.length;
  const dispatch = useDispatch()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const fetch = async() => {
    const advertisements = await getAdvertisements();
    if(advertisements.code === "advertisementsExist"){
      dispatch(setAdvertisements(advertisements?.advertisements))
      setData(advertisements?.advertisements)
      maxSteps = advertisements?.advertisements?.length;
    }
  }
  React.useEffect(() => {
  fetch()
  }, [])

  const [openModal,setModal] = React.useState(false);

  const handleClose = () => {
    setModal(false);
  };


  return (
    <>
    <div className='addContainer'>
    <Box sx={{ maxWidth: 500, flexGrow: 1, minHeight: "450px"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{data ? data[activeStep]?.title : ""}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data && data.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 335,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgUrl}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </div>
    <div className='advertisementModalContainer'>
    <Button variant="contained" onClick={() => setModal(true)}>Create Advertisement</Button>
    <AdvertisementModal open={openModal} fetchData={fetch} handleClose={handleClose} />
    </div>
    </>
  );
}

export default SwipeableTextMobileStepper;
