// GUmb za brisanje favorita

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/favorites?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        let errorMessage = "Neuspešno brisanje";
        try {
          const data = await res.json();
          if (data?.error) errorMessage = data.error;
        } catch {}
        throw new Error(errorMessage);
      }

      router.refresh();
    } catch (err) {
      setError(err.message);
      console.error("Greška pri brisanju:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={handleClick}
        disabled={loading}
        style={{
          marginTop: 20,
          borderRadius: 5,
          width: 200,
          fontSize: 15,
          padding: 10,
          cursor: loading ? "not-allowed" : "pointer",
          border: "none",
          backgroundColor: loading ? "gray" : "darkred",
          color: "white",
          marginBottom: 20,
        }}
      >
        {loading ? "Uklanjanje..." : "Ukloni iz favorita"}
      </button>
      {error && <p style={{ color: "red" }}>Greška: {error}</p>}
    </div>
  );
}
