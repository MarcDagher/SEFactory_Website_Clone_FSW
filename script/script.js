// Background color change
// text color change with background
const color_bg = document.getElementById("color-background")
const colors = ["#28EEA7ED", "#FB508EED", "#9864DAED"]

const h1_black = document.getElementById("h1-black")
const p_black = document.getElementById("p-black")
console.log(h1_black)
console.log(p_black)
let color = 0

const change_color = () => {
  if (color == 0){
    h1_black.classList.toggle("black-txt")
    p_black.classList.toggle("black-txt")
  } else if (color == 1){
    h1_black.classList.toggle("white-txt")
    p_black.classList.toggle("white-txt")
  }

  color_bg.style.backgroundColor = colors[color]
  color += 1
  if (color == 3) {
    color = 0
  }
}

setInterval(change_color, 5000)

// Programs section: on click change section 
const programs_bg = document.getElementById("programs_bg")
const programs_nav = document.getElementById("programs-nav");
const nav_fcs = document.getElementById("nav-fcs");
const nav_fsw = document.getElementById("nav-fsw");
const nav_fsd = document.getElementById("nav-fsd");
const nav_uix = document.getElementById("nav-uix");
const programs_box_fcs = document.getElementById("programs-box-fcs");
const programs_box_fsw = document.getElementById("programs-box-fsw");
const programs_box_fsd = document.getElementById("programs-box-fsd");
const programs_box_uix = document.getElementById("programs-box-uix");

let currentSection = "nav-fcs";

programs_nav.addEventListener("click", function changeSection(e) {
  console.log(e.target.id)
  if (e.target.id !== currentSection && e.target.id !== "programs-nav") {
    hideSection(currentSection);
    showSection(e.target.id);
    currentSection = e.target.id;
  }
});

function hideSection(section) {
  if (section === "nav-fcs") {
    nav_fcs.classList.remove("programs-nav-fcs");
    programs_box_fcs.style.display = "none";
  } else if (section === "nav-fsw") {
    nav_fsw.classList.remove("programs-nav-fsw");
    programs_box_fsw.style.display = "none";
  } else if (section === "nav-fsd") {
    nav_fsd.classList.remove("programs-nav-fsd");
    programs_box_fsd.style.display = "none";
  } else if (section === "nav-uix") {
    nav_uix.classList.remove("programs-nav-uix");
    programs_box_uix.style.display = "none";
  }
}

function showSection(section) {
    if (section == "nav-fcs"){
      nav_fcs.classList.add("programs-nav-fcs");
      programs_box_fcs.style.display = "flex";
      // programs_bg.style.backgroundColor = "#FFC635"
    }
      
    else if (section == "nav-fsw"){
      nav_fsw.classList.add("programs-nav-fsw");
      programs_box_fsw.style.display = "flex";
      // programs_bg.style.backgroundColor = "#28eea7"
    }
    
    else if (section == "nav-fsd"){
      nav_fsd.classList.add("programs-nav-fsd");
      programs_box_fsd.style.display = "flex";
      // programs_bg.style.backgroundColor = "#9764da"
    }
    else if (section == "nav-uix"){
      nav_uix.classList.add("programs-nav-uix");
      programs_box_uix.style.display = "flex";
      // programs_bg.style.backgroundColor = "#fb508f"
    }
}
