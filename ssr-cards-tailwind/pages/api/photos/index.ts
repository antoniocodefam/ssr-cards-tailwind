export default async function handler(req, res) {
  // TODO: Add types
  try {
    const data = await fetch(`${process.env.API}/photos`);
    const photos = await data.json();

    res.status(200).json({ data: photos });
  } catch {
    res.status(500).json({ error: "Internal Server Error", photos: [] });
  }
}
