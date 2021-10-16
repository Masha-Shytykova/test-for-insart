import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <p className={s.text}>
          <span className={s.symbol}>&copy;</span> 2021 All rights reserved
        </p>
      </div>
    </footer>
  );
}
