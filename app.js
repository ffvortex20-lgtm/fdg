fetch("/api/produtos")
  .then(res => res.json())
  .then(data => {
    console.log(data); // 👈 IMPORTANTE

    let container = document.getElementById("produtos");

    data.forEach(prod => {
      container.innerHTML += `
        <div class="card">
          <h2>${prod.nome}</h2>
          <p>R$ ${prod.preco}</p>
        </div>
      `;
    });
  })
  .catch(err => {
    console.log("ERRO:", err);
  });
