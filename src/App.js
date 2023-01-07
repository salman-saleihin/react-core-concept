import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name : "Saleihin Khan" ,
    job : "Student"
  }

  var institute1 = {
    name : "BAF Shaheen College" ,
    location : "Dhaka" ,


  }

  var institute2 = {
    location : "Kushtia" ,
    name : "Zilla School"
  }

  var style = {
    color : "red",
    backgroundColor : 'black' 
  }

  const skills = ['Front-End Developer' , 'Back-End Developer' , 'Full-Stack-Web-Development']
  const years = [2017 , 2019 , 2021] ;
  const boards = ['Jessore' , 'Dhaka'] ;
  const results = ["5.00" , "4.00" , "3.00"] ;
  const products = [
    {name: "SSC Crash Course" , price: "৳ 5,000"},
    {name: "HSC Crash Course" , price: "৳ 8,000"},
    {name: "Versity Admission Course" , price: "৳ 6,000"},
    {name: "Medical Micro Course" , price: "৳ 6,500"},
    {name: "Web Development Course" , price: "৳ 10,000"}
  ]

  // const productNames = products.map (product => product.name);
  // console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Getting Started With React</h1>
        <h3 className='' style={style}>Hello ! I am {person.name} and Professionally I'm a {person.job}</h3>
        <p style={{backgroundColor : 'Yellow' , color : 'red'}}>I've Completed my HSC from : {institute1.name + "," + institute1.location}</p>
        <p style={{backgroundColor : 'cyan' , color : 'red'}}>I've Completed my SSC from : {institute2.location + " " + institute2.name + "," + institute2.location}</p>
        {/* <p>After Setting up Emmet in VS Code my first Paragraph</p> */}

        <ul>

          {
            skills.map(skill => <li>{skill}</li> )
          }

          {/* <li>{langs[0]}</li>
          <li>{langs[1]}</li>
          <li>{langs[2]}</li> */}

        </ul>
       
        <Education name = "Junior School Certificate" year ={years[0]} board ={boards[0]} result={results[0]}></Education>
        <Education name = "Secondary School Certificate" year ={years[1]} board = {boards[0]} result={results[0]}></Education>
        <Education name = "Higher School Certificate" year ={years[2]} board ={boards[1]} result={results[0]}></Education>

          {
            products.map(product => <Products product={product}></Products>)
          }

        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products> */}
        
      </header>
    </div>
  );
}

function Products(props){
  const productStyle = {
    border: "1px solid gray" ,
    borderRadius : "5px" ,
    backgroundColor : "lightGray" ,
    color : "Black" ,
    height : "250px" ,
    width : "300px" ,
    float : "left" 
  }

  const {name , price} = props.product ;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Education(props){
  const educationStyle = {
    border : "2px solid red",
    margin : "5px" ,
    padding : "10px" ,
    width : "480px"
  }
  return <div style={educationStyle}>
    <h2>{props.name}</h2>
    <h3>Board : {props.board} || Year :{props.year}</h3>
    <h2>Result : {props.result}</h2>
  </div>
}

export default App;
