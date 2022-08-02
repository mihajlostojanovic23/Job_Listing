import './css/app.css';
import './css/main.css'
import data from './data.json'
import Jobs from './components/Jobs.jsx'
import { useState } from 'react';
import Header from './components/Header';

function App() {

  const [filetKeywords, setfiletKeywords] = useState([])
  const addFilterKeyWords = (dat) => {
    if(!filetKeywords.includes(dat)) {
      setfiletKeywords([...filetKeywords, dat])
    }
  }

  const deleteKeyword  = (data) => {
    const newKeywords = filetKeywords.filter(key =>{ return key!= data})
    setfiletKeywords(newKeywords)}

  const clearAll = () => {
    setfiletKeywords([])
   
  }

  return (
    <div className="App">
     <div className='header'></div>
     {filetKeywords.length > 0 &&  <Header keywords={filetKeywords} clearAll={clearAll}  deleteKeyword={deleteKeyword}></Header>}
     <Jobs keywords = {filetKeywords} data={data} setKeywords={addFilterKeyWords}> </Jobs>
    </div>
  );
}

/*26:31*/

export default App;
