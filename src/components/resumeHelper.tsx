// resumeHelper.tsx
'use client';
import React from 'react';
import './resumeHelper.css'

interface PropsResume {
	date: string,
    title: string,
    place: string,
    description?: string[]
}


export default function ResumeHelper(props: PropsResume){
    const { date="2024", title = "Default Title", place = "default place", description = [""]} = props;

    const listItems = description.map((item,i) =>
        <li className='resume-list' key={i}>{item}</li>
        );

        

  return (
    <div className="grouping">
        <div className='timeline'>
            <p className='timeline-date'>{date}</p>
        </div>
        <div className='summary'>
            <h5 className='summary-title'>{title}</h5>
            <h6 className='summary-place'>{place}</h6>
            <ul className='summary-description' id="list">
                {listItems}
            </ul>  
        </div>
    </div>
  );
    
}

interface PropsSkills {
    title: string,
	list: string 
}

export function SkillsHelper(props: PropsSkills){
    const { title = "", list = ""} = props;
        

  return (
    <div>
    <h5 className='summary-title'>{title}</h5>
    <h6 className='summary-place'>{list}</h6>
    </div>
  );
    
}
