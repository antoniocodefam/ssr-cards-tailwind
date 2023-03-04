export default async function handler(req, res) {
  try {
    const data = await fetch(`${process.env.API}/posts`);
    const posts = await data.json();

    res.status(200).json({ data: posts });
  } catch {
    res.status(500).json({ error: "Internal Server Error", data: [] });
  }
}
