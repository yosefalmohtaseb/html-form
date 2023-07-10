import { useState } from 'react';
import './index.css';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState('signUpPage');
  
  const handlePageChange = () => {
    setCurrentPage((prevPage) => (prevPage === 'signUpPage' ? 'loginPage' : 'signUpPage'));
  };

  

  return (
    <div>
       {currentPage === 'signUpPage' && <SignUpPage onButtonClick={handlePageChange} />}
      {currentPage === 'loginPage' && <LoginPage onButtonClick={handlePageChange} />}
    </div>
  );
}

export default App;
