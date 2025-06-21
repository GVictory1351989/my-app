import { Link } from 'react-router-dom';
import React, { Component } from 'react';

function FunctionalExample() {
    return <p>✅ This is a Functional Component</p>;
}
// ✅ Class Component Example

class ClassExample extends Component {
    render() {
        return <p>🏛️ This is a Class Component</p>;
    }
}

function ReactComponentTypes() {
    return (<div>
        <h2 className="text-2xl font-bold text-blue-800">📚 React Component Types</h2>

        <p className="text-gray-700">
            React components can be created using <strong>functions</strong> or <strong>classes</strong>.
            Functional components are preferred in modern React with Hooks support.
        </p>

        {/* Render both components */}
        <div className="space-y-2">
            <FunctionalExample />
            <ClassExample />
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
            ← Back to Tutorials
        </Link>
           </div>);
}

export default ReactComponentTypes;