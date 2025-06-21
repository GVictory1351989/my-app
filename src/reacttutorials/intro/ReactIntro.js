import { Link } from 'react-router-dom';

function ReactIntro() {
    return (
        <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h2>👋 Welcome to React Introduction</h2>
            {/* ✅ Back Button using Link */}
            <Link to="/" className="text-sm text-blue-600 hover:underline">
                ← Back to Tutorials
            </Link>
        </div>
    );
}

export default ReactIntro;
