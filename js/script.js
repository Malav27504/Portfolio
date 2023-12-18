// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}

//Email


// const form = document.querySelector('form');
// const fullName = documnet.getElementById("name");
// const email = documnet.getElementById("email");
// const subject = documnet.getElementById("subject");
// const message = documnet.getElementById("message");



// function sendEmail()
// {
//     const bodyMessage = 'Full Name: ${fullName.value} <br> Email: ${email.value} <br> Subject: ${subject.value}<br> Message : ${message.value}'

    
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "malavpanchal81@gmail.com",
//         Password : "75378587F166B51ADC13E9D033FA2860CF18",
//         To : "malavpanchal81@gmail.com",
//         From : "malavpanchal81@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     sendEmail(); 
// });