const btn = document.querySelector('.collapsible__button');
const btnVisible = document.querySelector('.collapsible__action--visible');
const btnHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

btnHidden.style.display = 'none'

btn.addEventListener('click', () => {
    if (btnHidden.style.display === 'none') {
        btnHidden.style.display = 'block'
        btnVisible.style.display = 'none'
        
    }else {
        btnHidden.style.display ='none' 
        btnVisible.style.display = 'block'
    }
})