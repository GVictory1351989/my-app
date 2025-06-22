import { Routes, Route, Link } from 'react-router-dom';
import ReactIntro from './reacttutorials/intro/ReactIntro';
import ReactComponentTypes from './reacttutorials/component-types/ReactComponentTypes';
import FunctionSetValue from './reacttutorials/functionset/FunctionSetValue';

function App() {
    const tutorials = [
        { name: "JavaScript Variable", path: "/Tutorials/Tutorial2/index.html" },
        { name: "JavaScript Date", path: "/Tutorials/Tutorial3/index.html" },
        { name: "JavaScript Array", path: "/Tutorials/Tutorial4/index.html" },
        { name: "JavaScript Functions", path: "/Tutorials/Tutorial5/index.html" },
        { name: "JavaScript Object", path: "/Tutorials/Tutorial6/index.html" },
        { name: "Higher Order Functions", path: "/Tutorials/Tutorial7/index.html" },
        { name: "Sets and Maps", path: "/Tutorials/Tutorial8/index.html" },
        { name: "Destructuring and Spreading and json", path: "/Tutorials/Tutorial9/index.html" },
        { name: "HTML5 Web Storage", path: "/Tutorials/Tutorial10/index.html" },
        { name: "Promise & Callback", path: "/Tutorials/Tutorial11/index.html" },
    ];

    // ✅ Main Tutorial Page
    const Home = () => (
        <div>
            <h2 className="text-2xl font-bold mb-4">JavaScript and React Tutorials</h2>
            <ul className="space-y-2 mb-6">
                {tutorials.map((tut, index) => (
                    <li key={index}>
                        <a
                            href={tut.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {tut.name}
                        </a>
                    </li>
                ))}

                {/* ✅ React tutorial links */}
                <li>
                    <Link to="/reacttutorials/ReactIntro" className="text-green-600 hover:underline">
                        React Introduction (Component based)
                    </Link>
                </li>
                <li>
                    <Link to="/reacttutorials/ReactComponentTypes" className="text-green-600 hover:underline">
                        React Component Types (Class & Functional)
                    </Link>
                </li>
                <li>
                    <Link to="/reacttutorials/FunctionSetValue" className="text-green-600 hover:underline">
                        Function and Class Set Value and Initialise
                    </Link>
                </li>
            </ul>
        </div>
    );

    return (
        <div className="p-4">
            <Routes>
                {/* Main tutorial list page */}
                <Route path="/" element={<Home />} />

                {/* ✅ Unique paths for each React component */}
                <Route path="/reacttutorials/ReactIntro" element={<ReactIntro />} />
                <Route path="/reacttutorials/ReactComponentTypes" element={<ReactComponentTypes />} />
                <Route path="/reacttutorials/FunctionSetValue" element={<FunctionSetValue />} />
            </Routes>
        </div>
    );
}

export default App;
