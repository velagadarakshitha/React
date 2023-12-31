import React from  'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './images/logo.jpg';
import './style.css';


//(1)create a nested header element using react.create element(h1,h2,h3indide a dive with class "title"
const header = React.createElement(
    "div",{className: "Title", key:"Title"},                      
    [React.createElement("h1",{key :"h1"},"This is created using h1 tag"),      
     React.createElement("h2",{key :"h2"},"This is  created using h2 tag"),      
     React.createElement("h3",{key :"h3"},"This is  created using h3 tag"),        
    ]);                                                             
//ReactDOM.render(header,document.getElementById("root"))


//(2)create the same element using jsx
const header1 = (
  <div className='Title'>
    <h1>This is using jsx</h1>
    <h2>This is using jsx</h2>
    <h3>This is using jsx</h3>
  </div>
);

//ReactDOM.render(header1,document.getElementById("root"))

//(3)create a functional component of the same with jsx
const Header2 = () => {
    return (
        <div className='Title'>
            <h1>"This is  functional component-1"</h1>
            <h2>"This is  functional component-2"</h2>
            <h3>"This is  functional component-3"</h3>
        </div>
    )
};

//ReactDOM.render(<Header2/>,document.getElementById("root"))


//(4)pass attributes into the tag in jsx
const header3 = (
    <div className='Title'>
        <h1 style={{color:"red"}}>"This is Heading-1  - -jsx "</h1>
        <h2 style={{color:"blue"}}>"This is Heading-2  - -jsx"</h2>
        <h3 style={{color:"green"}}>"This is Heading-3  - -jsx"</h3>
    </div>
)
//ReactDOM.render(header3,document.getElementById("root"))


//(5)composition of component (App a component inside another)
const Header4 = () => {
    return(
        <h1>"  component inside another component"</h1>,
        <Header2/>
    )
}   
//ReactDOM.render(<Header2/>,document.getElementById("root"))

//(6){<title component>},{<title component/>},{{<title component>}vs{</title component>}},

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;        // This is Title Component
}; 

const Header = () => {
  return (
    <div className="Title" key="title">
      <TitleElement/>
      <TitleElement></TitleElement>
      </div>
  );
};
//ReactDOM.render(<Header/>,document.getElementById("root"))

//navbar with icon search and logo
const Header = () => {
    return (
      <>
        <div className='Header'>
          <div className='logo'>
          <img src={image} alt="Logo" height="77px" width= "77px" />
          </div>
          <div className='text'>
            <input id='search_type' type='text' placeholder='Search Any Thing'></input>
            <button id='button'>Search</button>
          </div>
          <div className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#59f221" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </div>
        </div>
      </>
    );
  };
  
  ReactDOM.render(<Header/>, document.getElementById("root"));
