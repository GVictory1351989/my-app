import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';


// ✅ Functional Component using useState
function FunctionSetValueFunctional() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
	};
	const functionCode = `
function FunctionSetValueFunctional() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
`.trim();
	return (
		<div className="bg-green-50 p-4 rounded-xl shadow mb-6">
			<h3 className="text-lg font-semibold mb-2">🔧 Functional Component</h3>
			<pre>
				<code>
					{functionCode}
			    </code>
			</pre>
			<p className="mb-2">
				🔢 Counter Value: <span className="text-green-700 font-medium">{counter}</span>
			</p>
			<button
				onClick={handleClick}
				className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
			>
				➕ Increase Counter
			</button>
			
		</div>
	);
}


// ✅ Class Component with Code Display
class FunctionSetValueClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	handleClick = () => this.setState({ counter: this.state.counter + 1 });

	render() {
		const classCode = `
class FunctionSetValueClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}
`.trim();

		return (
			<div className="bg-blue-50 p-4 rounded-xl shadow mb-6">
				<h3 className="text-lg font-semibold mb-2">🏛️ Class Component (this.state)</h3>

				<p className="mb-2">
					🔢 Counter Value: <span className="text-blue-700 font-medium">{this.state.counter}</span>
				</p>

				<button
					onClick={this.handleClick}
					className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mb-4"
				>
					➕ Increase
				</button>

				{/* 🔽 Code Viewer */}
				<h4 className="text-sm font-bold mt-4 mb-1">📄 Source Code:</h4>
				<pre className="bg-gray-800 text-white text-sm rounded p-3 overflow-x-auto whitespace-pre-wrap">
					<code>{classCode}</code>
				</pre>
			</div>
		);
	}
}



// ✅ Main Exported Component: Combines Both
function FunctionSetValue() {
	const stateExplanation = `
📘 Summary: Initialisation and Updating State in React

🔧 Functional Component (useState)
-----------------------------------
• Initialization:
  const [counter, setCounter] = useState(0);

  - counter → current value (initial = 0)
  - setCounter() → state update karne ka function

• Update Value:
  setCounter(counter + 1);

🟢 Functional components mein state banane ke liye useState() hook ka use hota hai.
Har baar jab state update hoti hai, component re-render hota hai.


🏛️ Class Component (this.state & this.setState)
------------------------------------------------
• Initialization (constructor mein):
  this.state = {
    counter: 0
  };

• Update Value:
  this.setState({ counter: this.state.counter + 1 });

🔵 Class components mein state constructor ke andar banayi jaati hai, 
aur update ke liye this.setState() ka use hota hai, jo component ko re-render karta hai.


📌 Quick Comparison:

| Feature         | Functional Component     | Class Component           |
|-----------------|--------------------------|----------------------------|
| State Creation  | useState(0)              | this.state = {}           |
| State Update    | setCounter(...)          | this.setState({...})      |
| Simpler Syntax  | ✅ Yes                   | ❌ Verbose                |
| Modern React    | ✅ Recommended           | ⚠️ Legacy Style           |
| Lifecycle Hooks | useEffect(), etc.        | componentDidMount(), etc. |
`.trim();
	const preStyle = {
		whiteSpace: "pre-wrap",
		background: "#1e1e1e",
		color: "white",
		padding: "12px",
		borderRadius: "6px",
		fontFamily: "'Courier New', monospace",
		overflowX: "auto"
	};
	return (
		<div className="p-6">
			<div className="mt-6">
				<Link to="/" className="text-sm text-blue-600 hover:underline">
					← Back to Tutorials
				</Link>
			</div>
			<h2 className="text-2xl font-bold mb-6">⚛️ React Counter Examples</h2>
			<pre style={preStyle}>
				<code>{stateExplanation}</code>
			</pre>
			{/* Functional Component */}
			<FunctionSetValueFunctional />

			{/* Class Component */}
			<FunctionSetValueClass />
			
		</div>
	);
}

export default FunctionSetValue;
