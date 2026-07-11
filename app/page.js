'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import headshot from '../public/headshot.jpg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#1C1C1C',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setIsVisible(true)}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ color: '#792D2D', fontFamily: 'LibreBarcode', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Welcome Traveler...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <section>
          <div className="container">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
              <div className="profile-section">
                <div>
                  <h2 className="profile-title">Portfolio Report <span style={{fontFamily: 'LibreBarcode'}}>Tommy Le</span></h2>
                  <p>Welcome Traveler! Nice to see you made it here safely. Navigate to my <a href="/about" style={{color: '#E9E7CC'}}>About</a> page to learn even more about me, but for now here's a quick introduction.</p>
                  <p>My name is Tommy Le and I recently graduated from Lawrence Technological University, earning my BS in Computer Science with a concentration in Software Engineering. I love building programs and seeing an idea come to life!</p>
                </div>
                <img className="profile-headshot" src={headshot.src} alt="Profile"/>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
