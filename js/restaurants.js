let tbody = document.querySelector("tbody");
let resName = document.getElementById("resName");
let resBranches = document.getElementById("resBranches");
let resStart = document.getElementById("resStart");
let resEnd = document.getElementById("resEnd");
let addRes = document.getElementById("addRes");
let addForm = document.getElementById("addForm");

async function getRestaurants() {
  await fetch("http://localhost:3000/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((d, i) => {
          let tr = `<tr>
            <th scope="row">${i + 1}</th>
            <td>${d?.name}</td>
            <td>${d?.branches}</td>
            <td>${d?.time?.start} - ${d?.time?.end}</td>
            </tr>`;

        tbody.innerHTML += tr
        
      });
    });
}
getRestaurants();

addForm.addEventListener("submit",async function addRestaurant(e) {
    e.preventDefault()
    console.log(e);
    await axios({
      method: "post",
      url: "http://localhost:3000/add",
      data: {
        name: resName.value,
        branches: resBranches.value,
        time:{
            start:resStart.value,
            end:resEnd.value,
        }
      },
    });
    alert("Restaurant qo'shildi!");
});
