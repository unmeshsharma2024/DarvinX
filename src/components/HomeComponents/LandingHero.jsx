import React from 'react';
import { motion } from 'motion/react';
import { VideoBackground } from './VideoBackground';
import './LandingHero.scss';

export function LandingHero() {
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
      }
    },
    word: {
      hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
      visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.6, ease: 'easeOut' }
      }
    },
    paragraph: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 }
      }
    }
  };

  return (
    <section className="landing-hero">
      <div className="landing-hero__background">
        <VideoBackground />
      </div>

      <div className="landing-hero__container">
        <motion.div
          className="landing-hero__content"
          variants={variants.container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="landing-hero__title" aria-label="Secure at the speed of scale">
            <motion.span variants={variants.word} className="word word--primary">
              Secure
            </motion.span>
            <motion.span variants={variants.word} className="word word--muted">
              &nbsp;at&nbsp;the&nbsp;
            </motion.span>
            <motion.span variants={variants.word} className="word word--gradient-cool">
              speed
            </motion.span>
            <motion.span variants={variants.word} className="word word--muted">
              &nbsp;of&nbsp;
            </motion.span>
            <motion.span variants={variants.word} className="word word--gradient-warm">
              scale
            </motion.span>
          </h1>

          <motion.p
            className="landing-hero__description"
            variants={variants.paragraph}
          >
            Scale your SecOps with autonomous investigation, triage, and response.
            Helxon analyzes every alert, correlates signals across your stack, and acts
            in seconds—so your team can focus on what matters.
          </motion.p>
        </motion.div>
      </div>

      <div className="landing-hero__overlay" />
    </section>
  );
}
