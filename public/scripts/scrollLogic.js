const tools = document.querySelector('.tool_selection')
const navHeight = tools.offsetTop

function changeHeaderWhenScroll() {
  if (window.pageYOffset >= navHeight) {
    tools.classList.add('scroll')
  } else {
    tools.classList.remove('scroll')
  }
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
 if (window.scrollY >= 560) {
  backToTopButton.classList.add('show')
   } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function(){
  backToTop()
  changeHeaderWhenScroll()
})