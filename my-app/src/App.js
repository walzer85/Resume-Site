import React, { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron } from 'react-bootstrap';
import { Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <div className="Body">
        <Navbar fixedTop>
          <Row>
            <header className="App-header">
            <img className="Header-image" src='https://media.licdn.com/dms/image/C4D03AQGFAEKgswK2uw/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=_86dSGvHxKpTApFQ4eIp1ogSzoflOT7iBqpk_4oMZB0'/>
              <div className="App-title">
                <div className='My-name'>Eric Walz</div>
                <div className='My-description'>Web Developer | Educator | Musician</div>
              </div>
            </header>
            </Row>
            <Row className="Menu">
              <Col xs className="Menu-link"><a href="/">Biography</a></Col>
              <Col xs className="Menu-link"><a href="#Education">Education</a></Col>
              <Col xs className="Menu-link"><a href="#Job Experience">Job Experience</a></Col>
              <Col xs className="Menu-link"><a href="#Skills">Skills</a></Col>
            </Row>
        </Navbar>
        <Jumbotron className="Biography" id="Biography">
        <p>
        I am a seasoned problem solver and communicator that specializes in outreach and development of communication with clients. 
        I focus on developing strong relationships between clients and services. 
        I have the ability to manage multiple complex projects and goals at once. 
        I excel at designing documentation to guide long term growth for a project or service. 
        My focus on communication has extended into my role at Bazaarvoice. 
        I specialize in communicating between several departments and teams at a time and clarifying any information for relevance to each team.
        </p>
      </Jumbotron>
      <Jumbotron className="Others" id="Education">
        <h1>Education</h1>
        <p>Full Stack Web Design  |  Austin Coding Academy  |  Austin, TX, 2017 - 2018</p>
        <p>BA - Music Education  |  Magna Cum Laude  |  Virginia Commonwealth University  |  Richmond, Virginia, 2004 - 2008</p>
      </Jumbotron>
      <Jumbotron className="Others" id="Job Experience">
        <h1>Job Experience</h1>
        <h4>Client Care Specialist  |  Bazaarvoice  |  Austin, TX 2017 – 2018</h4>
          <p>Served as a central point of contact for IT-related help desk issues.  Worked with about 6000 clients.  Worked about 30-50 cases a day.  Helped manage workloads for colleagues in a fast-paced work environment.  Kept up to date documentation regarding changing processes in software support.  Received regular customer satisfaction results of 9 out of 10.  Responded to calls, tickets and emails to troubleshoot reported issues.  Developed product knowledge across six major products.  Trained customers on four of Bazaarvoice’s major products.  Effectively communicated problem status updates and resolution with internal and external clients.  Provided application and system configuration support and collected relevant details to facilitate issue resolution.  Supported internal company product knowledge, ensuring that other departments were provided with quick answers to their questions.  Clarified client communication to other teams to ensure the most accurate information was being shared.</p>
        <h4>Percussion Director  |  Wallace Middle School  |  Hays Consolidated Independent School District  |  Kyle, TX 2016 – 2017</h4>
          <p>Prepared the Wallace MS Concert Band for school and extracurricular performances, including UIL.  Created comprehensive lesson plans that aligned with TEKS and covered both short and long term goals of the students and the program.  Built new curricula to bridge percussion, low brass, and double reed students from simple to more complex tasks.  Ensured students met expectations to student code of conduct guidelines.  Trained, diagnosed problems, and supported technical issues students and families in the use of SmartMusic, Charms, and Google Apps.</p>
        <h4>Head Band Director/Fine Arts Director  |  Gus Garcia Young Men’s Leadership Academy  |  Austin Independent School District  |  Austin, TX 2014 – 2016</h4>
          <p>Set long-term goals for growth of students in an organized music ensemble setting.  Created comprehensive lesson plans that align with TEKS and cover both short and long term goals of the students and the program.  Managed finances for a middle school band program, including fundraising.  Managed funds reconciliation through American Express Corporate Reconciliation Software.  Communicated between Administration and Fine Arts Department.  Coordinated scheduling for Fine Arts Department events, trips, and concerts.</p>
        <h4>Assistant Band Director  |  James E. Pearce College Preparatory Academy  |  Austin Independent School District  |  Austin, Texas, 2013 - 2014</h4>
          <p>Created comprehensive lesson plans that align with TEKS and cover both short and long term goals of the students and the program.  Communicated with other departments to ensure a connected education for students across all content areas.  Maintained regular communication with students’ families/guardians regarding grades, behavior, etc.  Organized outside of school events that allow students to experience diverse musical opportunities.</p>
        <h4>Private Instrumental Music Instructor  |  Austin Independent School District  |  Austin, Texas, 2010 - 2013</h4>
          <p>Taught private lessons on euphonium, trombone, and tuba to 6th - 12th grade students.  Kept an organized schedule to ensure each student received maximum lesson time available.  Designed detailed short-term and long-term growth plans for students.  Organized a curriculum for summer master classes that presented a clear and concise progression of skill over a short period of time.  Kept clear financial records and communicated billing far in advance to student families.  Communicated teacher expectations to students and progress of students to teachers/parents.</p>
        <h4>Instrumental Music Director  |  Allen Academy  |  Bryan, Texas, 2008 - 2010</h4>
          <p>Led Upper School Band to Superior ratings in solo and ensemble categories in the Texas Association for Private and Parochial Schools Music Competition two years in a row, 3rd place overall in 2010.  Taught students of many socio-economic and cultural backgrounds, including many different learning styles.  Taught and developed new curriculum, scope, and sequence for Intro to World Music course for 9th - 12th grades.  Organized volunteer opportunities for the students with a local cultural festival.  Helped coordinate Peer Mentoring program between the Lower School and the Upper School.  Acted as Faculty Advisor to Middle School student council.  Maintained regular communication with students’ families regarding grades, behavior, etc.  Managed a growing library of recordings and literature for grades 3 – 12.  Managed budget for music purchasing, instrument purchasing/repair, and funding for school trips.</p>
      </Jumbotron>
      <div className="Skills" id="Skills">
        <h1>Skills</h1>
        <Row>
          <Col xs>Javascript</Col>
          <Col xs>HTML</Col>
          <Col xs>CSS</Col>
        </Row>
        <Row>
          <Col xs>WordPress</Col>
          <Col xs>Billings Pro Software</Col>
          <Col xs>Customer Service</Col>
        </Row>
        <Row>
          <Col xs>Agile Processes</Col>
          <Col xs>Salesforce</Col>
          <Col xs>UNIX Commands</Col>
        </Row>
        <Row>
          <Col xs>Microsoft Office Suite</Col>
          <Col xs>Google Apps</Col>
          <Col xs>Jira</Col>
        </Row>
        <Row>
          <Col xs>Adobe Acrobat</Col>
          <Col xs>  </Col>
          <Col xs>  </Col>
        </Row>
      </div>
    </div>
    );
  }
}

export default App;
