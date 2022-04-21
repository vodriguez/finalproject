const enBtn = document.getElementById("enBtn");
const esBtn = document.getElementById("esBtn");
const ptBtn = document.getElementById('ptBtn');

const enNav = document.querySelectorAll(".uk");
const esNav = document.querySelectorAll(".sp");
const ptNav = document.querySelectorAll(".po");

// Use query selector all, as this returns an array of elements.
// getElementsByClassName returns an array of nodes, which is slightly different.
const langEn = document.querySelectorAll(".en");
const langEs = document.querySelectorAll(".es");
const langPt = document.querySelectorAll(".pt");

// Add event listener to the esBtn
esBtn.addEventListener("click", switchEs);
enBtn.addEventListener("click", switchEn);
ptBtn.addEventListener("click", switchPt);

// Switch langs
function switchEs() {
  changeLanguage('block', 'none', 'none', 'inline', 'none', 'none');
}

function switchEn() {
  changeLanguage('none', 'none', 'block', 'none', 'inline', 'none');
}

function switchPt() {
  changeLanguage('none', 'block', 'none', 'none', 'none', 'inline');
}

function changeLanguage(esDisplay, ptDisplay, enDisplay, spDisplay, ukDisplay, poDisplay) {
    // Loops over each .en element and sets display to whatever we pass into the function
  langEn.forEach(function(en) {
    en.style.display = enDisplay;
  });
  
  // Loops over each .pt element and sets display to whatever we pass into the function
  langPt.forEach(function(pt) {
    pt.style.display = ptDisplay;
  });
  
  // Loops over each .es element and sets display to whatever we pass into the function
  langEs.forEach(function(es) {
    es.style.display = esDisplay;
  });

  esNav.forEach(function(sp) {
    sp.style.display = spDisplay;
  });

  enNav.forEach(function(uk) {
    uk.style.display = ukDisplay;
  });

  ptNav.forEach(function(po) {
    po.style.display = poDisplay;
  });

}