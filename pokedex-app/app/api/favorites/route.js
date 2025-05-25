// GET POST DELETE

import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const favoritesCookie = cookieStore.get("favorites");
  const favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : [];
  return Response.json({ favorites });
}

export async function POST(request) {
  const cookieStore = cookies();
  const body = await request.json();

  if (!body?.id) {
    return Response.json({ error: "ID nedostaje" }, { status: 400 });
  }

  const favoritesCookie = cookieStore.get("favorites");
  let favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : [];

  if (!favorites.includes(body.id)) {
    favorites.push(body.id);
    cookieStore.set("favorites", JSON.stringify(favorites), {
      path: "/",
      sameSite: "lax",
    });
  }

  return Response.json({ ok: true, favorites });
}

export async function DELETE(request) {
  const cookieStore = cookies();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    return Response.json({ error: "Nevalidan ID" }, { status: 400 });
  }

  const favoritesCookie = cookieStore.get("favorites");
  let favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : [];

  favorites = favorites.filter((favId) => favId !== numericId);

  cookieStore.set("favorites", JSON.stringify(favorites), {
    path: "/",
    sameSite: "lax",
  });

  return Response.json({ ok: true, favorites });
}
