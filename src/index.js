import React from  'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './images/logo.jpg';
import './style.css';


//(1)create a nested header element using react.create element(h1,h2,h3indide a dive with class "title"
const header = React.createElement(
    "div",{className: "Title", key:"Title"},                       //div is the parent
    [React.createElement("h1",{key :"h1"},"This is created using h1 tag"),       //key is used to unique identify the element inside a array
     React.createElement("h2",{key :"h2"},"This is  created using h2 tag"),       //{}->we add attributes inside this className or id 
     React.createElement("h3",{key :"h3"},"This is  created using h3 tag"),        //[]-->we created a array and written react element inside a array 
    ]);                                                              //[]--> elements inside this array are children for parent div
  console.log(header)
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
  return <h2 style={{ color: "red" }}>This is title element</h2>;        // This is Title Component
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
//bg color -#ffd89d


const Navbar = () => {
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
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="19" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<Navbar/>, document.getElementById("root"));



