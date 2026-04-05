fetch("/api/vehicles")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("vehicles");

  data.forEach(v => {
    container.innerHTML += `
      <div class="card">
        <h2>${v.name}</h2>
        <img src="${v.image}" width="200">
        <p>Price: ₹${v.price}</p>

        <button onclick="buy('${v.name}')">Buy Now</button>
      </div>
    `;
  });
});

function buy(name){
  window.open(`https://wa.me/917039411350?text=I want to buy ${name}`);
}
