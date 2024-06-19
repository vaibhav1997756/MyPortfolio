import React from 'react';
import bg1 from './../../assets/images/bg-image for Web Developer.jpg';

const Home = () => {
  const homeStyle = {
    backgroundImage: `url("${bg1}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    backgroundSize:'cover'
  };

  return (
    <div>
      <div style={homeStyle} className="home">
      
       <div class="mb-3 bg-none">

  <div class="card-body ">
  <div className='top-margin text-center'>
    <div className='container'>
      <div>
    <h1 class="card-title type">I am Vaibhav Singh</h1>
    </div>
    </div>
    
    <div className='container'>
      <div>
    <h5 class="card-text type">Frontend Developer</h5>
    </div>
    </div>

    <p class="card-text"><small class="text-muted"></small></p>
  </div>
</div>

       </div>
      </div>
    </div>
  );
}

export default Home;
