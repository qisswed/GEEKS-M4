import logo from './logo.svg';
import './App.css';


function Title()    {

    return <h2>I am Title component</h2>
}


function Content()  {

    return(
        <Title/>
    )
}


function Footer()   {

    return (
        <Title/>
    )
}


function Header() {

    return (
        <Title/>

    )
}

function App() {
  return (
    <div className="App">
        <Content/>
        <Header/>
        <Footer/>
        <Title/>
     <h2>Hello world</h2>
    </div>
  );
}

export default App;
