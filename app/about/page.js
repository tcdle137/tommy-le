'use client';

import { useState, useEffect } from 'react';
import TCS from '../../public/TCS.png';
import Hockey from '../../public/Hockey.jpg';
import PandaSprite1 from '../../public/Sprites/PandaSprite1.png';
import PandaSprite2 from '../../public/Sprites/PandaSprite2.png';
import YouSprite1 from '../../public/Sprites/YouSprite1.png';
import YouSprite2 from '../../public/Sprites/YouSprite2.png';
import YouSprite3 from '../../public/Sprites/YouSprite3.png';
import YouSprite4 from '../../public/Sprites/YouSprite4.png';
import YouSprite5 from '../../public/Sprites/YouSprite5.png';
import YouSprite6 from '../../public/Sprites/YouSprite6.png';
import blackBG from '../../public/black.jpg';
import websiteLOL from '../../public/websiteLOL.jpg';
import LTU from '../../public/LTU.jpg';
import forest from '../../public/forest.jpg';
import yohji from '../../public/yohji.jpg';
import tcg from '../../public/tcg.jpg';
import strawhats from '../../public/strawhats.png';

export default function About() {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [currentSprite, setCurrentSprite] = useState(PandaSprite1.src);
  const [gameStarted, setGameStarted] = useState(false);
  const [visualNovelComplete, setVisualNovelComplete] = useState(false);
  const [currentBackgroundFrame, setCurrentBackgroundFrame] = useState(0);

  // Animate sprite swapping to simulate talking
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSprite(prev => prev === PandaSprite1.src ? PandaSprite2.src : PandaSprite1.src);
    }, 100); // Swap every 100ms

    return () => clearInterval(interval);
  }, []);

  // Animate background swapping if multiple backgrounds provided
  useEffect(() => {
    const currentScene = dialogueData[currentDialogue];
    if (currentScene.background && Array.isArray(currentScene.background) && currentScene.background.length > 1) {
      const interval = setInterval(() => {
        setCurrentBackgroundFrame(prev => (prev + 1) % currentScene.background.length);
      }, 200); // Swap every 200ms - adjust for desired speed

      return () => clearInterval(interval);
    } else {
      setCurrentBackgroundFrame(0);
    }
  }, [currentDialogue]);

  // TODO: Fill in your dialogue story here
  // Each object represents one dialogue screen
  // speaker: The character speaking (or 'Narrator' for narration)
  // text: The dialogue text
  // background: Optional - single background image OR array of images for animation
  // character: Optional - character sprite image for this scene
  const dialogueData = [
    {
      speaker: 'You',
      text: '*cough* *cough* Where am I?',
      background: blackBG.src, // TODO: Add single image: image.src OR array for animation: [image1.src, image2.src, ...]
      character: YouSprite1.src  // TODO: Add character sprite path if desired
    },
    {
      speaker: 'Spot',
      text: "Hey you! Welcome, Traveler! This is my buddy Tommy's website. If you've made it here it must mean you want to learn more about him, right?",
      background: websiteLOL.src,
      character: null
    },
    {
      speaker: 'You',
      text: 'Umm... I guess so?',
      background: forest.src,
      character: YouSprite2.src
    },
    {
      speaker: 'Spot',
      text: 'Yeah, I know you wanted to ... I could tell ;)',
      background: forest.src,
      character: null
    },
    {
      speaker: 'You',
      text: '...',
      background: forest.src,
      character: YouSprite5.src
    },
    {
      speaker: 'Spot',
      text: 'So where do I start?',
      background: forest.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: 'Back in 2022, he began his college education at Lawrence Tech in Southfield, Michigan, where he played goalie on their ice hockey team. He still plays hockey till this day!',
      background: Hockey.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: "At LTU he learned about coding and software and ... honestly I don't know, that's above my pay grade. I'm sure he has all his professional jargon and qualifications somewhere here.",
      background: LTU.src,
      character: null
    },
    {
      speaker: 'You',
      text: 'Where could I find all that info?',
      background: forest.src,
      character: YouSprite2.src
    },
    {
      speaker: 'Spot',
      text: 'You can find it after you finish talking to me. Currently I am more important!!!',
      background: forest.src,
      character: null
    },
    {
      speaker: 'You',
      text: '*wow, this is a sassy panda...*',
      background: forest.src,
      character: YouSprite5.src
    },
    {
      speaker: 'Spot',
      text: 'Anyway, Tommy has like a million different hobbies, and in my personal opinion, they are all really cool.',
      background: forest.src,
      character: null
    },
    {
      speaker: 'You',
      text: "What are they?",
      background: forest.src,
      character: YouSprite3.src
    },
    {
      speaker: 'Spot',
      text: "First and foremost, he absolutely LOVES music. He's a multi-instrumentalist, but primarily plays the electric guitar.",
      background: forest.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: 'He writes his own origianl music as well, hoping to someday record and release it. I can NOT wait!!!',
      background: TCS.src,
      character: null
    },
    {
      speaker: 'You',
      text: 'Woah, that is really cool!',
      background: forest.src,
      character: YouSprite6.src
    },
    {
      speaker: 'Spot',
      text: 'I know right!?!?!? He also recently started sewing and wants to make custom clothes inspired by his favorite fashion designer, Yohji Yamamoto.',
      background: yohji.src,
      character: null
    },
    {
      speaker: 'You',
      text: 'ooooooo, those all look so pretty!',
      background: forest.src,
      character: YouSprite2.src
    },
    {
      speaker: 'Spot',
      text: 'He is also a turbo nerd who plays and collects cards games like the One Piece TCG, Pokemon, and Magic the Gathering.',
      background: tcg.src,
      character: null
    },
    {
      speaker: 'You',
      text: 'He showers every day . . . right?',
      background: forest.src,
      character: YouSprite5.src
    },
    {
      speaker: 'Spot',
      text: 'Do not worry, he makes sure to shower everyday. Kinda rude of you to ask that, to be honest...',
      background: forest.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: 'Moving swiftly on, he is a big anime fan, having seen around 200 titles, with his favorites being One Piece, Black Lagoon, Frieren, FLCL, and Horimiya!',
      background: strawhats.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: 'And last but not least, he enjoys playing video games! His favorite by far is Minecraft, but also loves games like Rainbow 6 Siege, Overwatch, and Counter Strike.',
      background: forest.src,
      character: null
    },
    {
      speaker: 'You',
      text: "I feel like I know him pretty well now!",
      background: forest.src,
      character: YouSprite3.src
    },
    {
      speaker: 'Spot',
      text: "You may think so, but he's one of those people you have to meet in person to really get to know!",
      background: forest.src,
      character: null
    },
    {
      speaker: 'Spot',
      text: "Well that's enough out of me. You can find all his technical abilities on this page after I leave. So I'll go ahead and leave now. Thanks for talking, Traveler!",
      background: forest.src,
      character: null
    },
  ];

  const handleClick = () => {
    if (currentDialogue < dialogueData.length - 1) {
      setCurrentDialogue(currentDialogue + 1);
      setShowFullText(false);
    } else {
      // Visual novel complete, show normal page
      setVisualNovelComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentDialogue(0);
    setGameStarted(false);
    setVisualNovelComplete(false);
    setShowFullText(false);
  };

  const handleSkip = () => {
    setVisualNovelComplete(true);
  };

  const currentScene = dialogueData[currentDialogue];

  // Get current background image (handle both single image and array)
  const getCurrentBackground = () => {
    if (!currentScene.background) return null;
    if (Array.isArray(currentScene.background)) {
      return currentScene.background[currentBackgroundFrame];
    }
    return currentScene.background;
  };

  // Start screen
  if (!gameStarted) {
    return (
      <div className='container visual-novel-container'>
        <div className="vn-scene" style={{ backgroundColor: '#1c1c1c' }}>
          <div className="vn-start-screen">
            <button 
              className="vn-start-button"
              onClick={() => setGameStarted(true)}
            >
              Click to Begin
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal about page after visual novel completes
  if (visualNovelComplete) {
    return (
      <div className='container'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{textAlign: 'center', paddingTop: '1rem', color: 'white'}}>
            <button 
              className="vn-restart-button"
              onClick={handleRestart}
              style={{backgroundColor: '#1c1c1c'}}
            >
              Replay
            </button>
          </div>
          <div className='projects-header'>
            <h2 style={{fontSize: '6rem', fontFamily: 'LibreBarcode'}}>About Me</h2>
          </div>
          <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="col-12 mb-4">
              <div className="text-section" style={{
                backgroundColor: 'rgba(121, 45, 45, 0.8)',
                padding: '2rem',
                border: '2px solid #792D2D',
                borderRadius: '.25rem',
                color: '#E9E7CC',
                fontFamily: 'UnicaOne'
              }}>
                <h3 style={{fontFamily: 'Megrim', marginBottom: '1rem'}}><u>Professional</u></h3>
                <p>
                  I am a Computer Science graduate from Lawrence Technological University, in Southfield, Michigan, with a concentration in Software Engineering. During my time at LTU, I was part of the LTU Men's Ice Hockey team as a goaltender and a member of the National Society of Leadership and Success (NSLS). I maintained a GPA of 3.63 and was a recipient of the Dean's List for every semester since my freshman year. I graduated Magna Cum Laude and received the highest level Merit Scholarship (Presidential) for all 4 years of my undergraduate career at LTU.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="text-section" style={{
                backgroundColor: 'rgba(121, 45, 45, 0.8)',
                padding: '2rem',
                border: '2px solid #792D2D',
                borderRadius: '.25rem',
                color: '#E9E7CC',
                fontFamily: 'UnicaOne'
              }}>
                <h3 style={{fontFamily: 'Megrim', marginBottom: '1rem'}}><u>Personal</u></h3>
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img src={TCS.src} alt="TORENO CORNER STORE Live Photo" style={{height: "35vh", border: '2px solid #792D2D'}} />
                  </div>
                  <div className="col-md-6 text-center">
                    <img src={Hockey.src} alt="LTU Blue/White Game Photo" style={{height: "35vh", border: '2px solid #792D2D'}} />
                  </div>
                </div>
                <p style={{marginTop: '1rem'}}>
                  When I am not in class or working, I enjoy a multitude of activities. I am a multi-instrumentalist, however I mainly play the electric guitar. I write music for my band TORENO CORNER STORE with sights set on releasing a debut EP and performing live at a proper venue. If I am not playing the guitar, I love going to see live music - especially Japanese rock bands. I recently picked up sewing/tailoring, as I want to make my own clothes inspired by designers such as Yohji Yamamoto and Junya Watanabe. Outside of creating, I like watching anime, with my favorites being Black Lagoon, One Piece, and FLCL. Furthermore, I like to play the One Piece Trading Card Game and collect Pokemon cards. I also love watching and playing sports such as ice hockey, table tennis, and soccer. Last but not least, I enjoy playing video games with my friends, including games like Minecraft, Rainbow 6 Siege, Counter Strike, and Valorant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container visual-novel-container'>
      {/* TODO: Add background image if desired */}
      <div className="vn-scene" style={{ 
        backgroundImage: getCurrentBackground() ? `url(${getCurrentBackground()})` : 'none',
        backgroundColor: getCurrentBackground() ? 'transparent' : '#1c1c1c'
      }}>
        
        {/* Character sprite - uses animated panda sprite by default, or custom sprite if specified */}
        {(currentScene.character || currentScene.speaker === 'Spot') && (
          <div className="vn-character">
            <img src={currentScene.character || currentSprite} alt="Character" />
          </div>
        )}

        {/* Dialogue Box */}
        <div className="vn-dialogue-box" onClick={handleClick}>
          <div className="vn-speaker-name">
            {currentScene.speaker}
          </div>
          <div className="vn-dialogue-text">
            {currentScene.text}
          </div>
          <div className="vn-click-indicator">
            Click to continue...
          </div>
          <button 
            className="vn-skip-button"
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
          >
            Skip Dialogue
          </button>
        </div>
      </div>
    </div>
  );
}
