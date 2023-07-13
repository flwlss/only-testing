import React from 'react';
import './styles/styles.scss'
import Container from './components/Container';
import MySwiperContainer from './components/MySwiperContainer';

function App() {
  return (
    <>
      <Container>
        <div className='swiperContainer'>
          <MySwiperContainer />
        </div>
      </Container>
    </>
  );
}

export default App;
