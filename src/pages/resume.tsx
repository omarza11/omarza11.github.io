// Resume.tsx
import React from 'react';
import StarryNight from '../components/starryNight';
import ResumeHelper, {SkillsHelper} from '../components/resumeHelper';
import './resume.css'
import { BsBriefcase } from "react-icons/bs";
import {BiBook} from 'react-icons/bi';
import {VscVscode} from 'react-icons/vsc'

const Resume = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
      <div className='container'>
        <div className='pages'>
          <div className='section-title'>
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          <div className='sub-title'>
            <h3><BsBriefcase /> Experience</h3>
          </div>
          <div className='resume-wrapper'>
            <ResumeHelper 
            date= "August 2023 - Present"
            title= "DevOps Software Engineer"
            place = "Gelber Group LLC"
            description= {["Maintain database administration and perform queries/alterations to live production data",
              "Migrated legacy applications from Ruby and Java to Python flask web application",
              "Automated manual database cleanups, simplified deployment of legacy applications",
              "Helped maintain applications written using C#, Java spring boot, Python flask, HTML, Java Script",
              "Debugging and modifying build configurations in teamcity (CI/CD) for all applications",
              "Product owner of multiple applications within first year",
              "Leading new initiatives to better improve workflow and design of core applications"]}
            />
            <ResumeHelper 
            date= "May 2022 - August 2022"
            title= "Full Stack Software Engineer Intern"
            place = "Amazon (Devices org)"
            description={["Integrated a React Native Turbo Module into a greenfield project with C++ and Typescript",
              "Composed and presented a template with instructions for future implementations of Turbo Modules, resulting in an average time saving of 50% for implementation and debugging",
              "Adhered to Agile software practices including scrum, code reviews, retrospectives utilizing JIRA"]}
            />
            <ResumeHelper 
            date= "May 2021 - August 2021"
            title= "Backend Software Engineer Intern"
            place = "Amazon (Devices org)"
            description={["Designed, implemented, and tested a crash recreation script with over 20 metrics collected",
              "Analyzed S3 cloud data to create a recommendation system for any type of crash",
              "Collaborated with 4 different teams to automate the program with API’s",
              "Influenced the other intern project to incorporate parts of this program", 
              "Combined Python, SQL, AWS, Android, and RESTful API’s into one program"]}
            />

          </div>
          <div className='sub-title'>
            <h3><BiBook /> Education</h3>
          </div>
          <div className='resume-wrapper'>
            <ResumeHelper 
            date= "August 2019 - May 2023"
            title = "Bachelor of Engineering in Computer Science"
            place = "University of Illinois Urbana-Champaign"
            description= {["Took a diverse range of CS classes such as Cyber Security, Machine Learning, Database Design, and more",
              "Served as the Vice President of Standards for InterFraternity Council repsomsible for 34 chapters"]}
            />
          </div>
          <div className='sub-title'>
            <h3><VscVscode />Technical Skills</h3>
          </div>
          <div className='resume-wrapper'>
            <div className="grouping">
              <div className='timeline'>
                  <p className='timeline-date'>8th grade - Present</p>
              </div>
              <div className='summary'>
              <SkillsHelper 
              title = "Advanced Programming Languages"
              list = "Python, Java, SQL, JavaScript, Bash"
              />
              <SkillsHelper 
              title = "Proficient Programming Languages"
              list = "Android, Linux, C, C#, C++, TypeScript, HTML, CSS, R"
              />
              <SkillsHelper 
              title = "Frameworks"
              list = "React, React Native, NodeJS, Fast API, jQuery, JUnit, Spring Boot, Flask"
              />
              <SkillsHelper 
              title = "Developer Tools"
              list = "Git, Docker, npm, GDB, JIRA, GCP, AWS (EC2, API Gateway), Kafka"
              />
              <SkillsHelper 
              title = "Databases"
              list = "Neo4J, PostgreSQL, MySQL, MongoDB, AWS (DynamoDB, S3, Athena), Tableau, MariaDB"
              />
              <SkillsHelper 
              title = "Libraries"
              list = "NumPy, Matplotlib, Pandas, SciPy, Cinder, ReactJS, JSON"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;