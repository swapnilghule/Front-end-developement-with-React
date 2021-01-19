import React, { Component } from 'react';
import { UncontrolledCarousel ,Jumbotron,  Row,Col ,Container,Card,CardImg ,Alert} from 'reactstrap';


import { CAROUSEL } from '../shared/carousel.js';


class Home extends Component {
render()
{
return (
<div>




<Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className=" font"><strong>Swapnil Ghule</strong></h1>
                <h6 >Engineering Student</h6>
                <br />
                <p>
                   This website will demostrate all the kind of work that were done by myself. 
                   My Profession is to become a Full stack Web developer. So this portfolio site is also developed by me.
                    Learning different technology always helps me out make the way easier in my career path. 
                   and that's why full stack web developement will help me out to do such thing.
                </p>
              </div>
            </div>
          </div>
</Jumbotron>

<UncontrolledCarousel className="carousel-text" items={ CAROUSEL } />

<hr className="my-4"/>
<Container>
       <blockquote className="blockquote center">
    <p>" Design is not just what it looks like and feels like. Design is how it works."   </p>
    <p class="blockquote-footer">Steve Jobs</p>
  </blockquote>
</Container>
<hr className="my-4"/>

<Container className="jumbotron">
 <Row className="padding">
        <Col xs="12">

        <Alert className="jumbotron center "> <strong>Welcome to my portfolio..... !!!! </strong></Alert>
        <br />
        <h3>Student at Pune Institute of Computer Technology</h3>
        <p>Pune Institute of Computer Technology, (or PICT) is a private unaided engineering college located in Dhankawadi, Pune, India. Established by the Society for Computer Technology and Research, SCTR in 1983. It offers degrees in Information Technology, Computer Engineering and Electronics and Telecommunication Engineering.</p>
      <p>The PICT college is one of the best colleges in Pune. I have been visiting their yearly project competetion as a project judge and also have delivered a seminar. They have very good infrastructure and staff. Students from this college get placed to well known companies in Pune</p>
      <p>Currently, PICT is private unaided engineering college. It is affiliated with the university of Pune. And it is going to be autonomous by the year 2018. That is for batch 2018–2019 .</p>
      <br />
      <a href="https://pict.edu/"  className="btn btn-primary">Learn More</a>
</Col>
        <Col xs="12">  
        <br />
        <Card>
       
      <CardImg width="100%" src="/assets/PICT.jpg" alt="College" />
     
    
   
  </Card> 
</Col>
      </Row>
</Container>











 </div>
	);
}




}





export default Home;



