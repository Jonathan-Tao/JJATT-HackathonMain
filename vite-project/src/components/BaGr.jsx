import { Parallax } from 'react-parallax';

import bakgrd from '../imgs/bakgrd.png';
const BaGr = () => (
    <Parallax 
      className = "image"
      bgImage={bakgrd}
    >
      <div className = 'content'>
      </div>

    </Parallax>
);

export default BaGr