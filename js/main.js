let tbody = document.querySelector("tbody")

async function getOrders() {
  await fetch("http://localhost:3000/orders")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((d, i) => {
        let tr = `<tr>
            <th scope="row">${i + 1}</th>
            <td>${d?.name}</td>
            <td>${d?.phone}</td>
            <td>${d?.order}</td>
            <td>${d?.branch}</td>
            <td>${d?.time}</td>
            </tr>`;

        tbody.innerHTML += tr;
      });
    });
}
getOrders();
