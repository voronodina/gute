

const overlay = document.querySelector('#overley');
const openbutton = document.querySelector('#button');
const content = document.querySelector('#content');
const openbuttonceks = document.querySelector('#buttonceks')


openbutton.addEventListener('click', function(){
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('contenthiden');
    
    const closebutton = document.querySelector('[data-modal-close]');
    closebutton.addEventListener('click', function(){
    modal.classList.add('contenthiden');    
    })
    const over = document.querySelector('[data-modal-over]');
    over.addEventListener('click' , function(){
    modal.classList.add('contenthiden');
    })
})
openbuttonceks.addEventListener('click', function(){
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('contenthiden');
    
    const closebutton = document.querySelector('[data-modal-close]');
    closebutton.addEventListener('click', function(){
    modal.classList.add('contenthiden');    
    })
    const over = document.querySelector('[data-modal-over]');
    over.addEventListener('click' , function(){
    modal.classList.add('contenthiden');
    })
})