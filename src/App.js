import React from 'react';

function App() {
    const tutorials = [
        {
            name: "Tutorial 1",
            path: "/Tutorials/Tutorial1/index.html", // ✅ CORRECT path now
        },
        {
            name: "Tutorial 2",
            path: "/Tutorials/Tutorial2/index.html", // ✅ CORRECT path now
        },
        {
            name: "JavaScript Date ",
            path: "/Tutorials/Tutorial3/index.html", // ✅ CORRECT path now
        },
        {
            name: "JavaScript Array",
            path: "/Tutorials/Tutorial4/index.html", // ✅ CORRECT path now
        },
        {
            name: "JavaScript Functions",
            path: "/Tutorials/Tutorial5/index.html", // ✅ CORRECT path now
        },
        {
            name: "JavaScript Object",
            path: "/Tutorials/Tutorial6/index.html", // ✅ CORRECT path now
        },
        {
            name: "Higher Order Functions",
            path: "/Tutorials/Tutorial7/index.html", // ✅ CORRECT path now
        },
        
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Manish Kumar</h2>
            <ul className="space-y-2">
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
            </ul>
        </div>
    );
}

export default App;
