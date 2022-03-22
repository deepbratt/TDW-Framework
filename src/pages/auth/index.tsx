import React, { useState } from 'react';
// @ts-ignore
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from '../login';
import Signup from '../signup';
import GlobalStyles from '../../globalStyles';

const AuthPage: React.FC = () => {
  const { containerRoot, flipCardRoot, flipCardContent } =
    GlobalStyles();
  const [isFlipped, setIsFlipped] = useState(false);

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
              <BackSide
                style={{ boxShadow: 'none' }}
                className={flipCardContent}
              >
                <Signup handleFlip={handleFlip} />
              </BackSide>
            </Flippy>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthPage;
