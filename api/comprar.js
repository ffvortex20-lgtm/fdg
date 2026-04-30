export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;

  try {
    const response = await fetch("https://ereemby.com/api/checkout", {
      method: "POST",
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao comprar" });
  }
}
