export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;

  try {
    const response = await fetch("https://ereemby.com/api/products", {
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      }
    });

    const text = await response.text();

    res.status(200).send(text);

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
