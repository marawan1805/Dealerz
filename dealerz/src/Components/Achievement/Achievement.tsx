import React, { FC } from 'react';
import './Achievement.css';
import logo1 from '../../images/brand/logo 1.svg';
import logo2 from '../../images/brand/logo 2.svg';
import logo3 from '../../images/brand/logo 3.svg';
import logo4 from '../../images/brand/logo 4.svg';
import logo5 from '../../images/brand/logo 5.svg';
import logo6 from '../../images/brand/logo 6.svg';

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6
];


const Achievement: FC = () => {
  return (
    <div className="achievement">
      <h2>Our Achievement</h2>
      <div className="logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
