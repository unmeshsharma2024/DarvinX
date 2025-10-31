import React from 'react';
import './VorxocPartners.scss';

export function VorxocPartners() {
  // Placeholder partner logos - replace with actual logos
  const partners = [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
    { id: 4, name: 'Partner 4' },
    { id: 5, name: 'Partner 5' },
  ];

  return (
    <section className="vorxoc-partners">
      <div className="vorxoc-partners__container">
        <div className="vorxoc-partners__content">
          {partners.map((partner) => (
            <div key={partner.id} className="vorxoc-partners__logo">
              <div className="vorxoc-partners__logo-placeholder">
                Logoipsum
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

