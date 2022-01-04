'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const btnCloseModal= document.querySelector(".close-modal")
const btnsOpenModal=document.querySelectorAll(".show-modal")

console.log(btnsOpenModal);

for(let i=0;i<btnsOpenModal.length;i++)
{
    // console.log(btnsOpenModal[i].textContent)---> just check what it does if you get confuse
    (btnsOpenModal[i].addEventListener("click",function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }))
}

const closeModal=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener("click", closeModal)

overlay.addEventListener("click",closeModal);

// to listen event handler everywhere
// keydown ---- it works if you press any key from keyboard, its a global eventListener like click
// we want to make it work only when modal class is not hidden 
// then close the pop up model
document.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
})