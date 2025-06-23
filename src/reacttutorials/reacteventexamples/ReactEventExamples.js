import React from 'react';
import { Link } from 'react-router-dom';
import { handleExternalClick } from './handlers';

// 🔧 Utility to display code as text
const renderCode = (code) => (
    <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', whiteSpace: 'pre-wrap' }}>
        <code>{code}</code>
    </pre>
);

// 1️⃣ Synthetic Event
function SyntheticEventExample() {
    const handleClick = (event) => {
        alert(
            `✅ Synthetic Event Triggered\n` +
            `Event Type: ${event.type}\n` +
            `Event Target: ${event.target.tagName}\n` +
            `Event CurrentTarget: ${event.currentTarget.tagName}`
        );
    };

    const code = `
function SyntheticEventExample() {
  const handleClick = (event) => {
    console.log("✅ Synthetic Event Triggered");
    console.log("Event Type:", event.type);
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}`;

    return (
        <div>
            <h2>1️⃣ Synthetic Event</h2>
            <button onClick={handleClick}>Click Me</button>
            {renderCode(code)}
            <hr />
        </div>
    );
}

// 2️⃣ Event with Parameter
function EventWithParam() {
    const greet = (name) => {
        alert(`Hello, ${name}!`);
    };

    const code = `
function EventWithParam() {
  const greet = (name) => {
    alert(\`Hello, \${name}!\`);
  };

  return (
    <button onClick={() => greet("Manish")}>
      Say Hello
    </button>
  );
}`;

    return (
        <div>
            <h2>2️⃣ Event with Parameter</h2>
            <button onClick={() => greet("Manish")}>Say Hello</button>
            {renderCode(code)}
            <hr />
        </div>
    );
}

// 3️⃣ Custom Event (Child to Parent)
function CustomEventParent() {
    const handleChildEvent = (message) => {
        alert(`Received from child: ${message}`);
    };

    const parentCode = `
function CustomEventParent() {
  const handleChildEvent = (message) => {
    alert(\`Received from child: \${message}\`);
  };

  return <CustomEventChild onSend={handleChildEvent} />;
}`;

    const childCode = `
function CustomEventChild({ onSend }) {
  return (
    <button onClick={() => onSend("🚀 Custom Message from Child")}>
      Send to Parent
    </button>
  );
}`;

    return (
        <div>
            <h2>3️⃣ Custom Event (Child to Parent)</h2>
            <CustomEventChild onSend={handleChildEvent} />
            {renderCode(parentCode)}
            {renderCode(childCode)}
            <hr />
        </div>
    );
}

function CustomEventChild({ onSend }) {
    return (
        <button onClick={() => onSend("🚀 Custom Message from Child")}>
            Send to Parent
        </button>
    );
}

// 4️⃣ External Event Handler
function ExternalEventExample() {
    const code = `
function handleExternalClick() {
  alert("🔥 Clicked from external function");
}

function ExternalEventExample() {
  return (
    <button onClick={handleExternalClick}>
      External Handler Click
    </button>
  );
}`;

    return (
        <div>
            <h2>4️⃣ Event from External JS File</h2>
            <button onClick={handleExternalClick}>External Handler Click</button>
            {renderCode(code)}
            <hr />
        </div>
    );
}

// 🔙 Wrapper Page
function ReactEventExamples() {
    return (
        <div style={{ padding: '20px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '10px', color: 'blue' }}>
                ← Back to Tutorials
            </Link>
            <h1>🚀 React Event Examples</h1>

            <SyntheticEventExample />
            <EventWithParam />
            <CustomEventParent />
            <ExternalEventExample />
        </div>
    );
}

export default ReactEventExamples;
