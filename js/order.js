let orderForm = document.getElementById("orderForm");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let res = document.getElementById("res");
let branches = document.getElementById("branches");
let food = document.getElementById("food");

async function getRestaurants() {
  await fetch("http://localhost:3000/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((d, i) => {
        let option = `<option dataValue="${d?.name}" value="${d?.id}">${d?.name}</option>`;
        res.innerHTML += option;
      });
    });
}
getRestaurants();

res.addEventListener("change", (e)=>{
    branches.innerHTML = ""
    async function getBranches() {
      await fetch(`http://localhost:3000/all/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          data?.branches.forEach((d, i) => {
            let option = `<option value="${d}">${d}</option>`;
            branches.innerHTML += option;
          });
        });
    }
    getBranches();
})

orderForm.addEventListener("submit", async function addRestaurant(e) {
  e.preventDefault();
  await axios({
    method: "post",
    url: "http://localhost:3000/orders/add",
    data: {
      name: name.value,
      phone: phone.value,
      restaurant: res.value,
      branch: branches.value,
      order: food.value,
    },
  });
  alert("Buyurtma qabul qilindi!");
});