import { Link } from 'react-router-dom';
import React, { Component } from 'react';

// ✅ Functional Component Example
function FunctionalExample() {
    return <p className="text-green-700">✅ This is a Functional Component</p>;
}

// ✅ Class Component Example
class ClassExample extends Component {
    render() {
        return <p className="text-purple-700">🏛️ This is a Class Component</p>;
    }
}

function ReactComponentTypes() {
    return (
        <div className="p-6 space-y-6 bg-white rounded-lg shadow max-w-3xl mx-auto">
            {/* Back link */}
            <Link
                to="/"
                className="inline-block mt-4 text-sm text-blue-600 hover:underline"
            >
                ← Back to Tutorials
            </Link>
            {/* Title */}
            <h2 className="text-3xl font-bold text-blue-800 border-b pb-2">
                📚 React Component Types
            </h2>

            {/* Section 1: What is a Component */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">🔹 What is a Component?</h3>
                <p className="text-gray-700">
                    A <strong>component</strong> in React is a reusable piece of UI. It returns JSX and can
                    be rendered inside other components. Components can be either functional or class-based.
                </p>
            </section>

            {/* Section 2: Functional Component */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">🔹 Functional Component</h3>
                <p className="text-gray-700">
                    A <strong>functional component</strong> is a simple JavaScript function that returns JSX.
                    It’s the most common way to write components in modern React.
                </p>

                {/* Example */}
                <div className="p-4 bg-gray-50 border rounded">
                    <pre>
                        {`function Hello() {
  return <h1>Hello World</h1>;
}`}
                    </pre>
                </div>

                <FunctionalExample />
            </section>

            {/* Section 3: Class Component */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">🔹 Class Component</h3>
                <p className="text-gray-700">
                    A <strong>class component</strong> is created using ES6 classes. It extends
                    <code> React.Component </code> and includes a <code>render()</code> method.
                </p>

                {/* Example */}
                <div className="p-4 bg-gray-50 border rounded">
                    <pre>
                        {`class Hello extends React.Component {
  render() {
    return <h1>Hello from Class</h1>;
  }
}`}
                    </pre>
                </div>

                <ClassExample />
            </section>

            {/* Tips/Conclusion */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">💡 Notes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Functional components are easier to write and test.</li>
                    <li>With React Hooks, functional components can handle state and lifecycle.</li>
                    <li>Class components are still valid but mostly used in older codebases.</li>
                </ul>
            </section>

           
        </div>
    );
}

export default ReactComponentTypes;
