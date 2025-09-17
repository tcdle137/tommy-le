import React from 'react';
import TCS from './TCS.png';

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
              I am a Senior Computer Science undergraduate at Lawrence Technological University, in Southfield, Michigan, with a concentration in Software Engineering. I am expected to graduate in May 2026 with my Bachelor of Science. During my time at LTU, I have been apart of the LTU Men's Ice Hockey team as a goaltender and I am a member of the National Society of Leadership and Success (NSLS). I currently maintain a GPA of 3.63, and have been a recipient of the Dean's Lists for every semester since my freshman year. I expect to graduate Magna Cum Laude. I recieved the highest level Merit Scholarship (Presedential) for all 4 years of my undergraduate career at LTU. Throughout my years in university, I have developed proficiencies in coding languages such as C++, C, Java, Python, R, HTML, CSS, and Motorola 68k Assembly. I also have experience with a variety of operating systems such as Windows, MacOS, Linux, and IOS. Furthermore, I have experience working in IDEs such as Visual Studio, Visual Studio Code, Eclipse, and Windsurf. Through a variety of school-related and personal projects, I have gained proficiency in Microsoft Office 365 (Word, Powerpoint, Excel, Outlook) and Adobe Creative Cloud (Photoshop, Illustrator, Premier Pro, Acrobat Pro). Under the Projects page at the top right, you can find featured projects that I have worked on. Interpersonal strengths I possess include collaboration, communication, adaptability, and being detail oriented.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="text-section">
            <h3><u>Personal</u></h3>
            <img src={TCS} style={{height: "35vh"}} />
            <p>
               When I am not in class or working, I enjoy a multitude of activities. I am a multi-instrumentalist, however I mainly play the electric guitar. I write music for my band TORENO CORNER STORE with sights set on releasing a debut EP and performing live at a proper venue. If I am not playing the guitar, I love going to see live music - especially Japanese rock bands. I recently picked up sewing/tailoring, as I want to make my own clothes. I really love fashion and designers such as Yohji Yamamoto and Junya Watanabe. Outside of creating, I like watching anime, with my favorites being Black Lagoon, One Piece, and FLCL. Furthermore, I like to play the One Piece Trading Card Game, and collect Pokemon cards. I also love watching and playing sports such as ice hockey, table tennis, and soccer. Last but not least, I enjoy playing video games with my friends, including games like Minecraft, Rainbow 6 Siege, Counter Strike, and Valorant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;