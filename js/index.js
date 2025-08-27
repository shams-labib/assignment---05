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

// Buttons alert section

function showAlert(card){
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector('.service-number').innerText;

    alert(`📞 Calling ${serviceName}, ${serviceNumber}`);
}

  const buttons = document.querySelectorAll('.call-btn');

  for(const btn of buttons){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const card = btn.closest(".card"); 
        showAlert(card);
    })
  }

