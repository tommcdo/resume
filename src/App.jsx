import { useState } from 'react'
import './App.css'
import data from './data.yaml';

function Render({ content }) {
  return (
    <>
      {content.split(/[<>]/).map((part, index) => {
        if (index % 2 === 0) {
          return part;
        } else {
          return (<strong>{part}</strong>);
        }
      })}
    </>
  );
}

function Summary() {
  return (
    <section id="header">
      <h1>Professional Summary</h1>
      <p class="objective"><Render content={data.summary} /></p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <p class="name"><strong>{data.name}</strong></p>
      <p class="city">{data.contact.city}</p>
      <p class="phone">{data.contact.phone}</p>
      <p class="email">{data.contact.email}</p>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h1>Experience</h1>
      {data.experience.map((job, jobIndex) =>
        job.positions.map((position, positionIndex) => (
          <div class="experience">
            <div class="employer" key={jobIndex}>
              <div class="heading">
                <h2>{job.company} <span class="location">({job.location})</span></h2>
              </div>
              <div class="position" key={positionIndex}>
                <h3>{position.title}, <span class="date">{position.date}</span></h3>
                <ul>
                  {position.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}><Render content={highlight} /></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <h1>Education</h1>
      {data.education.map((item, schoolIndex) => (
        <div class="institution" key={schoolIndex}>
          <div class="heading">
            <h2>{item.school} <span class="location">({item.location})</span></h2>
          </div>
          <div class="position" key={schoolIndex}>
            <h3>{item.title}, <span class="date">{item.date}</span></h3>
          </div>
        </div>
      ))}
    </section>
  );
}

function TechSkills() {
  return (
    <section id="techskills">
      <h1>Technical Skills</h1>
      <ul>
        {data.technicalskills.map((list, listIndex) => (
          <li>
            <strong>{list.title}: </strong>
            {list.items.map((item, itemIndex) => (
              <>{itemIndex > 0 && ", "}<Render content={item} /></>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <>
      <Contact />
      <Summary />
      <TechSkills />
      <Experience />
      <Education />
    </>
  )
}

export default App
