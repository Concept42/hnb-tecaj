// app/api/tecaj/route.ts
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return Response.json({ error: "No request url" });
  }
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}?datum-primjene=${date}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
    console.log(response.url, "response");
    if (response.ok) {
      const data = await response.json();
      return Response.json(data);
    } else {
      const errorData = await response.json();
      Response.json({ error: errorData.message || "An error occurred" });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
