import React  from "react";
import { Card ,Alert,CardImg , CardText,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
import ModalExample1 from './ModalProjectComponent.js';





function RenderMenuItem({props,image})
{

 
  
return (
	<>
	


	<Card >
		

	     <CardImg width="100%"  src={image.src} alt={image.name} />
         <br />
        <CardTitle><p className="center">{image.name}</p></CardTitle>
        <CardText><p> {image.text}</p></CardText>

        
    </Card> 
    



	 
    </>
);
}


const Project = props => {
  const image = props.image.map(image => {
    return (
    <>
       
      <div className="col-12 col-md-4 " key={image.id}>
        <RenderMenuItem props={props} image={image} />
        <br />
        <ModalExample1 props={props} image={image}/>
      </div>
     </>
    );
  });


return(
<div className="container">
	<div className="row">
	   <Breadcrumb>
	       <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	       <BreadcrumbItem active>Projects</BreadcrumbItem>
	   </Breadcrumb>

            <hr className="my-4"/>  
	   <div className="col-12">
	      <h3> Projects </h3>
	      <hr className="my-4"/>
	   </div>
	  </div>
	  
	     <div className="row">
      <Alert className="info"><p> Welcome to my project section..!!!!  Click below button for more information about project. It contain details such as technology used , snapshots and description. Thank You....!! </p></Alert>
      </div>


	   <div className="row">
	   {image}

	   </div>    
	
</div>
);
}

export default Project;