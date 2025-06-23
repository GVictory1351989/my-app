import React, { useEffect, useState, useRef, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';

//
// 1️⃣ useContext Example – Theme Management (Light/Dark)
//
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function ThemedText() {
    const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Accessing context values

    const style = {
        backgroundColor: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '10px',
        borderRadius: '5px'
    };

    return (
        <div style={style}>
            <p>🎨 Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

//
// 2️⃣ useEffect Example – Auto Timer
//
function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        return () => clearInterval(timer); // ✅ Clean up when component unmounts
    }, []);

    return <p>⏳ Timer: {count} seconds</p>;
}

//
// 3️⃣ useRef Example – Focus input on button click
//
function InputFocus() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // ✅ DOM access
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

//
// 4️⃣ Custom Hook Example – Save Name to LocalStorage
//
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

function CustomHookExample() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
            <p>🔐 Stored in localStorage: {name}</p>
        </div>
    );
}

//
// ✅ Main Wrapper Component
//

// 🔍 Actual code string for rendering as text in browser
const codeText = `
1️⃣ useContext Example
----------------------
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function ThemedText() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' }}>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

2️⃣ useEffect Example
----------------------
function TimerComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>Timer: {count}</p>;
}

3️⃣ useRef Example
----------------------
function InputFocus() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

4️⃣ Custom Hook Example
----------------------
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function CustomHookExample() {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}
`;
function ReactHookExamples() {
    return (
        <div style={{ padding: '20px' }}>
            <Link to="/">← Back to Tutorials</Link>
            <h1>🚀 React Hooks Overview</h1>

            {/* 📋 Summary Table */}
            <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', whiteSpace: 'pre' }}>
                <code>
                    {`Hook           Use Case                         Example
useContext     Global state जैसे theme, auth     ThemeContext से theme access
useEffect      Side-effects, timers, API calls   Timer चल रहा है
useRef         DOM access (e.g., input focus)    Input focus button से
Custom Hook    Reusable logic                    LocalStorage में नाम स्टोर`}
                </code>
            </pre>
            <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', whiteSpace: 'pre' }}>
                <code>
                    {codeText}
                </code>
            </pre>
            <h2>1️⃣ useContext</h2>
            <ThemeProvider>
                <ThemedText />
            </ThemeProvider>

            <h2>2️⃣ useEffect</h2>
            <TimerComponent />

            <h2>3️⃣ useRef</h2>
            <InputFocus />

            <h2>4️⃣ Custom Hook</h2>
            <CustomHookExample />
        </div>
    );
}

export default ReactHookExamples;
