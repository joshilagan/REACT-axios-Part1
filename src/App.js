import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState()

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setPredictedAge(res.data)
    })
  }

  return (
    <div className="App">
      <input 
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Predicted count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
