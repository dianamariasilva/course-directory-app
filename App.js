import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Start = () => (
  <div className="main-content home">
  </div>
)

const Home = () => (
  <div>
    <h2 className="main-content home">Home</h2>
    <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
    <p>Learn front end web development and much more! This simple directory app offers a preview of our course
      library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
      skills you need to launch a new career in front end web development.</p>
    <p>We have thousands of videos created by expert teachers on web design and front end development. Our
      library is continually refreshed with the latest on web technology so you will never fall behind.</p>
    <hr/>
  </div>
)

const About = () => (
  <div className="main-content">
    <h2>About</h2>
    <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
      visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
      topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
  </div>
)
 
const Teachers = (props) => {
   return (
    <div className="main-content">
      <h2>Teachers</h2>
      <div className="row">
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img1.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>Angie McAngular</h3>
            <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
          </div>
        </div>
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img2.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>NodeStradamus</h3>
            <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
          </div>
        </div>
          </div>
      <div className="row">
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img3.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>Geo 'Lo' Cation</h3>
            <p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
          </div>
        </div>
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img4.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>Ecma Scriptnstuff</h3>
            <p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
          </div>
        </div>
          </div>
      <div className="row">
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img5.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>Jay Query</h3>
            <p>Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
          </div>
        </div>
        <div className ="col-lg-6 col-xs-12 text-center">
          <img src="./img/img6.png" alt="" width="80%;"/>
          <div className="text-left">
            <h3>Json Babel</h3>
            <p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const HTML =  (props) => {
  let CurrentList = null;
    CurrentList = [{
      img:'./img/img1-1.png',
      title: 'How to Make a Website',
      text:'If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.'
    },{
      img:'./img/img1-2.png',
      title:'HTML Forms',
      text:'The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.'
    },{
      img:'./img/img1-3.png',
      title:'HTML Video and Audio',
      text: 'Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that dont require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.'		
    },{
      img:'./img/img1-4.png',
      title:'SVG Basics',
      text:'Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density.'
    },{
      img:'./img/img1-5.png',
      title:'Responsive Images',
      text:'Using the new source-set and sizes attributes, and the new picture element, its possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.'	
    },{
      img:'./img/img1-6.png',
      title:'Introduction to HTML and CSS',
      text:'Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.'
    }].map( (item, index) => {
      return <dt key = {index} className="row">
          <div className="col-lg-3">
            <img className="img" src={item.img} alt="" width="60%"/>
          </div>
          <div className="col-lg-9">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
         </dt>
    })
}
const CSS =  () => {
   return (
      <div> <h2> CSS </h2> </div>
   );
}
const JavaScript =  () => {
   return (
      <div> <h2> JavaScript </h2> </div>
   );
}

const Courses = () => {
   return (
    <div className="main-content courses">
      <div className="course-header group">
          <h2> Courses </h2> 
          <ul> 
             <li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
             <li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
             <li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>            
          </ul>
          <ul>
						{CurrentList}
					</ul>

          <Switch> 
            <Route exact path= "/courses" 
                   render={()=><Redirect to="/courses/html" /> } />

            <Route path = "/courses/html" component = {HTML}/>
            <Route path = "/courses/css" component = {CSS}/>
            <Route path = "/courses/javascript" component = {JavaScript}/>
          </Switch>
      </div>
    </div>
   );   
}

const NotFoundPage = (props) => {
   return (
      <div> <h2> Error 404! </h2> </div>
   );
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li> 
        <li><NavLink to="/teachers">Teachers</NavLink></li> 
        <li><NavLink to="/courses">Courses</NavLink></li> 
                
      </ul>

      <hr/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/> 
         <Route path="/teachers" component={Teachers}/> 
         <Route path="/courses" component={Courses}/> 
         
         <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;