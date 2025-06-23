import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ✅ React.memo Component to avoid unnecessary re-renders
const SelectCar = React.memo(({ car, options, onChange }) => {
    console.log("🔁 SelectCar rendered");
    return (
        <label>
            Choose a Car:
            <select name="car" value={car} onChange={onChange} required>
                <option value="">-- Select Car --</option>
                {options.map((car, index) => (
                    <option key={index} value={car}>{car}</option>
                ))}
            </select>
        </label>
    );
});

function ReactFormExample() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        car: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✅ Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nCar: ${formData.car}`);
    };

    const carOptions = ["Ford", "BMW", "Audi"];

    return (
        <div style={{ padding: '20px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '10px', color: 'blue' }}>
                ← Back to Tutorials
            </Link>

            <h2>🚀 React Form with Multiple Inputs</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Text Input */}
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Email Input */}
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Textarea */}
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        cols="30"
                        placeholder="Write your message"
                    ></textarea>
                </label>

                {/* Memoized Select Dropdown */}
                <SelectCar car={formData.car} options={carOptions} onChange={handleChange} />

                <button type="submit" style={{ alignSelf: 'start' }}>Submit</button>
            </form>

            <hr />

            <h3>📋 Form Data Preview:</h3>
            <ul>
                <li><strong>Name:</strong> {formData.name}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Message:</strong> {formData.message}</li>
                <li><strong>Car:</strong> {formData.car}</li>
            </ul>
        </div>
    );
}

export default ReactFormExample;
