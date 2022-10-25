import React, { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Input from './components/Input';




function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App container bg-warning w-50 pb-1 rounded-pill">
      <Input
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
      />
      {password === "252525" ? <Boton /> : null}
    </div>
  );
}

export default App;

