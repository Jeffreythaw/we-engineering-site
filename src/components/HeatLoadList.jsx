import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_HL_URL;

const HeatLoadList = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/list`);
      const data = await res.json();
      setRecords(data);
      setMessage("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setMessage("❌ Failed to load records.");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      const res = await fetch(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");

      setMessage("✅ Record deleted.");
      fetchRecords();
    } catch (err) {
      console.error("Delete failed:", err);
      setMessage("❌ Failed to delete record.");
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <section className="mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow text-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Heat Load Records</h2>

      {loading ? (
        <p>Loading records...</p>
      ) : records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="px-4 py-2 text-left">Area</th>
                <th className="px-4 py-2 text-left">Unit</th>
                <th className="px-4 py-2 text-left">BTU/hr</th>
                <th className="px-4 py-2 text-left">HP</th>
                <th className="px-4 py-2 text-left">Submitted At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">{record.area}</td>
                  <td className="px-4 py-2">{record.unit}</td>
                  <td className="px-4 py-2">{record.resultBTU}</td>
                  <td className="px-4 py-2">{record.estimatedHP}</td>
                  <td className="px-4 py-2">
                    {new Date(record.submittedAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}
    </section>
  );
};

export default HeatLoadList;