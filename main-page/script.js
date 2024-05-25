
fetch("http://localhost:3000/menu")
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector("#container");
        data.forEach(menu => {
            const div = document.createElement('div');
            div.classList.add('data', 'justify-content-center', 'm-3', 'rounded-5');
            div.innerHTML = `<img src="${menu.img}"/>
                            <p>${menu.name}</p>"`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });