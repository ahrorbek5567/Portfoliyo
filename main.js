let aname =document.getElementById("aname");
let phone =document.getElementById("phone");
let email =document.getElementById("email");

document.querySelector("#sendbtn").addEventListener('click',()=>{
    sendtelegram(aname.value+""+phone.value+""+email.value);
});


// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "8155254434:AAHKqJV9rVyhO-A5ItOC7AuD2CQkwrJPXW4"; let chat_id =  5987260202; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };





document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const progressBars = document.querySelectorAll('.progress-bar');
  
    // Scroll to About Section
    scrollButton.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  
    // Animate Progress Bars
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress + '%';
        }
      });
    });
  
    progressBars.forEach((bar) => observer.observe(bar));
  
    // Contact Form Validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  });




  