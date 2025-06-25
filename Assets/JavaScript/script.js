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
    console.log("Keypressed worked")
    const shoeLookupInput = document.getElementById("shoeLookupInput");
    const shoeName = shoeLookupInput.value.trim();
    if (shoeName) {
      const shoeData = getShoeData();
      const shoe = shoeData.find(s => String(s.Model || '').toLowerCase() === shoeName.toLowerCase());
      if (shoe) {
        var searchElem = document.getElementById("searchresults");
        searchElem.innerHTML = `
          <h2>${shoe.Model}</h2>
          <p>Brand: ${shoe.Brand}</p>
          <p>Price: $${shoe.Price}</p>
        `
        searchElem.classList.remove("searchresults");
        searchElem.classList.add("searchResultsActive");
      } else {
        document.getElementById("searchresults").innerHTML = `<p>Shoe not found.</p>`;
      }
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