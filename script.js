const menuContainer = document.getElementById("menuContainer");
const categoryButtons = document.getElementById("categoryButtons");

function saveTable() {
  const table = document.getElementById("tableInput").value;
  if (!table) return alert("Enter table number");
  localStorage.setItem("table", table);
}

function loadCategories() {
  Object.keys(menuData).forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    if (index === 0) btn.classList.add("active");

    btn.onclick = () => {
      document.querySelectorAll(".categories button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadMenu(cat);
    };

    categoryButtons.appendChild(btn);
  });
}

function loadMenu(category) {
  menuContainer.innerHTML = "";
  menuData[category].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${item.name}</h3><span>₹${item.price}</span>`;
    menuContainer.appendChild(div);
  });
}

loadCategories();
loadMenu(Object.keys(menuData)[0]);
