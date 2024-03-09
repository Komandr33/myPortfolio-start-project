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
            <Content>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Content>
            <Button>See more</Button>
            <Button opasity >Save</Button>
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

const Content = styled.p`
  font-size: 12px;
  letter-spacing: 0;
  font-weight: 700;
  color: #ABB3BA;
  margin: 19px 0 19px 0;
`;

type ButtonPropstype = {
  opasity?: boolean
}

const Button = styled.button<ButtonPropstype>`
  box-shadow: none;
  width: 86px;
  height: 30px;
  border: 2px solid ${props => !props.opasity ? '#4E71FE' : ''};
  border-radius: 5px;
  margin-right: 12px;
  color: ${props => props.opasity ? '#4E71FE' : 'white'};
  background-color: ${props => props.opasity ? 'white' : '#4E71FE'};
`;
