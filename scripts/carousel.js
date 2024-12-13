const imgPlaceholder = document.getElementsByClassName("carousel-element-card");
const stars = document.getElementsByClassName("carousel-element-content-stars");
const names = document.getElementsByClassName("carousel-element-content-name");
const newPrices = document.getElementsByClassName("carousel-element-content-new-price");
const oldPrices = document.getElementsByClassName("carousel-element-content-old-price");

let info = [
    {
        img:"styles/imgs/carousel_img1.jpg",
        rate:"★★★★★",
        name:"Крісло з подушкою",
        newPrice:"1500₴",
        oldPrice:"3000₴"
    },
    {
        img:"styles/imgs/carousel_img2.jpg",
        rate:"★★★★★",
        name:"Нічник",
        newPrice:"100₴",
        oldPrice:"200₴"
    },
    {
        img:"styles/imgs/carousel_img3.jpg",
        rate:"★★★★★",
        name:"Лампа настільна",
        newPrice:"150₴",
        oldPrice:"300₴"
    },
    {
        img:"styles/imgs/carousel_img4.jpg",
        rate:"★★★★★",
        name:"Коробка плетена",
        newPrice:"50₴",
        oldPrice:"100₴"
    },
    {
        img:"styles/imgs/carousel_img5.jpg",
        rate:"★★★★★",
        name:"Тостер",
        newPrice:"750₴",
        oldPrice:"1500₴"
    }
];

for(let i=0; i<5; i++){
    imgPlaceholder[i].style.backgroundImage = "url(" + info[i].img + ")";
    stars[i].textContent = info[i].rate;
    names[i].textContent = info[i].name;
    newPrices[i].textContent = info[i].newPrice;
    oldPrices[i].textContent = info[i].oldPrice;
}
