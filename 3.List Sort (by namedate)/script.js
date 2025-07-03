const data = [
  { name: "Zain", date: "2023-05-01" },
  { name: "Ali", date: "2024-01-15" },
  { name: "Sara", date: "2022-09-12" },
  { name: "Muzamil", date: "2023-12-05" }
];

function renderList(items) {
  const ul = document.getElementById("itemList");
  ul.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.date}`;
    ul.appendChild(li);
  });
}

function sortList() {
  const sortBy = document.getElementById("sortBy").value;
  const orderBy = document.getElementById("orderBy").value;

  const sorted = [...data].sort((a, b) => {
    let valA = sortBy === "name" ? a.name.toLowerCase() : new Date(a.date);
    let valB = sortBy === "name" ? b.name.toLowerCase() : new Date(b.date);

    if (valA < valB) return orderBy === "asc" ? -1 : 1;
    if (valA > valB) return orderBy === "asc" ? 1 : -1;
    return 0;
  });

  renderList(sorted);
}

// Initial render
renderList(data);
