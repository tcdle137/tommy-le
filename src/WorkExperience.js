import React from 'react';

function WorkExperience() {
  return (
    <section>
      <div className="container mt-5">
        <h2 className="page-heading">Work Experience</h2>
        <ul className="text-section" style={{listStyleType: 'none'}}>
          <li>
            <h3> <u> Baker Technologies Co. </u> </h3>
            <ul style={{textAlign: 'left'}}>
              <li>
                <i>September 2025 - Present</i>
              </li>
              <li>
                <i>Columbia, MO (Remote)</i>
              </li>
              <li>
                Contractor work for a range of clients. Used a mixture of skills learned in university and this position to quickly create a variety of software. Used the Windsurf IDE and Google Gemini CLI to expidite the development process while maintaining a level of human oversight and quality standards. High levels of communication and collaborations were utilizes to overcome the challenges of remote work.
              </li>
            </ul>
          </li>
          <li style={{height: '15px'}}></li>
          <li>
            <h4> <u>St. Louis Country Club</u> </h4>
            <ul style={{textAlign: 'left'}}>
              <li>
                <i>May 2022 - August 2023 (Seasonal)</i>
              </li>
              <li>
                <i>Ladue, MO</i>
              </li>
              <li>
                Worked in a high-paced food service environment, with a focus on quick and quality service. By the second summer, my manager trusted me with training the new employees. 
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;