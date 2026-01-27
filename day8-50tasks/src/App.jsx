// src/App.jsx
import React, { useState, useEffect,useRef } from 'react';
import './App.css'; // You can use this for the sidebar styling later

export default function App() {
  // Navigation State to switch between tasks
  const [activeTask, setActiveTask] = useState(1);

  // State for Tasks 4 & 5
  const [count, setCount] = useState(0);

  // Task 2: Functional Component (Defined inside the same file)
  const MyWelcomeComponent = () => (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <p>Task 2: I am a child component!</p>
    </div>
  );
const [textColor, setTextColor] = useState('black'); // For Task 9
const [isVisible, setIsVisible] = useState(true);    // For Task 10

const [time, setTime] = useState(new Date().toLocaleString());

  // MOVE TASK 8 EFFECT HERE:
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []); // It runs in the background, r


  // Tasks 11 & 12: Input text
  const [userInput, setUserInput] = useState("");

  // Tasks 13, 14, 15: Login Form
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Tasks 16 & 17: List Array
  const [items] = useState(["Apple", "Banana", "Cherry", "Date"]);

  // Task 19: Button Disable State
  const [isDisabled, setIsDisabled] = useState(true);


  // Task 26: Controlled Input
  const [singleInput, setSingleInput] = useState("");

  // Task 27-29: Multiple Inputs & Errors
  const [formData, setFormData] = useState({ firstName: "", email: "" });
  const [formError, setFormError] = useState("");

  // Task 30-33: Todo List
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [todoFilter, setTodoFilter] = useState("all"); // 'all', 'completed', 'pending'

  // Tasks 36-39: API States
  const [apiUsers, setApiUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  // FIX FOR TASK 34: Log on mount
  useEffect(() => {
    if (activeTask === 34) {
      console.log("Task 34: Component has mounted!");
    }
  }, [activeTask]); // Runs whenever activeTask changes

  // FIX FOR TASK 35: Document Title
  useEffect(() => {
    if (activeTask === 35) {
      document.title = "Task 35 - Active";
    } else {
      document.title = "Vite + React"; // Reset for other tasks
    }
  }, [activeTask]);
  // Task 43: Search Filter
  const [query, setQuery] = useState("");
  //const items = ["Apple", "Orange", "Banana", "Grape", "Mango"];

  // Task 45: Modal
  const [showModal, setShowModal] = useState(false);

  // Task 46: Tabs
  const [activeTab, setActiveTab] = useState("Home");

  // Task 48: Ref
  const inputRef = useRef(null);
  // This function decides what to show on the right side of the screen


const MemoizedComponent = React.memo(({ count }) => {
  console.log("Task 49: Memoized Component Rendered!");
  return <p>Count received from parent: {count}</p>;
});
// This is the "Smaller Component" for Task 50
const SummaryCard = ({ taskCount, status }) => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      border: '2px dashed #3498db',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h3>Task Completion Summary</h3>
      <p>Total Tasks Coded: <strong>{taskCount}</strong></p>
      <p>Progress Status: <strong>{status}</strong></p>
    </div>
  );
};


  const renderTask = () => {
    switch(activeTask) {
      case 1: 
        return <h1>Task 1: Welcome to React!</h1>;
      
      case 2: 
        return <MyWelcomeComponent />;

      case 3: {
        // Adding { } here creates a private scope for this case
        const name = "Gemini"; 
        return <h1>Task 3: My name is {name}</h1>;
      }

      case 4: 
        return <h1>Task 4: Counter Value is {count}</h1>;

      case 5: {
      return (
        <div style={{ padding: '20px' }}>
          <h2>Task 5: Increment Button</h2>
          <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
          
          {/* This button changes the 'count' state defined at the top */}
          <button 
            onClick={() => setCount(count + 1)}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Add +1
          </button>
        </div>
      );
    }
case 6: {
  return (
    <div>
      <h2>Task 6: Decrement Counter</h2>
      <p style={{ fontSize: '30px' }}>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  );
}

case 7: {
  return (
    <div>
      <h2>Task 7: Reset Counter</h2>
      <p style={{ fontSize: '30px' }}>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset to Zero</button>
    </div>
  );
}
case 8: {
  return (
    <div>
      <h2>Task 8: Current Date & Time</h2>
      <p style={{ fontSize: '24px' }}>{time}</p>
    </div>
  );
}
case 9: {
  return (
    <div>
      <h2 style={{ color: textColor }}>Task 9: Change my color!</h2>
      <button onClick={() => setTextColor('red')}>Make Red</button>
      <button onClick={() => setTextColor('blue')}>Make Blue</button>
      <button onClick={() => setTextColor('black')}>Reset Color</button>
    </div>
  );
}
case 10: {
  return (
    <div>
      <h2>Task 10: Toggle Text Visibility</h2>
      {isVisible && <p style={{ fontSize: '18px', background: 'yellow' }}>Now you see me! 👻</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

case 11:
case 12: {
  return (
    <div>
      <h2>11 & 12. Input & Uppercase</h2>
      <input 
        type="text" 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Below: {userInput}</p>
      <button onClick={() => setUserInput(userInput.toUpperCase())}>Convert to Uppercase</button>
    </div>
  );
}
case 13:
case 14:
case 15: {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <div>
      <h2>13-15. Login Form</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input placeholder="Username" onChange={(e) => setLoginForm({...loginForm, username: e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Status: Logged in as {loginForm.username}</p>
      )}
    </div>
  );
}
case 16:
case 17: {
  return (
    <div>
      <h2>16 & 17. List Mapping</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>Index {index}: {item}</li>
        ))}
      </ul>
    </div>
  );
}
case 18:
case 19: {
  return (
    <div>
      <h2>18 & 19. Conditionals & Disable</h2>
      {isDisabled ? <p>The button is locked!</p> : <p>The button is open!</p>}
      <button disabled={isDisabled}>I am a Button</button>
      <button onClick={() => setIsDisabled(!isDisabled)}>Toggle Lock</button>
    </div>
  );
}
case 20: {
  return (
    <div>
      <h2>20. Display Image</h2>
      <img src="https://picsum.photos/200" alt="Random" style={{ borderRadius: '10px' }} />
    </div>
  );
}
case 21: {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
      <h2 style={{ color: 'darkblue', fontSize: '28px' }}>Task 21: Inline Styling</h2>
      <p style={{ fontWeight: 'bold' }}>This style is written directly in JS.</p>
    </div>
  );
}

case 22: {
  return (
    <div>
      {/* React uses 'className' instead of 'class' */}
      <h2 className="task-title">Task 22: Applied CSS Class</h2>
      <p className="task-description">
        This box is styled using a class from App.css. 
        It has a blue border-left and a light gray background.
      </p>
    </div>
  );
}
case 23:
case 24: {
  // 1. Define the Child component inside the case
  const WelcomeMessage = (props) => {
    return (
      <div style={{ border: '2px solid #3498db', padding: '10px', marginTop: '10px' }}>
        <h3>I am the Child!</h3>
        <p>Message from Parent: <strong>{props.text}</strong></p>
      </div>
    );
  };

  // 2. The Parent renders the Child and sends the "text" prop
  return (
    <div>
      <h2>Task 23 & 24: Components & Props</h2>
      <WelcomeMessage text="Hello! I was sent as a prop." />
      <WelcomeMessage text="I am the same component, but with different data!" />
    </div>
  );
}
case 25: {
  const CustomButton = ({ label, color }) => (
    <button style={{ backgroundColor: color, color: 'white', margin: '5px', padding: '10px' }}>
      {label}
    </button>
  );

  return (
    <div>
      <h2>Task 25: Reusable Components</h2>
      <CustomButton label="Save Changes" color="green" />
      <CustomButton label="Delete Account" color="red" />
      <CustomButton label="Cancel" color="gray" />
    </div>
  );
}
case 26: return (
  <div>
    <h2>26. Controlled Component</h2>
    <input value={singleInput} onChange={(e) => setSingleInput(e.target.value)} />
    <p>Value: {singleInput}</p>
  </div>
);

case 27: {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update only the specific field in the object
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <h2>27. Single State Object Form</h2>
      <input name="firstName" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>{formData.firstName} - {formData.email}</p>
    </div>
  );
}

case 28:
case 29: {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      setFormError("All fields are required!");
    } else {
      setFormError("");
      alert("Form Submitted!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>28 & 29. Validation</h2>
      <input name="firstName" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
      <input name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
case 30:
case 31:
case 32: {
  const addTodo = () => {
    if (!todoInput) return;
    const newTodo = { id: Date.now(), text: todoInput, completed: false };
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };

  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div>
      <h2>30-32. Todo List</h2>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>Check</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}case 33: {
  const filtered = todos.filter(t => {
    if (todoFilter === 'completed') return t.completed;
    if (todoFilter === 'pending') return !t.completed;
    return true;
  });

  return (
    <div>
      <h2>33. Filter Todos</h2>
      <button onClick={() => setTodoFilter('all')}>All</button>
      <button onClick={() => setTodoFilter('completed')}>Completed</button>
      <button onClick={() => setTodoFilter('pending')}>Pending</button>
      <ul>
        {filtered.map(t => <li key={t.id}>{t.text} ({t.completed ? "Done" : "Pending"})</li>)}
      </ul>
    </div>
  );
}
case 34: {
 
  return <h2>Task 34: Check your Browser Console (F12) to see the log!</h2>;
}
case 35: {
 

  return <h2>Task 35: Look at your browser tab title!</h2>;
}
case 36:
case 37:
case 38:
case 39: {
  const fetchData = async () => {
    setLoading(true);
    setApiError("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setApiUsers(data);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Tasks 36-39: API User Fetch</h2>
      <button onClick={fetchData}>Fetch Users List</button>

      {/* Task 37: Loading State */}
      {loading && <p style={{ color: 'blue' }}>⏳ Loading data from API...</p>}

      {/* Task 38: Error Handling */}
      {apiError && <p style={{ color: 'red' }}>❌ Error: {apiError}</p>}

      {/* Task 39: Render List */}
      {!loading && !apiError && (
        <ul>
          {apiUsers.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
case 40:
case 41:
case 42: {
  // Reusable Card Component
  const Card = ({ title, onAction }) => (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
      <h3>{title}</h3>
      <button onClick={onAction}>Update Parent</button>
    </div>
  );

  return (
    <div>
      <h2>Task 40-42: Card & Parent State</h2>
      <p>Parent State Count: {count}</p>
      <Card title="Task Card" onAction={() => setCount(count + 1)} />
    </div>
  );
}
case 43:
case 44: {
  const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <input placeholder="Search fruits..." onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={item}>{item}</li> // Task 44: Using unique 'item' as key
        ))}
      </ul>
    </div>
  );
}
case 45: {
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', border: '2px solid black' }}>
          <h3>I am a Modal!</h3>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
case 46: {
  return (
    <div>
      <button onClick={() => setActiveTab("Home")}>Home</button>
      <button onClick={() => setActiveTab("Profile")}>Profile</button>
      <div>Active View: {activeTab} Content</div>
    </div>
  );
}
case 48: {
  const handleFocus = () => {
    inputRef.current.focus(); // Direct DOM manipulation
  };
  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
case 49: {
  return (
    <div>
      <h2>Task 49: Performance Optimization</h2>
      <p>This child component only re-renders if 'count' changes.</p>
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setTextColor(textColor === 'red' ? 'blue' : 'red')}>
        Change Color (Won't trigger Memoized child)
      </button>
    </div>
  );
}case 50: {
  return (
    <div>
      <h2>Task 50: Split Components</h2>
      <p>
        I have moved the UI logic for the box below into a separate function 
        called <code>SummaryCard</code> to keep the main App clean.
      </p>
      
      {/* Calling the smaller component and passing data via props */}
      <SummaryCard 
        taskCount={50} 
        status="100% Complete! 🎉" 
      />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert("Congratulations on finishing all 50 tasks!")}>
          Celebrate!
        </button>
      </div>
    </div>
  );
}
      default: 
        return <p>Select a task from the sidebar</p>;
    }
  };

  
  return (
    <div style={{ display: 'flex'}}>
      {/* SIDEBAR */}
      <div style={{ width: '200px', background: '#333', color: 'white', padding: '10px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50].map(num => (
            <li 
              key={num} 
              onClick={() => setActiveTask(num)} 
              style={{ cursor: 'pointer', padding: '10px', background: activeTask === num ? '#555' : 'transparent' }}
            >
              Task {num}
            </li>
          ))}
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: '20px' }}>
        {renderTask()}
      </div>
    </div>
  );
}