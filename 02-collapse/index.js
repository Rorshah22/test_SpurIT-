const btn = document.querySelector('.collapsible__button');
const btnVisible = document.querySelector('.collapsible__action--visible');
const btnHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

const collapse = content.animate(
  {
    width: ["1600px", "0px"],
    height: ["15px", "0"],
    overflow: "hidden"
  },
  { duration: 300, fill: "both", easing: "linear" },
)

btnHidden.style.display = 'none';
collapse.pause();

btn.addEventListener('click', () => {
  if (collapse.playState === 'paused') {
    btnHidden.style.display = 'block'
    btnVisible.style.display = 'none'
    collapse.play();
  } else {
    btnHidden.style.display = 'none'
    btnVisible.style.display = 'block'
    collapse.reverse()
  }
})