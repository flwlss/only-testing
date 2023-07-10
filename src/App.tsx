import React from 'react';
import './styles/styles.scss'
import Container from './components/Container';
import MySwiper from './components/MySwiper';

function App() {
  return (
    <>
      <Container>
        <div className='swiperContainer'>
          <MySwiper />
        </div>
      </Container>
    </>
  );
}

export default App;
