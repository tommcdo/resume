import { useState } from 'react';
import './App.css';
import './typeface.css';
import './colors.css';
import data from './data.yaml';

function Render({ content }) {
  return (
    <>
      {content.split(/[<>]/).map((part, index) => {
        if (index % 2 === 0) {
          return part;
        } else {
          return <strong>{part}</strong>;
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

function When({ condition, children }) {
  if (condition) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}

function Title({ title, subtitle, type }) {
  return (
    <>
      <span class="title">{title}</span>
      <When condition={subtitle}>
        &nbsp;
        <span class="emdash">&mdash; </span>
        <span class={type}>{subtitle}</span>
      </When>
    </>
  );
}

function Institution({ name, city }) {
  return (
    <h2><Title title={name} subtitle={city} type="location" /></h2>
  );
}

function Credential({ title, date }) {
  return (
    <h3><Title title={title} subtitle={date} type="date" /></h3>
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
                <Institution name={job.company} city={job.location} />
              </div>
              <div class="position" key={positionIndex}>
                <Credential title={position.title} date={position.date} />
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
            <Institution name={item.school} city={item.location} />
          </div>
          <div class="position no-date" key={schoolIndex}>
            <Credential title={item.title} />
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

function CssToggle({ children }) {
  const [isStyled, toggleStyle] = useState(true);
  return (
    <>
      {/*<a id="toggle-btn" onClick={(event) => toggleStyle(!isStyled)}>CSS: {isStyled ? 'ON' : 'OFF'}</a>*/}
      <div id="resume" {...(isStyled && { class: 'styled' })}>
        {children}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <CssToggle>
        <Contact />
        <Summary />
        <TechSkills />
        <Experience />
        <Education />
      </CssToggle>
    </>
  )
}

export default App
