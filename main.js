const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const increaseHeart = document.querySelector(".increase");
const decreaseHeart = document.querySelector(".decrease");
const heartColor = document.querySelector(".heart-color");
const theName = document.getElementById("name");
const nameColor = document.querySelector(".name-color");
const imgFile = document.querySelector(".img-file");
const playBtn = document.querySelector(".play");
const photo = document.querySelector(".photo");
const heartsContainer = document.querySelector(".hearts");

let fontSize = 22;
plusBtn.addEventListener("click", () => {
    const text = document.querySelectorAll(".text");

    fontSize += 2;
    text.forEach(text => {
        text.style.fontSize = `${fontSize}px`;
    })

})

minusBtn.addEventListener("click", () => {
    const text = document.querySelectorAll(".text");
    fontSize -= 2;
    text.forEach(text => {
        text.style.fontSize = `${fontSize}px`;
    })
});

nameColor.addEventListener("input", () => {

    const text = document.querySelectorAll(".text");
    text.forEach(ele => {
        ele.style.color = `${nameColor.value}`;
    })


})
heartColor.addEventListener("input", () => {
document.documentElement.style.setProperty("--heart-color", heartColor.value);
})

theName.addEventListener("input", () => {
    const text = document.querySelectorAll(".text");
    let length = theName.value.length;
    if (theName.value[length - 1] === " ") {
        theName.value = theName.value.trim();
    }
    text.forEach(ele => {
        ele.innerText = `${theName.value}`;
    })


})

playBtn.addEventListener("click", () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(ele => {
        ele.classList.remove("celebrate");
        void ele.offsetWidth;


        ele.classList.add("celebrate");
    })

});

increaseHeart.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.className = "heart";
    newDiv.innerHTML = `<span class="text" style="font-size: ${fontSize}px; color: ${nameColor.value};
    ">${theName.value}</span>`
    heartsContainer.appendChild(newDiv)
})

decreaseHeart.addEventListener("click", () => {
    const hearts = document.querySelectorAll(".heart");
    if (hearts.length) {
        hearts[hearts.length - 1].remove();
    }
})