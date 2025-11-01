import React from 'react';
import Spline from '@splinetool/react-spline';

import fireWallIcon from '../../assets/fireWall.svg';   // firewall/flame
import endpointIcon from '../../assets/endpoint.svg';   // network / gear
import adrIcon from '../../assets/adr.svg';             // globe+shield
import cloudIcon from '../../assets/cloud.svg';         // cloud chip
import wafIcon from '../../assets/waf.svg';             // alert triangle

import './UnifiedSolution.scss';

export function UnifiedSolution() {
  return (
    <section className="unified-solution">
      <div className="unified-solution__container">
        {/* Heading */}
        <header className="unified-solution__header">
          <h2 className="unified-solution__title">Unified Solution</h2>
          <p className="unified-solution__subtitle">
            Monitor everything from one centralized platform
          </p>
        </header>

        {/* Stage = watermark + cluster */}
        <div className="unified-solution__stage">
          {/* giant pale watermark behind robot */}
          <div className="unified-solution__watermark">VORXOC</div>

          {/* cluster = 3 rows of tiles wrapped around robot */}
          <div className="unified-solution__cluster">
            {/* Row 1 - TOP (Firewall | Endpoint) */}
            <div className="cluster__row cluster__row--top">
              <div className="cluster__card">
                <img src={fireWallIcon} alt="Firewall Security" />
              </div>
              <div className="cluster__card">
                <img src={endpointIcon} alt="Endpoint Management" />
              </div>
            </div>

            {/* Row 2 - MIDDLE (Globe | Robot | Cloud) */}
            <div className="cluster__row cluster__row--middle">
              <div className="cluster__card">
                <img src={adrIcon} alt="Global Protection" />
              </div>

              <div className="cluster__robot">
                <Spline scene="robotScene.splinecode" wasmPath="/" />
              </div>

              <div className="cluster__card">
                <img src={cloudIcon} alt="Cloud Intelligence" />
              </div>
            </div>

            {/* Row 3 - BOTTOM (Alert | spacer | Alert) */}
            <div className="cluster__row cluster__row--bottom">
              <div className="cluster__card">
                <img src={wafIcon} alt="Threat Detection" />
              </div>

              {/* spacer = same width as robot so the two bottom cards sit left/right of robot hips,
                 just like your reference. */}
              <div className="cluster__spacer" />

              <div className="cluster__card">
                <img src={wafIcon} alt="Incident Analysis" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
