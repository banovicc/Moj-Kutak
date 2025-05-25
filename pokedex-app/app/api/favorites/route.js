// POST I GET i DELETE metoda

let favorites = [];

export async function GET() {
  return Response.json({ favorites });
}

export async function POST(request) {
  const body = await request.json();
  if (!body?.id) return Response.json({ error: "id missing" }, { status: 400 });

  if (!favorites.includes(body.id)) favorites.push(body.id);

  return Response.json({ ok: true, favorites });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    return new Response(JSON.stringify({ error: "invalid id" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  favorites = favorites.filter((favId) => favId !== numericId);

  return new Response(JSON.stringify({ ok: true, favorites }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
