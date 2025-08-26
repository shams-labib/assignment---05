// Heart icon work

const heartIcon = document.getElementById('heart-icon');

const icon = document.querySelectorAll(".icon-heart");

for(let icons of icon){
    icons.addEventListener('click', function(){
        let iconValue = parseInt(heartIcon.innerText);
        iconValue++;
        heartIcon.innerText = iconValue;
    })
}