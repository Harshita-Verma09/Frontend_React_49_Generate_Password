import React, { useState } from 'react';
import './OTP.css'

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        let chars = "";
        if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) chars += "0123456789";
        if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:',.<>?";

        if (chars.length === 0) {
            alert("At least one character set must be selected!");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

    return (
        <div className="password-container">
            <h1>Password Generator</h1>
            <div className="password-box">{password || "Generated password will appear here"}</div>

            <label>
                Length: <input type="number" min="4" max="20" value={length} onChange={(e) => setLength(Number(e.target.value))} />
            </label>

            <div className="options">
                <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</label>
                <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</label>
                <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</label>
                <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols</label>
            </div>

            <button onClick={generatePassword} className="generate-btn">Generate Password</button>
            <button onClick={copyToClipboard} className="copy-btn">Copy to Clipboard</button>
        </div>
    );
};

export default PasswordGenerator;
