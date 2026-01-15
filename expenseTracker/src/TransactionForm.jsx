import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ date: "", type: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://snapshot-backend.redsmoke-84e60bb6.eastus.azurecontainerapps.io/api/transactions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ date: "", type: "", amount: "" });
      onAdd(); // ✅ closes form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-200 p-4 rounded shadow-md w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">Add Transaction</h3>
      <input name="date" type="date" value={form.date} onChange={handleChange} className="input input-bordered w-full mb-2" />
      <input name="type" type="text" value={form.type} onChange={handleChange} placeholder="Type" className="input input-bordered w-full mb-2" />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="input input-bordered w-full mb-2" />
      <button type="submit" className="btn btn-primary w-full">Add</button>
    </form>
  );
}

export default TransactionForm;
