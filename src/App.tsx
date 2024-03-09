import './App.css';
import styled from 'styled-components';

function App() {
    return (
      <div className="App">
        <Card>

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


