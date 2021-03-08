// Local review data
const reviews = [
    {
        id: 1,
        name: "Susan Doe",
        job: "Dev Ops",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpG8p_fqSv-mS8Gunee-EpCJlQeplzcVeOCg&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste praesentium fugit sapiente eveniet repudiandae ipsa omnis facere id temporibus."
    },

    {
        id: 2,
        name: "Anna Doe",
        job: "Frontend Dev",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6jymPylrR_8POZqXI1Ak2VS7MPpm7FqwJQ&usqp=CAU",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione molestias earum vel dolores dolore ducimus, quam, amet inventore deleniti architecto neque aut perferendis quasi?"
    },

    {
        id: 3,
        name: "Love Doe",
        job: "Full-Stack Dev",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpG8p_fqSv-mS8Gunee-EpCJlQeplzcVeOCg&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste praesentium fugit sapiente eveniet repudiandae ipsa omnis facere id temporibus."
    },

    {
        id: 4,
        name: "Joy Doe",
        job: "Andriod Dev",
        img: "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione molestias earum vel dolores dolore ducimus, quam, amet inventore deleniti architecto neque aut perferendis quasi?"
    },
];

// Select items
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// Show person based on item 
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// Show previous person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// Show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log("showPerson");
    showPerson();
})