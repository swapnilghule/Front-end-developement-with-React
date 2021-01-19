import React  from "react";
import { Card,Toast,ToastHeader,ToastBody ,CardImg ,CardImgOverlay,CardTitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
import ModalExample from './ModalComponent.js';





function RenderMenuItem({props,tech, onClick})
{

 
  
return (
	<>
	<Card>
	<Link to={'/technologies'}>
	    <CardImg width="100%" src={tech.src} alt={tech.name} />
	    <CardImgOverlay>
	     <CardTitle>
                  {tech.name}
                  </CardTitle>
	    </CardImgOverlay>

	  
	 </Link>
	</Card> 




	 
    </>
);
}


const Tech = props => {
  const tech = props.tech.map(tech => {
    return (
    <>
       
      <div className="col-12 col-md-4 " key={tech.id}>
        <RenderMenuItem props={props} tech={tech} onClick={props.onClick} />
        <ModalExample props={props} tech={tech}/>
        <br />
        <br />
      </div>
     </>
    );
  });


return(
<div className="container">
	<div className="row">
	   <Breadcrumb>
	       <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	       <BreadcrumbItem active>Technologies</BreadcrumbItem>
	   </Breadcrumb>



	   <div className="col-12">
	      <h3> Technologies </h3>
	      <hr />
	   </div>
	  </div>
	  
	     <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
             "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."
            <p> -- Bill Gates </p>

          </ToastHeader>
          <ToastBody>
             <p> This page demostrate my all front-end and back-end technologies, framework or any kind of tool that i'm familiar with along with
            computer high level programming languages. since i'm developer and developing new things always makes me satisfied and this technologies help
            me to acheive those satisfaction.</p>
            <p>check out it below.......!!!!!</p>

          </ToastBody>
        </Toast>
      </div>

      <hr className="my-4" />
	   <div className="row">
	   {tech}

	   </div>    
	
</div>
);
}

export default Tech;