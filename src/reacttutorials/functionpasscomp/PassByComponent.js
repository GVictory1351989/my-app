import { React } from 'react'; // although React import is not necessary in React 17+ unless using JSX manually
import { Link } from 'react-router-dom'; // ✅ Required for using <Link>, otherwise Link will throw error

function Parent() {
    return (
        <div>
            {/* Link component for navigation */}
            

            {/* Passing props (name) from Parent to Child */}
            <Child name='Manish Kumar' />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <p>From parent to child pass props : {props.name}</p>
        </div>
    );
}


function PassByComponent()
{

    let codeString = `
function Parent() {
    return (
        <div>
            {/* Link component for navigation */}
            <div className="mt-6">
                <Link to="/" className="text-sm text-blue-600 hover:underline">
                    ← Back to Tutorials
                </Link>
            </div>

            {/* Passing props (name) from Parent to Child */}
            <Child name='Manish Kumar' />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <p>From parent to child pass props : {props.name}</p>
        </div>
    );
}
`;
    return (
        <div>
            <div className="mt-6">
                <Link to="/" className="text-sm text-blue-600 hover:underline">
                    ← Back to Tutorials
                </Link>
            </div>
            <h2>
                Parent to child data communicate by props
            </h2>
            <pre>
                <code>
                    {codeString}
                </code>
            </pre>
            <Parent/>
        </div>
        );
}

export default PassByComponent; // ✅ Important if this is a page or needs to be used in other files
