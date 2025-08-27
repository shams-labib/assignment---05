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

// call button section
document.getElementById('call-btn').addEventListener('click', function(e){
    e.preventDefault();
    const serviceName = document.getElementById("service-name").innerText;
    const serviceNumber = document.getElementById("service-number").innerText;

    alert("Service name:" + serviceName + ", Service Number :" + serviceNumber)
})