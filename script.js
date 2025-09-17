// Auto fill today’s date
document.getElementById("date").innerText = new Date().toLocaleDateString();

// Recalculate totals when quantity or rate changes
function recalc() {
  let rows = document.querySelectorAll("#product-list tr");
  let grandTotal = 0;

  rows.forEach(row => {
    let qty = parseFloat(row.querySelector(".qty")?.innerText || 0);
    let rate = parseFloat(row.querySelector(".rate")?.innerText || 0);
    let amountCell = row.querySelector(".amount");
    let amount = qty * rate;
    amountCell.innerText = amount.toFixed(2);
    grandTotal += amount;
  });

  document.getElementById("total").innerText = grandTotal.toFixed(2);
}

// Watch for changes in editable cells
document.addEventListener("input", (e) => {
  if (e.target.classList.contains("qty") || e.target.classList.contains("rate")) {
    recalc();
  }
});

// Initial calculation
recalc();
