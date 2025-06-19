var fulltimer;
$(document).ready(function() {
    // Your code here
    console.log("DOM is fully loaded");
    var firebaseConfig = {
        apiKey: "AIzaSyD0TLS7kjH7jNNw3HDoSIUndD8HNTLf22Y",
        authDomain: "ptsb-ae61f.firebaseapp.com",
        projectId: "ptsb-ae61f",
        storageBucket: "ptsb-ae61f.firebasestorage.app",
        messagingSenderId: "839987008905",
        appId: "1:839987008905:web:5b2fb4e5533a38e0db7d58"
    };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();


      $('.allForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Your custom logic here
        console.log('Form submission prevented!');
    });
});



function sendMessage(){
    $('#contactSendBtn').hide();
    var name = $('#f-name').val();
    var email = $('#email-address').val();
    var message = $('#form-text').val();
    var date;

    if (name != '' && email != '' && message != '') {
        date = getFormattedDateTime();
        if (date != '') {
            // send to db
            // Add a new document with a generated id.
            db.collection("CLIENTMESSAGES").add({
                name: name,
                email: email,
                message_client: message,
                timer_date: fulltimer,
                date: date
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                $('.policy-text').text('Your message has been sent successfully. A member of our service team will be in touch with you shortly.');
                $('.policy-text').addClass('green-text');
                $('.contact-form-widget form input').val('');
                $('.contact-form-widget form textarea').val('');
                setTimeout(() => {
                    location.reload();
                }, 10222);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                $('.policy-text').addClass('red-text');
                $('.policy-text').text('Your message failed to send. Please try again later.');
                $('#contactSendBtn').show();
            });
        }
    }
}


function getFormattedDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    fulltimer = day + month + year + hours + minutes + seconds;
    // alert(fulltimer);



    // var date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(date);
}

function getCurrentDateTime() {
    const now = new Date();
    
    const date = now.toLocaleDateString(); // e.g., "6/19/2025"
    const datenb = now.getDay() + now.getDate() + now.getFullYear(); 
    const time = now.toLocaleTimeString(); // e.g., "3:45:23 PM"

    console.log('Date and Time: ' + datenb);
    
    
    // return `${date} ${time}`;
}
