// DOM

const backToTop = document.querySelector('.nav-a-up');

// Variables


window.addEventListener('scroll', () => {
  console.log(document.body.scrollTop)
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    backToTop.style.display = 'block';
  else
    backToTop.style.display = 'none';
})
