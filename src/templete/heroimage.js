// import Button from 'react-bootstrap/Button';

function HeroSection() {
  return (
    <div class="block">
      <h1 className="size">
        Keep learning <br></br> and boost your <br></br>knowledge
        <p className="tex">
          Looking to add new skills? We're a leading destination for online{" "}
          <br></br>education and world-class education anywhere. We give you
          many <br></br> courses and the freedom to learn what you want.Start a
          free course
        </p>
        <button className="button">Start a free course</button>
       
      </h1>
      <br></br>
      

      <div>
      <img className="img" src="./img/hero-img.png" alt="hiro img" />
      {/* <Button variant="primary" size="lg" className='button'>
          Large button
        </Button>{' '} */}
      </div>
    </div>
  );
}

export default HeroSection;
