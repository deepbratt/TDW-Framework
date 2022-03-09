import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Login from '../login';
import Signup from '../signup';
// @ts-ignore
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toast from '../../components/Toast';
import GlobalStyles from '../../globalStyles';
import { setAlertClose } from '../../redux/reducers/responseMessageSlice';

const AuthPage: React.FC = () => {
  const { containerRoot, flipCardRoot, flipCardContent } =
  GlobalStyles();

  const [isFlipped, setIsFlipped] = useState(false);

  const { type, message, alertOpen } = useSelector(
    (state: RootState) => state.responseMessage
  );
  const dispatch = useDispatch();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container className={containerRoot}>
      <Grid container justify="center" alignContent="center">
        <Grid item xs={12} lg={10}>
          <Flippy
            isFlipped={isFlipped}
            flipOnClick={false}
            flipDirection="horizontal"
            className={flipCardRoot}
          >
            <FrontSide
              style={{ boxShadow: 'none' }}
              className={flipCardContent}
            >
              <Login handleFlip={handleFlip} />
            </FrontSide>
            <BackSide style={{ boxShadow: 'none' }} className={flipCardContent}>
              <Signup handleFlip={handleFlip} />
            </BackSide>
          </Flippy>
        </Grid>
      </Grid>
      {alertOpen && message !== '' && (
        <Toast
          open={alertOpen}
          onClose={() => dispatch(setAlertClose())}
          type={type}
          message={message}
        />
      )}
    </Container>
  );
};

export default AuthPage;
