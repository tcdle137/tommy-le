import React from 'react';
import TCS from './TCS.png';
import Hockey from './Hockey.jpg';

function About() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="page-heading">About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="text-section">
            <h3><u>Professional</u></h3>
            <p>
              I am a Senior Computer Science undergraduate at Lawrence Technological University, in Southfield, Michigan, with a concentration in Software Engineering. I am expected to graduate in May 2026 with my Bachelor of Science. During my time at LTU, I have been apart of the LTU Men's Ice Hockey team as a goaltender and I am a member of the National Society of Leadership and Success (NSLS). I currently maintain a GPA of 3.63, and have been a recipient of the Dean's Lists for every semester since my freshman year. I expect to graduate Magna Cum Laude and have recieved the highest level Merit Scholarship (Presedential) for all 4 years of my undergraduate career at LTU. Under the Projects page at the top right, you can find featured projects that I have worked on. 
            </p>
            <div className="row">
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>Coding Language Proficiencies:</u>
                  </li>
                  <li>
                    C++
                  </li>
                  <li>
                    C
                  </li>
                  <li>
                    Java
                  </li>
                  <li>
                    Python
                  </li>
                  <li>
                    R
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    Motorola 68k Assembly
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>Operating System Proficiencies:</u>
                  </li>
                  <li>
                    Windows
                  </li>
                  <li>
                    MacOS
                  </li>
                  <li>
                    Linux
                  </li>
                  <li>
                    iOS
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>IDE Proficiencies:</u>
                  </li>
                  <li>
                    Visual Studio
                  </li>
                  <li>
                    Visual Studio Code
                  </li>
                  <li>
                    Eclipse
                  </li>
                  <li>
                    Windsurf
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>Microsoft Office 365 Proficiencies:</u>
                  </li>
                  <li>
                    Word
                  </li>
                  <li>
                    Powerpoint
                  </li>
                  <li>
                    Excel
                  </li>
                  <li>
                    Outlook
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>Adobe Creative Cloud Proficiencies:</u>
                  </li>
                  <li>
                    Photoshop
                  </li>
                  <li>
                    Illustrator
                  </li>
                  <li>
                    Premier Pro
                  </li>
                  <li> 
                    Acrobat Pro
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="text-section" style={{textAlign: 'left'}}>
                  <li style={{textAlign: 'center', listStyleType: 'none'}}>
                    <u>Interpersonal Strengths:</u>
                  </li>
                  <li>
                    Collaboration
                  </li>
                  <li>
                    Communication
                  </li>
                  <li>
                    Adaptability
                  </li>
                  <li>
                    Detail Oriented
                  </li>
                  <li>
                    Problem Solving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="text-section">
            <h3><u>Personal</u></h3>
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={TCS} alt="TORENO CORNER STORE Live Photo" style={{height: "35vh"}} />
              </div>
              <div className="col-md-6 text-center">
                <img src={Hockey} alt="LTU Blue/White Game Photo" style={{height: "35vh"}} />
              </div>
            </div>
            <p>
               When I am not in class or working, I enjoy a multitude of activities. I am a multi-instrumentalist, however I mainly play the electric guitar. I write music for my band TORENO CORNER STORE with sights set on releasing a debut EP and performing live at a proper venue. If I am not playing the guitar, I love going to see live music - especially Japanese rock bands. I recently picked up sewing/tailoring, as I want to make my own clothes inspired by desigeners such as Yohji Yamamoto and Junya Watanabe. Outside of creating, I like watching anime, with my favorites being Black Lagoon, One Piece, and FLCL. Furthermore, I like to play the One Piece Trading Card Game, Magic the Gathering, and collect Pokemon cards. I also love watching and playing sports such as ice hockey, table tennis, and soccer. Last but not least, I enjoy playing video games with my friends, including games like Minecraft, Rainbow 6 Siege, Counter Strike, and Valorant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
