import * as React from 'react';
import { UserContext, UserContextProvider } from './context/UserContext';
import './style.css';

export default function App() {
  const user = React.useContext(UserContext);
  return (
    <div>
      <h1>redha</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default function AppForm(){
  return (
    <UserContextProvider>
      <App/>
    </UserContextProvider>
  )
}