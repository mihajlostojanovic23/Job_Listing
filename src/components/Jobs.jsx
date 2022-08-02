import React, { useEffect, useState } from 'react'
import Job from './Job'
import '../css/jobs.css'

function Jobs(props) {
    console.log(props.data)
const [filetKeywords, setFiletKeywords] = useState([])
   
const modified = () => {
     if(props.keywords.length>0) {
      const newData = filetKeywords.filter(d => {
        return props.keywords.every(key => {
          return ( d.level == key || d.languages.includes(key) || d.tools.includes(key)|| d.role == key )
        })
      })
      setFiletKeywords(newData)
     }
     else {
      setFiletKeywords(props.data)
     }
    } 

    useEffect(()=> {
      modified()
    },[props.keywords])
  return (
    <div className='jobs'>
        {filetKeywords.map(job => {
         return <Job key={job.id} setKeywords={props.setKeywords} job={job}></Job>}
         )
         }
         </div>
  )
}

export default Jobs