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

    addToHistory(serviceName, serviceNumber);
}


  const buttons = document.querySelectorAll('.call-btn');

  for(const btn of buttons){
    btn.addEventListener('click', function(e){
        
        e.preventDefault();
         const coin = parseInt(document.getElementById("coin-btn").innerText)
        if(coin > 0){
        const coinSub = coin - 20;
        document.getElementById("coin-btn").innerText = coinSub;
        }
        else{
            alert('❌ আপনার একাউন্টে পর্যাপ্ত কয়েন নেই, কল করতে ২০টি কয়েন লাগবে।')
            return;
        }



        const card = btn.closest(".card"); 
        showAlert(card);
       
    })

  }

   function addToHistory(name, number) {
    let historyList = document.getElementById("history-list");

    const historybtn = document.getElementById("history-btn");


    // current time
    const time = new Date().toLocaleTimeString();

    // create li
    const div = document.createElement("div");
    div.innerHTML = ` <div class="flex justify-between p-6">
                         <div>
                           <h1 class="font-[700]">${name}</h1>
                           <p class="font-[400]">${number}</p>
                         </div>
                          <div>
                            <p class="font-[400]">${time}</p>
                          </div>
                        </div>`;

    // add to top (recent first)
    historyList.prepend(div);

    historybtn.addEventListener('click', function(){
           historyList.innerHTML = "";
    })

  }

