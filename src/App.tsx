import './App.css';
import styled from 'styled-components';
import img1 from './images/rectangle.png';

function App() {
    return (
      <div className="App">
        <Card>
          <Images src={img1} alt={''}></Images>
          <div style={{margin: '20px'}}>
            <Title>Headline</Title>
          </div>
        </Card>

      </div>
    );
}

export default App;

const Card = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`

const Images = styled.img`
  margin: 10px;
  padding: 0;
`

const Title = styled.h1`
  font-size: 16px;
  letter-spacing: 0;
  font-weight: 700;
  color: black;
`;


