import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import NavBar from "./NavBar";
import weed from "../assets/weedStore.png"
import studentDebt from "../assets/studentDebt.png"
import BottomPage from "./BottomPage";
import conorGame from "../assets/conor-game.png"

 class CodingProjects extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				weed: weed, 
				studentDebt: studentDebt
			}
	}

	render(){
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br />
				<h2 className="art-title">Coding Projects</h2>
				<div className="coding-projects">
				
					<br />
					<div class="row">

						
						
						<div class="col">
							<div className="project-weed-store">
								<h4 class="why-us">WEED LIKE 2 HELP</h4>
								<br />
								<img src={weed} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
									I created a functional store application with 13 components 
									working together to perform all the aspects of a CRUD application. 
									 I used a combination of class and functional components with hooks consisting of 
									useState, setState, useHistory, and more.  In addition, I used React Router in order
									 to create a multipage app with simple navigation.  Finally, I used React Bootstrap, 
									React Icons, and CSS in order to design and layout my application.  
								</p>
								<Card.Link style={{color: "darkblue" }} className="projects-link" href="https://main.dgeh27c3pqdqp.amplifyapp.com/HomePage">Click here to see app!</Card.Link>
							</div>
					    </div>




						<div class="col">
							<div className="project-weed-store">
								<h4 class="why-us">Conor McGregor Game</h4>
								<br />
								<img src={conorGame} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
									I made a silly game in which you have to answer 
									questions related to Conor Mcgregor's criminal history. 
								</p>
								<Card.Link style={{color: "darkblue" }} href="https://main.d30pd7mvs9hmf5.amplifyapp.com/">Click here to see app!</Card.Link>
							</div>
					    </div>
						
						<div class="col">
							<div className="project-weed-store">
								<h4 class="why-us">Student Debt Slayers</h4>
								<br />
								<img src={studentDebt} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
								This is the beginning to an application I am working on  
								with a team. The focus of the app is dedicated to tackling student debt. 
								 I am in control of the front-end promgramming and design of the application. 
								</p>
								<Card.Link style={{color: "darkblue" }} href="https://marc-dev.dx5mnd6szzv1w.amplifyapp.com/">Click here to see app!</Card.Link>
							</div>
					    </div>
					
				</div>
			</div>
			<br/>
			<BottomPage />
		</div>
		);
	}
}

export default withRouter(CodingProjects)