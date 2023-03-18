import React, { useEffect, useState } from 'react';
import './dropdown.css';


const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

    useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen === undefined) setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="container">
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className="listContainer">
                    <div className="list" onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}