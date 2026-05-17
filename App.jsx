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
import { useReducer, useRef, useEffect } from "react";
import TextInput from "./TextInput";
import { useCallback, useMemo } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch users
  const fetchUsers = useCallback(() => {

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then((res) => res.json())
      .then((data) => {

        // Filter users
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );

        setUsers(filtered);
      });

    // Cleanup
    return () => {
      controller.abort();
      console.log("Fetch aborted");
    };

  }, [search]);

  // useEffect
  useEffect(() => {

    const cleanup = fetchUsers();

    return cleanup;

  }, [fetchUsers]);

  // Expensive value using useMemo
  const totalUsers = useMemo(() => {
    console.log("Calculating...");
    return users.length;
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>

      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchUsers}>
        Refresh
      </button>

      <h3>Total Users: {totalUsers}</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;

{/* function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState(null);

  // Validation
  const isValid =
    name !== "" &&
    email.includes("@") &&
    password !== "";

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    setData({
      name,
      email,
      password
    });
  }

  // Clear
  function handleClear() {
    setName("");
    setEmail("");
    setPassword("");
    setData(null);
  }

  return (
    <div>

      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>

        <TextInput
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>

      </form>

      <hr />

      <h2>Preview</h2>

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      )}

    </div>
  );
}

export default App; */}

{/*function App() {

  const productsData = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Watch" },
    { id: 4, name: "Headset" }
  ];

  const [search, setSearch] = useState("");

  // Filter products
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Products List</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product"
            >
              {product.name}
            </div>
          ))

        ) : (

          <p>No products available</p>

        )
      }

    </div>
  );
}

export default App;*/}


{/*function App() {

  // Load counter from localStorage
  const savedCount = localStorage.getItem("count");

  const [count, dispatch] = useReducer(
    reducer,
    savedCount ? Number(savedCount) : 0
  );

  // Save counter to localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // useRef
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  // Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

  return (
    <div style={{ padding: "20px" }}>

      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

    </div>
  );
}

export default App; */}

{/*function App() {

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

export default App;*/}

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
