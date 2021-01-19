import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';







const ModalExample = ({props,tech}) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
const ModalDist = () => {
  if(tech.id===0)
  {
   
    return(
        <>
    <i className="fa fa-code fa-3x"></i>
        <h6>HTML5</h6>
       
       <hr className="my-4" />
         

    <i className="fa fa-css3 fa-3x" aria-hidden="true"></i>
    <h6>Cascading Style Sheet 3</h6>

      <hr className="my-4" />
   <i className="fa fa-file-text-o fa-3x" aria-hidden="true"></i>
   <h6>JavaScript </h6>


      <hr className="my-4" />
 <i className="fa fa-bold fa-3x"></i>
   <h6>Bootstrap </h6>


      <hr className="my-4" />
 <i className="fa fa-gear fa-3x"></i>
   <h6>React JS </h6>
       <hr className="my-4" />


      
       


    </>
      );

   }

   else if(tech.id===1){
      return(
      <>
        <i className="fa fa-cube fa-3x"></i>
        <h6>Mongodb</h6>
       
       <hr className="my-4" />
         

    <i className="fa fa-chevron-circle-up fa-3x" aria-hidden="true"></i>
    <h6>Node JS</h6>

      <hr className="my-4" />
   <i className="fa fa fa-subway fa-3x" aria-hidden="true"></i>
   <h6>Express JS </h6>
       


      
   


    </>
      );
   }

   else{
    return(
    <><h4> C </h4>
          <hr className="my-4" />

    <h4> C++ </h4>
          <hr className="my-4" />

    <h4> Java </h4>
          <hr className="my-4" />

    <h4> Python </h4>
          <hr className="my-4" />

    <h4> JavaScript </h4>
          <hr className="my-4" />
</>);
   }
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}View <i class="fa fa-eye" aria-hidden="true"></i>
</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="Back">{tech.name}</ModalHeader>
        <ModalBody>
           <ModalDist />
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;