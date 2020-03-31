var nav = document.querySelector('#navItem-1');

// if(!nav.className.match("d-none")){
//     var link = document.querySelectorAll('.js--nav-link');
   
//     // nav.classList.remove("d-none");

//     link.forEach((object,i) => {

//         object.addEventListener('click', (event) => {
//             event.preventDefault();

//             var id      = event.target.getAttribute("href");
//             var idElem  = document.querySelector(id);
//             var nav     = document.querySelectorAll('nav.nav');
//             if(nav && nav.length > 0) {
//                 nav.forEach((obj,i) => {
//                     if(!obj.className.match('d-none')){
//                         obj.classList.add("d-none");
//                     }
//                 });
//             }
//             link.forEach((o,i) => {
//                 if(o.className.match('active')){
//                     o.classList.remove("active");
//                 }
//             })

//             event.target.classList.add("active");

//             idElem.classList.remove("d-none");
//         }); // Click on the checkbox
//     });
// }