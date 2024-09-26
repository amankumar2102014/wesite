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
        alert('Message sent successfully!');
    }).catch(() => {
        alert('There was an error sending the message.');
    });
});
