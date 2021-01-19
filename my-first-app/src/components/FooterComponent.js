import React from "react";
import { Link } from "react-router-dom";
import { Container ,Row ,Col } from "reactstrap";

function Footer(props) {
  return (
<div>
<Container>
  <hr className="my-4" />
      <Row>
      <div className="col-12">
      <h2 className="center">Connect Me</h2>
      <br />
      </div>
        <Col xs="3" className="padding"><a href="https://www.linkedin.com/in/swapnil-ghule-ab9988199/" ><i className="fa fa-linkedin fa-4x "></i></a></Col>
        <Col xs="3" className="padding"><a href="https://www.instagram.com/swapnil.ghule_/" ><i className="fa fa-instagram fa-4x "></i></a></Col>
        <Col xs="3" className="padding"><a href="https://twitter.com/ImSwapnilG" ><i className="fa fa-twitter fa-4x "></i></a></Col>
        <Col xs="3" className="padding"><a href="https://github.com/swapnilghule" ><i className="fa fa-github fa-4x  "></i></a></Col>
      </Row>

</Container>



<Container fluid="true" >
     <hr className="my-4" />
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/technologies">Technology</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
               
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Address</h5>
            <address>
              Dhiraj Park
              <br />
              Chinchwadgaon
              <br />
              Pune,Maharashtra
              <br />
              <i className="fa fa-phone fa-lg" />: +9130014358
              <br />
             
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:ghuleswapnil91@gmail.com">ghuleswapnil91@gmail.com</a>
            </address>
          </div>
      </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p> Ghule Swapnil</p>
          </div>
        </div>
      </div>
    </div>

</Container>
</div>

  );
}

export default Footer;