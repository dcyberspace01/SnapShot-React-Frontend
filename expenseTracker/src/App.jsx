import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Transactions from './Transactions';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    fetch("https://snapshot-backend.redsmoke-84e60bb6.eastus.azurecontainerapps.io/api/transactions/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setTransactions);
  };

  useEffect(() => {
    fetch("https://snapshot-backend.redsmoke-84e60bb6.eastus.azurecontainerapps.io/api/user/", {
      credentials: "include",
    })
      .then((res) => res.ok ? res.json() : null)
      .then(setUser);
  }, []);

  useEffect(() => {
    if (user) fetchTransactions();
  }, [user]);

  return (
    <>
      <div className="flex justify-center items-center">
        {user ? (
          <Transactions user={user} transactions={transactions} />
        ) : (
          <MyForm setUser={setUser} />
        )}
      </div>
    </>
  );
}

function MyForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://snapshot-backend.redsmoke-84e60bb6.eastus.azurecontainerapps.io/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const userRes = await fetch("https://snapshot-backend.redsmoke-84e60bb6.eastus.azurecontainerapps.io/api/user/", {
        credentials: "include",
      });
      const userData = await userRes.json();
      setUser(userData);
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="input input-bordered"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input input-bordered"
      />
      <button type="submit" className="btn btn-primary">Log in</button>
    </form>
  );
}

export default App;

