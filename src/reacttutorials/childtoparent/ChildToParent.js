import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

function Parent()
{
    const [count, SetCount] = useState(0);
    const handler = () => {
        SetCount(count + 1);
    };

    return (<div>
        <Child callback={handler} />
        <p>Counter be { count}</p>
          </div>);
}

function Child({ callback })
{
    return( <div>
        <button onClick={callback}>Increase Counter</button>
    </div>);
}

function ChildToParent()
{
    const data = `
    function Parent() {
        const [count, SetCount] = useState(0);
        const handler = () => { // callback function 
            SetCount(count + 1); 
        };

        return (<div>
            <Child callback={handler} /> // // callback functionp[ass here
            <p>Counter be {count}</p>
        </div>);
    }

    function Child(props) { // propse.callback use inside here 
        return (<div>
            <button onClick={props.callback}>Increase Counter</button>
        </div>);
    }
    `.trim();
    return (
    <div>
        <Link to="/">← Back to Tutorials</Link>
            <Parent />
            <h2>Child To Parent</h2>
            <pre>
                <div>
                    {data}
                </div>
            </pre>
     </div>
    );
}

export default ChildToParent;