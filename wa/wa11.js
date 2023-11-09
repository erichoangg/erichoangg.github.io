const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
 let altDict = {"pic1.jpg":"Toyota AE86",
    "pic2.jpg":"Mazda RX-7 FD", 
    "pic3.jpg":"Mitsubishi Evo III", 
    "pic4.jpg":"Mazda RX-7 FC", 
    "pic5.jpg":"Honda NSX"};

/* Looping through images */
for(const img of imgArr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    }
    );
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
const lighting = btn.getAttribute("class");

if (lighting === "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
}

else{
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
} 
});