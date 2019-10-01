import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Daily Checklist</h1>
    </header>
  )
}

const headerStyle = {
  background: '#03a9fc',
  color: '#e3dede',
  textAlign: 'center',
  padding: '20px',
}


export default Header;