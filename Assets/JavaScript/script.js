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
    const searchElem = document.getElementById("searchresults");
    if (shoeName) {
      const shoeData = getShoeData();
      const shoe = shoeData.find(s => String(s.Model || '').toLowerCase() === shoeName.toLowerCase());
      searchElem.classList.remove("fade-in");
      searchElem.classList.add("fade-out");
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
          searchElem.innerHTML = `<p>Shoe not found.</p>`;
        }
        searchElem.classList.remove("fade-out");
        searchElem.classList.add("fade-in");
      }, 300);
    }
  }
}

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}