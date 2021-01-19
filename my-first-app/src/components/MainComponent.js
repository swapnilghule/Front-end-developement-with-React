import React, { Component } from "react";
import { Switch, Route, Redirect ,withRouter } from "react-router-dom";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { TransitionGroup , CSSTransition} from 'react-transition-group';
import Tech from './TechnologyComponent';
import {connect } from 'react-redux';
import Project from './ProjectComponent';
import Education  from './EducationComponent.js';

const mapStateToProps = state =>{
	return{
	teches : state.teches,
	images : state.images
}
}


class Main extends Component{ 





	render()
	{
		const TechWithModal = ({ match }) => {
			return(
               <Tech tech={this.props.teches}/>



				);

		}



		const ProjectWithModdal = ({ match }) => {
			return(
               <Project image={this.props.images}/>



				);

		}


		return(

		<div>
			<Header />
		  <TransitionGroup>
             <CSSTransition classNames="page" timeout={300}> 
			<Switch>
			   <Route path="/home" component={Home}/>
			   <Route exact path="/technologies" component={TechWithModal} />
			   <Route exact path="/projects" component={ProjectWithModdal} />
			   <Route exact path="/education" component={Education} />


			   <Redirect to="/home" /> 
			</Switch>
		     </CSSTransition>
		  </TransitionGroup>


			<Footer />

         </div>  



			);
	}
}

export default withRouter(connect(mapStateToProps)(Main));