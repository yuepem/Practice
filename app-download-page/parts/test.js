// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const nav = document.getElementsByClassName('nav-list')[0];

// toggleButton.addEventListener('click', () => {
//     nav.classList.toggle('active');
// })

// const toggleButton = document.querySelector('.toggle-button');
// const navList = document.querySelector('.nav-list');

// toggleButton.addEventListener('click', () => {
//     navList.classList.toggle('active');
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.querySelector('.toggle-button');
//     const navList = document.querySelector('.nav-list');

//     toggleButton.addEventListener('click', () => {
//       navList.classList.toggle('active');
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navList = document.getElementsByClassName('nav-list')[0];

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
        console.log(toggleButton);
    });
    
});


