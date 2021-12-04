import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import News_body from './Components/News/News_body';

function App() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   axios.get("http://localhost:5000/home")
  //   .then(res => {
  //     setUser(res.data.user)
  //   })
  // }, [])


  return (
    <>
      {/* <Header/> */}
      <News_body />
      {/* <Footer /> */}
    </>
  );
}

export default App;
