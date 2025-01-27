export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/planos`);
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
