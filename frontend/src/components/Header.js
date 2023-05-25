import React from 'react';

const Header = ({ toggleMode }) => {
  return (
    <div className="app-header">
      <h1>Note List</h1>
      <button onClick={toggleMode}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default Header;
