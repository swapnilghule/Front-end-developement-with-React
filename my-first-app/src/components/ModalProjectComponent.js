import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Card , CardImg  , CardText} from 'reactstrap';






const ModalExample1 = ({props,image}) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
const ModalDist = () => {
  if(image.id===0)
  {
   
    return(
        <>
  
       <Card >
       <CardText><strong><h4>Technology/tools/framework used:</h4> <br /><p>{image.Tech}</p></strong></CardText>
       <hr className="my-4" />
       <CardText><h4>Snapshots:</h4></CardText>
       <br />
       <CardImg width="100%" src={image.src1} alt={image.name} />
       <hr className="my-4" />
       <br />
        <CardImg width="100%" src={image.src2} alt={image.name} />

       <hr className="my-4"/>
              <CardText><h4>Description:</h4></CardText>

               <CardText><p>  {image.description}</p></CardText>



         <br />
        

        
    </Card> 
      
       


    </>
      );

   }

   else if(image.id===1){
      return(
      <>
               


      
   


    </>
      );
   }

   else{
    return(
    <>
</>);
   }
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel} View <i class="fa fa-eye" aria-hidden="true"></i>
</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="Back">{image.name}</ModalHeader>
        <ModalBody>
           <ModalDist />
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample1;