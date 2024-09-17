
fetch("http://localhost:3000/menu")
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector("#container");
        const filteredData = data.filter(menu => menu.name == "Momo" || menu.name == "Sel Roti");
        filteredData.forEach(menu => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="image-container">
                                <img src="${menu.img}"/>
                            </div>
                            <div class="info">
                                <h3>${menu.name}</h3>
                                <p class="price"> Rs${menu.price}<p>
                                <div class="buttonss d-flex">
                                    <button type="button" class="btn btn-light p1" >Buy</button>
                                    <button type="button" class="btn btn-light p2"><i class="bi bi-cart"></i>Add to Cart</button>
                                </div>
                            </div>`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });