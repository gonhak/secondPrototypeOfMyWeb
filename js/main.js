document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    const navVisible = document.querySelector ('.navbar-collapse')
    const link = document.querySelectorAll('.nav-link')

    function addShadow(){
        if (window.scrollY >= 100){
            nav.classList.add('shadow-bg')
        }else{
            nav.classList.remove('shadow-bg')
        }
    }

    function navShow(){
        navVisible.classList.remove('show')
    }

    link.forEach(links => links.addEventListener('click', () => navVisible.classList.remove('show')))
 
    window.addEventListener('scroll', addShadow)
})



