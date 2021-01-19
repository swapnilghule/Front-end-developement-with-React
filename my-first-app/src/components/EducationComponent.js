import React  from 'react';
import {Row , Col, Card , CardImg, Container,Alert , CardTitle} from 'reactstrap';
import Tables from './TableComponent.js';
import Diploma from './DiplomaComponent.js';
const Education = () =>{
	return(<> 
<Container classnName="jumbotron">
<br />
      <Alert className="success">
      My Education Profile is that I'm a Computer engineering Student. I had completed my diploma in Computer Engineering with 93.00% Grade.
      Currently I'm Third year  B.E student  in Computer engineering at One of the most recognized and first computer branch college of Pune that is Pune Institute of computer Technology
      as Given Below.......!!!!!!!          
      </Alert>
      <Row classnName="row row-header jumbotron">
        <Col xs="12">   
        <br />
        <br />

         <h3>Student at Pune Institute of Computer Technology</h3>
        <p>Pune Institute of Computer Technology, (or PICT) is a private unaided engineering college located in Dhankawadi, Pune, India. Established by the Society for Computer Technology and Research, SCTR in 1983. It offers degrees in Information Technology, Computer Engineering and Electronics and Telecommunication Engineering.</p>
      <p>The PICT college is one of the best colleges in Pune. I have been visiting their yearly project competetion as a project judge and also have delivered a seminar. They have very good infrastructure and staff. Students from this college get placed to well known companies in Pune</p>
      <p>Currently, PICT is private unaided engineering college. It is affiliated with the university of Pune. And it is going to be autonomous by the year 2018. That is for batch 2018–2019 .</p>

      <a href="https://pict.edu/" className="btn btn-primary">Learn More</a>
        </Col>

        <Col xs="12">
        <br/>
        <br/>
        <Card>
         <CardImg width="0%" src="/assets/PICT.jpg" alt="College" />
       </Card>
        </Col>
      </Row>
      <hr classnName="my-4" />     
      <h3> Academics </h3>
      <Row>
      <Col> <Tables /> </Col>
      </Row>
</Container>
<hr/>
<Container classnName="jumbotron">
  <Row classnName="row row-header jumbotron">
        <Col xs="12">   
        <br />
        <br />

         <h3>Diploma in Computer Engineering at Marathwada Mitra Mandal's Polytechnic</h3>
         <hr  />
        <p>Marathwada Mitra Mandal’s Polytechnic is the brain child of Marathwada Mitra Mandal’s education society, which covers the gamut of needs from academics to morality, to turn an individual into an epitome of human being. The institute was established in 2008 with a vision to provide quality technical education and excellent training to students. The institute is approved by AICTE, New Delhi and affiliated to MSBTE, Mumbai. Being ignited by dream, we provide the state of the art facilities and innovative infrastructure...</p>

      <a href="http://mmpolytechnic.edu.in/"  class="btn btn-primary">Learn More</a>
        </Col>

        <Col xs="12">
        <br/>
        <br/>
        <Card>
         <CardImg width="0%" src="/assets/mmpoly1.jpg" alt="College" />
         <CardTitle> Marathwada Mitra mandal Polytechnic College </CardTitle>
         <hr className="my-4"/>
         <CardImg width="0%" src="/assets/2.jpg" alt="College" />
         <CardTitle> MSBTE state level paper presentation competetion 2018 </CardTitle>
                  <hr className="my-4"/>

         <CardImg width="0%" src="/assets/3.jpg" alt="College" />
                <CardTitle> Sakal paper news </CardTitle>
                  <hr className="my-4"/>

       </Card>
        </Col>
      </Row>
      <hr classnName="my-4" />  
      <br/>   
      <h3> Academics </h3>
      <Row>
      <Col> <Diploma /> </Col>
      </Row>
</Container>



		</>);

}

export default Education;