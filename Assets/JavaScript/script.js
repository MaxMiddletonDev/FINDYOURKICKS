document.addEventListener("DOMContentLoaded", function() {
    const shoeLookupInput = document.getElementById("shoeLookupInput");
    if (shoeLookupInput) {
        shoeLookupInput.addEventListener("keydown", keyPressed);
    }
    const defaultTabButton = document.getElementById("defaultTabOpen");
    if (defaultTabButton) {
        defaultTabButton.click();
    }
});

window.openTab = openTab;

function keyPressed(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const shoeLookupInput = document.getElementById("shoeLookupInput");
    const shoeName = shoeLookupInput.value.trim();
    const searchElem = document.getElementById("searchResults");
    if (shoeName) {
      const shoeData = getShoeData();
      const shoe = shoeData.find(s => String(s.Model || '').toLowerCase() === shoeName.toLowerCase());
      searchElem.classList.remove("fadeIn");
      searchElem.classList.add("fadeOut");
      setTimeout(() => {
        if (shoe) {
          searchElem.innerHTML = `
            <h2>${shoe.Model}</h2>
            <p>Brand: ${shoe.Brand}</p>
            <p>Price: $${shoe.Price}</p>
            <p>Type: ${shoe.Type}</p>
            <p>Gender: ${shoe.Gender}</p>
            <p>Color: ${shoe.Color}</p>
            <p>Material: ${shoe.Material}</p>
            <p>Size: ${shoe.Size}</p>
          `;
        } else {
          searchElem.innerHTML = "<p>Shoe not found.</p>";
        }
        searchElem.classList.remove("fadeOut");
        searchElem.classList.add("fadeIn");
      }, 300);
    }
  }
}
