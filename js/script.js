const button = document.querySelector('.order_now'),
    closee = document.querySelector('.close'),
    modal = document.querySelector('.modal');

    button.addEventListener('click' , ()=>{
        modal.classList.add('active')
    })

    closee.addEventListener('click' ,()=>{
        modal.classList.remove('active')
        
    })

