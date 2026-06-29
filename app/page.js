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
            transition={{ duration: 2 }}
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
              style={{ color: '#792D2D', fontFamily: 'LibreBarcode', fontSize: '3.5rem' }}
            >
              Welcome Traveler
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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            padding: '20px'
          }}>
            <div style={{
              backgroundColor: '#2C2C2C',
              padding: '40px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              width: '70%',
              textAlign: 'left',
              color: '#E9E7CC'
            }}>
              {/*make the main box and all its contents inside of it static, and resize/center it based on window size*/}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
                  <h2 style={{ marginBottom: '20px', fontFamily: 'megrim', fontSize: 'clamp(1.5rem, 4vw, 3rem)', borderBottom: '1px solid #792D2D', paddingBottom: '15px'}}>Portfolio Report <span style={{fontFamily: 'LibreBarcode'}}>Tommy Le</span></h2>
                  <p style={{ marginBottom: '20px', fontFamily: 'UnicaOne', fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'}}>My name is Tommy Le, and I am a Senior Computer Science Undergraduate at Lawrence Technological University with a concentration in Software Engineering. I graduated in May 2026 with my Bachelor's degree. I love programming, creating software, and seeing projects come to life from start to finish. You can find more about me under the About page below.</p>
                </div>
                <img src={headshot.src} alt="Profile" style={{ width: '30%', maxWidth: '400px', height: 'auto', objectFit: 'contain', borderColor: '#792D2D', borderWidth: '3.5px', borderStyle: 'solid'}} />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
