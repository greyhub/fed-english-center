const title = document.getElementById("title");

const header_brand = document.getElementById("header_brand");
const header_email = document.getElementById("header_email");
const header_phone = document.getElementById("header_phone");
const header_register = document.getElementById("header_register");

const navbar_home = document.getElementById("navbar_home");
const navbar_about = document.getElementById("navbar_about");
const navbar_courses = document.getElementById("navbar_courses");
// const navbar_teacher = document.getElementById("navbar_teacher");
// const navbar_blog = document.getElementById("navbar_blog");

const slogan_title_1 = document.getElementById("slogan_title_1");
const slogan_content_1 = document.getElementById("slogan_content_1");
const slogan_link_1 = document.getElementById("slogan_link_1");

const slogan_title_2 = document.getElementById("slogan_title_2");
const slogan_content_2 = document.getElementById("slogan_content_2");
const slogan_link_2 = document.getElementById("slogan_link_2");

const slogan_bg_1 = document.getElementById("slogan_bg_1");
const slogan_bg_2 = document.getElementById("slogan_bg_2");

title.innerHTML = "Fed English";

// Header 
header_brand.innerHTML = "FED. <span>English</span>";
header_email.innerHTML = "fedenglishcenter@gmail.com";
header_phone.innerHTML = "+84 981 276 896";
header_register.href = "https://www.facebook.com/Learningenglishwithfed";

// Navbar 
navbar_home.innerHTML = "Home";
navbar_about.innerHTML = "Về chúng tôi";
navbar_courses.innerHTML = "Chương trình học";
// navbar_teacher.innerHTML = "Tuyển dụng";
// navbar_blog.innerHTML = "Blog";

// Slogan 
slogan_title_1.innerHTML = "FED ENGLISH";
slogan_content_1.innerHTML = "Study English with happiness.";
slogan_link_1.href = "https://www.facebook.com/Learningenglishwithfed";

slogan_title_2.innerHTML = "FED ENGLISH";
slogan_content_2.innerHTML = "We don't sell an English course<br>We sell a package of happiness.";
slogan_link_2.href = "https://www.facebook.com/Learningenglishwithfed";

const slogan_bg_link_1 = "images/GIOI-THIEU-1b.jpeg";
const slogan_bg_link_2 = "images/GIOI-THIEU-2a.jpeg";

slogan_bg_1.style = "background-image:url("+ slogan_bg_link_1 +");";
slogan_bg_2.style = "background-image:url("+ slogan_bg_link_2 +");";
