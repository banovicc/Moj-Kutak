//Samo gumb za uklanjanje favorita

"use client";

import { useRouter } from "next/navigation";

async function removeFavorite(id) {
  try {
    const res = await fetch(`/api/favorites?id=${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Network error:", err);
  }
}

export default function RemoveButton({ id }) {
  const router = useRouter();

  const handleClick = async () => {
    await removeFavorite(id);
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        marginTop: 20,
        borderRadius: 5,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 15,
        padding: 10,
        cursor: "pointer",
        border: "none",
        backgroundColor: "darkred",
        color: "white",
        marginBottom: 20,
      }}
    >
      Ukloni iz favorita
    </button>
  );
}
