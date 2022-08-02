import React, { useEffect, useState } from 'react'
import '../css/job.css'
function Job({job,setKeywords}) {
const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
} = job

let keywords = [role, level, ...languages, ...tools]

const [icon, setIcon] = useState("")
const importSvgs = () => {
    import(`${logo}`).then((d)=> {
        setIcon(d.default)})
    
}

useEffect(()=> {
    importSvgs()
}, [logo])


  return (
    <div className={featured? 'job_container-with-border' : 'job_container'}>
        <div className="part">
       <div className="logo">
        <img src={icon} alt="" />
       </div>

       
       <div className="company_info">
        <div className="company">
            <div className="cname">{company}
            {job.new && <span className='new'>New!</span>}
            {job.featured && <span className='featured'>Featured!</span>}
        </div>
        </div>
        <div className='position'>{position}</div>
       
       <div className='other_info'>
        <span className='postedAt'>{postedAt}</span>
        <span className='star'>&nbsp;*&nbsp;</span>
        <span className="contract">{contract}</span>
        <span className='star'>&nbsp;*&nbsp;</span>
        <span className='location'>{location}</span>
       </div>
       </div>
       </div>
       <div className="company_tools">
        {keywords.map((key, id) => (<button className='button_tools' onClick={()=> setKeywords(key) } key={id}>{key}</button>))}
       </div>
       
    </div>
  )
}

export default Job