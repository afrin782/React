import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Hello from './Hello'
import H1 from './component/H1'
import HelloWithName from './HelloWithName'
import Student from './Student'
import ParentComp from './ParentComp'
import Products from './Products'
import { FunctionSample } from './FunctionSample'
import FormDemo from './FormDemo'
import Parent from './Parent'
import StateDemo from './StateDemo'
import CondRenDemo from './CondRenDemo'
import ListKeys from './ListKeys'
import EffectHook from './EffectHook'
import EffectWithDependeny from './EffectWithDependency'
import EffectFirstRender from './EffectFirstRender'
import EffectWithApi from './EffectWithApi'
import Button from './component/Button'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import UserCard from './UserCard'


function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;

{/* function App() {

  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Text Preview</h2>

      <input type="text" placeholder="Type here" value={text} onChange={(e) => setText(e.target.value)}
/>

      <p>You typed: {text}</p>
    </div>
  );
}

export default App; */}
{/*function App() {

  function handleClick() {
    alert("Welcome!");
  }

  return (
    <Layout>

      <Header title="My React Page" />

      <UserCard name="Afrin" age="22" />

      <Button
        label="Click Me"
        onClick={handleClick}
      />

      <Footer text="© 2026 My Website" />

    </Layout>
  );
}

export default App; */}


{/*function App() {
  return (
    <div>
      <UserCard name="Afrin" age="22" />
    </div>
  );
}
export default App;*/}

{/*function App() {  
  return (
      <Layout>
      <h2>Home Page</h2>
      <p>Welcome to the website.</p>
    </Layout>
     );
}
export default App;*/}


   {/* function App() {
  return (
    <div>
      <Header title="Welcome to My Website" />
      <h2>Main Content</h2>
      <Footer text="© 2026 My Website" />
    </div>
  );
}
export default App; */}


  {/* 
function App() {
  function showMessage() {
    alert("Button Clicked");
  }
  return (
    <div>
      <h1>Reusable Button</h1>
      <Button
        label="Click Here"
        onClick={showMessage}
      />
    </div>
  );
}
export default App;*/}
      {/* <HelloWithName name="Alice"/>      
      <HelloWithName name="Bob"/>   
      <HelloWithName name="Robert"/> */}
      {/* <Student name="John" age="21" gender="Male"/>   */}
      {/* <ParentComp/> */}

      {/* <Products>
        <h1>TV</h1>
        <h1>Washing Machine</h1>
        <h1>AC</h1>
      </Products> */}

      {/* <Counter/>
      <Counter/> */}
      {/* <FunctionSample/> */}
      {/* <FormDemo/> */}
      {/* <Parent>
        <h1>Welcome</h1>
        <p>This is a Paragraph</p>
        <p>This is another Paragraph</p>
      </Parent> */}

      {/* <StateDemo/> */}
      {/* <CondRenDemo/> */}
      {/* <ListKeys/> */}
      {/* <EffectHook/> */}
      {/* <EffectWithDependeny/> */}
      {/* <EffectFirstRender/> */}
      {/* <EffectWithApi/> */}
{/* export default App; */}
