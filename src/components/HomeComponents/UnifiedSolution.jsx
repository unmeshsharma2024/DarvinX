import React from 'react';
import Spline from '@splinetool/react-spline';

import './UnifiedSolution.scss';

export function UnifiedSolution() {
  return (
    <section className="unified-solution">
      {/* Full-width Spline scene */}
      <div className="unified-solution__spline-wrapper">
        <Spline scene="robotScene.splinecode" wasmPath="/" />
      </div>
    </section>
  );
}
