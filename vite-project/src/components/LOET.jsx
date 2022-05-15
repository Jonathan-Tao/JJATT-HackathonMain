import { Parallax } from 'react-parallax';

import LOET from '../imgs/lifeOnEdgeText.png';
const LOET = () => (
    <Parallax 
      className = "image"
      bgImage={LOET}
    >
      <div className = 'content'>
      </div>

    </Parallax>
);

export default LOET