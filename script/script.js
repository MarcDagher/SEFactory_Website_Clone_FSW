// Background color change
// text color change with background
const color_bg = document.getElementById("color-background")
const colors = ["#28EEA7ED", "#FB508EED", "#9864DAED"]

const h1_black = document.getElementById("h1-black")
const p_black = document.getElementById("p-black")

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
const programs_bg = document.getElementById("programs-bg")
const programs_nav = document.getElementById("programs-nav");
const nav_fcs = document.getElementById("nav-fcs");
const nav_fsw = document.getElementById("nav-fsw");
const nav_fsd = document.getElementById("nav-fsd");
const nav_uix = document.getElementById("nav-uix");
const programs_box_fcs = document.getElementById("programs-box-fcs");
const programs_box_fsw = document.getElementById("programs-box-fsw");
const programs_box_fsd = document.getElementById("programs-box-fsd");
const programs_box_uix = document.getElementById("programs-box-uix");

let current_section = "nav-fcs";

programs_nav.addEventListener("click", function Change_Section(e) {
  if (e.target.id !== current_section && e.target.id !== "programs-nav") {
    Hide_Section(current_section);
    show_section(e.target.id);
    current_section = e.target.id;
  }
});

function Hide_Section(section) {
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

function show_section(section) {
    if (section == "nav-fcs"){
      nav_fcs.classList.add("programs-nav-fcs");
      programs_box_fcs.style.display = "flex";
      programs_bg.style.backgroundColor = "#FFC635"
    }
      
    else if (section == "nav-fsw"){
      nav_fsw.classList.add("programs-nav-fsw");
      programs_box_fsw.style.display = "flex";
      programs_bg.style.backgroundColor = "#28eea7"
    }
    
    else if (section == "nav-fsd"){
      nav_fsd.classList.add("programs-nav-fsd");
      programs_box_fsd.style.display = "flex";
      programs_bg.style.backgroundColor = "#9764da"
    }
    else if (section == "nav-uix"){
      nav_uix.classList.add("programs-nav-uix");
      programs_box_uix.style.display = "flex";
      programs_bg.style.backgroundColor = "#fb508f"
    }
}


// hamburger menu

const hamburger_wrapper = document.getElementById("ham-wrapper")
const hamburger_btn_show = document.getElementById("hamburger-btn-show")
const hamburger_btn_hide = document.getElementById("hamburger-btn-hide")

hamburger_btn_show.addEventListener("click", () => {
  hamburger_wrapper.classList.toggle("hide")
})

hamburger_btn_hide.addEventListener("click", () => {
  hamburger_wrapper.classList.toggle("hide")
})

// Testimonials Sliding images

const testimonials_container = document.getElementById("testimonials-container")
const dots = document.getElementsByClassName("mini-dot")
const dot_1 = document.getElementsByClassName("mini-dot")[0]
const dot_2 = document.getElementsByClassName("mini-dot")[1]
const dot_3 = document.getElementsByClassName("mini-dot")[2]
const dot_4 = document.getElementsByClassName("mini-dot")[3]


dot_1.addEventListener("click", () => {
  testimonials_container.style.transform = "translateX(38.5%)"
  for (i=0 ; i<4 ; i++){
    dots[i].classList.remove("active")
  }
  dot_1.classList.add("active")
})

dot_2.addEventListener("click", () => {
  testimonials_container.style.transform = "translateX(13%)"
  for (i=0 ; i<4 ; i++){
    dots[i].classList.remove("active")
  }
  dot_2.classList.add("active")
})

dot_3.addEventListener("click", () => {
  testimonials_container.style.transform = "translateX(-12.5%)"
  for (i=0 ; i<4 ; i++){
    dots[i].classList.remove("active")
  }
  dot_3.classList.add("active")
})

dot_4.addEventListener("click", () => {
  testimonials_container.style.transform = "translateX(-38%)"
  for (i=0 ; i<4 ; i++){
    dots[i].classList.remove("active")
  }
  dot_4.classList.add("active")
})


// Timed changing of image position
const x_list = ["translateX(38.5%)","translateX(13%)","translateX(-12.5%)","translateX(-38%)"]
let position = 0

const change_position = () => {
  if (position > 3) {position = 0}
  testimonials_container.style.transform = x_list[position]

  for (i=0 ; i<4 ; i++){
    dots[i].classList.remove("active")
  }
  dots[position].classList.add("active")
  
  position ++
}
setInterval(change_position, 7000)