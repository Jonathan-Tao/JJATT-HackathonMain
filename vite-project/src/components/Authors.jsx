import { Parallax } from 'react-parallax';

import authors from '../imgs/authors.png';
const Authors = () => (
    <Parallax 
      className = "image"
      bgImage={authors}
    >
      <div className = 'content'>
      </div>

    </Parallax>
);

export default Authors