import { useState } from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Layout from '../../components/Layout/Layout';

function RegisterPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Layout>
      {isLoginOpen ? <Login /> : <Register />}
      <button onClick={() => setIsLoginOpen((prev) => !prev)}>
        {!isLoginOpen ? 'Already got Account? Login' : "Don't have an account? Register"}
      </button>
    </Layout>
  );
}
export default RegisterPage;
