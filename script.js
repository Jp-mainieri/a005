const rating_cards = document.querySelectorAll('.grades')
const submit_btn = document.querySelector('#submit_') 
const rate_point = document.getElementById('rating')
const rating_section = document.querySelector('section.rating_question')
const thanks_section = document.querySelector('section.rating_res')

let rate = null

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active=document.querySelector('.checked')
        if (active) {
            active.classList.remove("checked")
        }
        const card = e.target
        card.classList.add("checked")
        rate = e.target.innerText

    })
});

submit_btn.addEventListener('click' , () => {
    if (rate) {
        rate_point.innerText = `${rate} `
        rating_section.style.display = "none"
        thanks_section.style.display = "block"
    }
})
    
    





