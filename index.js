const needed = document.querySelectorAll('.total')[0];
const num = document.querySelectorAll('.input')[0];
const form = document.querySelectorAll('.donation-form')[0];
const bar = document.querySelectorAll('.barra')[0];
let total = 1000;

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let amount = num.value;
    let completed = total - needed.innerHTML;
    completed += parseInt(amount);
    let result = total - parseInt(completed);
    needed.innerHTML = Math.max(result, 0);
    donationPorcent = Math.min((completed / total) * 100, 100)
    bar.style.width = `${donationPorcent}%`;
})

