const btn = document.querySelector('.collapsible__button');
const btnVisible = document.querySelector('.collapsible__action--visible');
const btnHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

btnHidden.style.display = 'none'

btn.addEventListener('click', () => {
    if (btnHidden.style.display === 'none') {
        btnHidden.style.display = 'block'
        btnVisible.style.display = 'none'
        let a= content.animate([
            // { transform: 'translate3D(0, 0, 0)' },
            // { transform: 'translate3D(300px, 0, 3000px)' }
          {top: "100px",
            heigth: '20px'
        },
          {top: 0
            },
            {overflow: 'hidden'}
          ], 1000);
          setTimeout(()=>{a.pause()}, 900)
          
    }else {
        btnHidden.style.display ='none' 
        btnVisible.style.display = 'block'
        const a= content.animate([
            {opacity: 0 },
            {opacity: 1}
          ], 500)

          setTimeout(()=>{a.pause()}, 450)
    }
})