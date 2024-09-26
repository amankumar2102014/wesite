$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Machine Learning Enthusiast", "Web Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Machine Learning Enthusiast", "Web Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});







document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get the form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Prepare the form data for Google Forms
    const formData = new FormData();
    formData.append('entry.YOUR_NAME_FIELD_ID', name);
    formData.append('entry.YOUR_EMAIL_FIELD_ID', email);
    formData.append('entry.YOUR_SUBJECT_FIELD_ID', subject);
    formData.append('entry.YOUR_MESSAGE_FIELD_ID', message);

    // Send the data to Google Forms
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfjU_4TR2sCn_l0P2typfjHQKYzviMJ_YMPiB1uEGGNuDykjA/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
}).then(() => {
    window.location.href = "thank-you.html"; // Redirect to a thank-you page
}).catch(() => {
    alert('There was an error sending the message.');
});










   



           






    // You can add your own logic here to handle the form submission
    // For example, you could send the data to a server or display a success message

    console.log('Form submitted:', { name, email, subject, message });
    
    // Clear the form
    event.target.reset();

    // Display a success message (you can customize this)
    alert('Thank you for your message. I will get back to you soon!');
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', handleSubmit);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.projects .card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

projectCards.forEach(card => {
    observer.observe(card);
});

// Update copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();
