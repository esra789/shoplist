import Carousel from 'react-bootstrap/Carousel';


function Carosell() {
  return (
    <Carousel>
      <Carousel.Item>
       <img style={{width:"1000px",height:"700px"}} src='https://lajolla.com/wp-content/uploads/2022/01/Best-Shoe-Stores-San-Diego.jpg'/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{width:"1000px",height:"700px"}} src='https://www.rei.com/dam/up_2018-02-c01_2972_running_shoes_fit.jpg?t=ea16by9lg'/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{width:"1000px",height:"700px"}} src='https://www.melbournepodiatryclinic.net.au/wp-content/uploads/2023/01/asics-choose-running-shoes-lp-article-06032022-2-300x200.jpg'/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosell