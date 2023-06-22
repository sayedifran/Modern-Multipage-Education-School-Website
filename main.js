//////----change NAVBAR on scroll - colorchnage---////

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 06)
})


// // ---show/hide FAQS para---

const faqs= document.querySelectorAll('.faqs-box')

faqs.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('faqs-open')

        ///to change icon to minus----///
        const icon= btn.querySelector('.faqs-icon i');
        if(icon.className === 'fa-thin fa-plus'){
            icon.className= "fa-solid fa-minus"
        }else {
            icon.className= 'fa-thin fa-plus'
        }
    })
})


// ---===navbar show\hide btn===-----
let menu= document.querySelector('.nav-menu');
let  openMenuBtn= document.querySelector("#open-btn");
let closeMenuBtn= document.querySelector("#close-btn");

openMenuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closeMenuBtn.style.display= "inline-block";
    openMenuBtn.style.display = "none";
})

closeMenuBtn.addEventListener('click', () =>{
    menu.style.display = "none";
    openMenuBtn.style.display = "inline-block";
    closeMenuBtn.style.display= "none";

})



// const  faqs= document.querySelectorAll('.faqs-box')
// const button= document.querySelectorAll('.faqs-icon')

// button.forEach(function(btn){
//     btn.addEventListener('click', (e)=>{
//         btn= faqs.classList.toggle('faqs-open')
         
//     })
// })
// const tum= document.getElementsBy



































// window.addEventListener('scroll', ()=>{
//     document.querySelector('nav').classList.toggle('window-scroll', scrollY>0)
// })

// const faq= document.querySelectorAll('.faqs-box')

// faq.forEach(btn=>{
//     btn.addEventListener('click', (e)=>{
//         btn.classList.toggle('faqs-open')
//     })
// })




















