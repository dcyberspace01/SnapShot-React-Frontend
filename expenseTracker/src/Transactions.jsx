import { useState } from "react";

function Transactions({ user, transactions }) {
  const [form, setForm] = useState({
    date: "",
    type: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/transactions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ date: "", type: "", amount: "" });
      window.location.reload(); // refresh manually
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh]">
      <div className="w-full max-w-2xl px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome, {user.username}
        </h2>

        <form onSubmit={handleSubmit} className="bg-base-200 p-4 rounded shadow-md w-full max-w-md mx-auto mb-6">
          <h3 className="text-xl font-bold mb-4">Add Transaction</h3>
          <input name="date" type="date" value={form.date} onChange={handleChange} className="input input-bordered w-full mb-2" />
          <input name="type" type="text" value={form.type} onChange={handleChange} placeholder="Type" className="input input-bordered w-full mb-2" />
          <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="input input-bordered w-full mb-2" />
          <button type="submit" className="btn btn-primary w-full">Add</button>
        </form>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td>{tx.type}</td>
                  <td>${tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Transactions
