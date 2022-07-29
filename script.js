const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const website = document.getElementById("website").value;
  const url = document.getElementById("url").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${url}</td>
          <td>${website}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);
