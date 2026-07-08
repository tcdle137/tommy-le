'use client';

import p1_1 from '../../public/p1_1.png';
import p1_2 from '../../public/p1_2.png';
import p2_1 from '../../public/p2_1.png';
import p2_2 from '../../public/p2_2.png';
import p3_1 from '../../public/p3_1.png';
import p3_2 from '../../public/p3_2.png';
import { useState } from 'react';


export default function Projects() {
  const [activeImage, setActiveImage] = useState(null);
  const projectData = [
    {
      title: <a href="https://ilovemrsushistl.com" target="_blank" rel="noopener noreferrer">I Love Mr. Sushi (in Olivette, MO)</a>,
      description: 'First independent contract work. Further description coming soon...',
      image: '',
      image2: ''
    },
    {
      title: <a href="https://github.com/tcdle137/WordleBot" target="_blank" rel="noopener noreferrer">Wordle Bot</a>,
      description: 'This personal project focused on creating a bot that would play the New York Times daily game, Wordle. Through the use of writing algorithms to strategically reduce the number of possible words, I tried to minimize the number of guesses that the bot would make. During the development process, I practiced debugging techniques and considered time complexity when writing the algorithms. I ran the bot for over thousands of games and took the average, number of guesses, maximum/minimum number of guesses, win percentage, and runtime. The Wordle bot was coded in C++ and can be found on my GitHub (click on the section title to be sent to the project repository).',
      image: p1_1.src,
      image2: p1_2.src
    },
    {
      title: <a href="https://github.com/tcdle137/Java_Store" target="_blank" rel="noopener noreferrer">Interactive Store</a>,
      description: 'This project was the final project of my Java course at LTU. It aimed to create an interactive and functional UI for a theoretical store. The UI would calculate the total price of the items, apply discounts and taxes when applicable, then either display the reciebt or save it to a file. The project focused on input validation, Object-Oriented Design, and front/back-end development. The Interactive Store was coded in Java and can be found on my GitHub (click on the section title to be sent to the project repository).',
      image: p2_1.src,
      image2: p2_2.src,
    },
    {
      title: 'Global Warming Analysis',
      description: 'This project was the final project of my Data Science course at LTU. It centered around the analysis of large datasets and extracting significant value from such. The topic was emission data from the 3 main sources of greenhouse gases and global temperature. It used large, time-series data sets and a multitude of data processing techniques such as Simple Exponential Smoothing, Advanced Exponential Smoothing, variability, and correlation coefficient. ',
      image: p3_1.src,
      image2: p3_2.src
    },
  ];

  return (
      <div className="container">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className='projects-header'>
            <h1 style={{fontSize: '6rem', fontFamily: 'LibreBarcode'}}>Projects</h1>
            <p>Try clicking on the section titles and images...</p>
          </div>
          {projectData.map((project, index) => {
            return (
            <div key={index} className="projects-sections">
            <h1>{project.title}</h1>
            <div className="projects-contents" style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
              <div>
                <p>{project.description}</p>

              </div>
              <div className="projects-images">
                {project.image && (
                  <img
                    src={project.image}
                    alt="Click to enlarge"
                    className="thumbnail"
                    onClick={() => setActiveImage(project.image)}
                  />
                )}
                {project.image2 && (
                  <img
                    src={project.image2}
                    alt="Click to enlarge"
                    className="thumbnail"
                    onClick={() => setActiveImage(project.image2)}
                  />
                )}
              </div>
            </div>
          </div>
            );
          })}
        </div>
        {/* Single lightbox, rendered once, outside the loop */}
        {activeImage && (
          <div className="lightbox active" onClick={() => setActiveImage(null)}>
            <span className="close-btn" onClick={() => setActiveImage(null)}>&times;</span>
            <img src={activeImage} alt="Enlarged view" className="lightbox-img" />
          </div>
        )}
      </div>
  );
}
