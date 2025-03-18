import { useState } from 'react'
import './App.css'
import data from './data.yaml';


function Header() {
  return (
    <section id="header">
      <h1>{data.name}</h1>
      <p class="objective">{data.objective}</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <p class="phone">{data.contact.phone}</p>
      <p class="email">{data.contact.email}</p>
      <p class="city">{data.contact.city}</p>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {data.experience.map((item, jobIndex) => (
        <div key={jobIndex}>
          <h3>{item.company}</h3>
          <p class="location">{item.location}</p>
          <p class="title">{item.title}</p>
          <p class="date">{item.date}</p>
          <ul>
            {item.highlights.map((highlight, highlightIndex) => (
              <li key={highlightIndex}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {data.education.map((item, schoolIndex) => (
        <div key={schoolIndex}>
          <h3>{item.school}</h3>
          <p class="location">{item.location}</p>
          <p class="title">{item.title}</p>
          <p class="date">{item.date}</p>
        </div>
      ))}
    </section>
  );
}

function Lists() {
  return data.lists.map((list, listIndex) => (
    <section class="list" key={listIndex}>
      <h2>{list.title}</h2>
      <ul>
        {list.items.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ul>
    </section>
  ));
}

function App() {
  return (
    <>
      <div class="container">
        <div class="column">
          <Header />
        </div>
        <div class="column">
          <Contact />
        </div>
      </div>
      <div class="container">
        <div class="column">
          <Experience />
        </div>
        <div class="column">
          <Education />
          <Lists />
        </div>
      </div>
    </>
  )
}

export default App
