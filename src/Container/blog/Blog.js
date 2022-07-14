import React from 'react';
import Artile from '../Article/Artile';
import './Blog.css';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

function Blog() {
  return (
    <div className="gpt3__blog section_padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient_text">
          A lot is happening We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-A">
          <Artile
            imgsrc={blog01}
            Date="Sep 26,2021"
            title="GPT3 and open AI is the future.Lets us explore how is ?"
          />
        </div>
        <div className="gpt3__blog-container-B">
          <Artile
            imgsrc={blog02}
            Date="Sep 26,2021"
            title="GPT3 and open AI is the future.Lets us explore how is ?"
          />
          <Artile
            imgsrc={blog03}
            Date="Sep 26,2021"
            title="GPT3 and open AI is the future.Lets us explore how is ?"
          />
          <Artile
            imgsrc={blog04}
            Date="Sep 26,2021"
            title="GPT3 and open AI is the future.Lets us explore how is ?"
          />
          <Artile
            imgsrc={blog05}
            Date="Sep 26,2021"
            title="GPT3 and open AI is the future.Lets us explore how is ?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
