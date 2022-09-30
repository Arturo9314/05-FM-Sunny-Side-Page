(()=>{
    const menuButton = document.querySelector('#toggle')
    const showmenu = document.querySelector('#menu')
    const triangle = document.querySelector('#triangle')
    menuButton.addEventListener('change', (e)=>{
        if(e.target.checked){
            showmenu.style.display = "flex"
            triangle.style.display = "block"
        }
        else{
            showmenu.style.display = "none"
            triangle.style.display = "none"
        }
    })
})()