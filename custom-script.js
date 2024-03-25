document.querySelector("#submitForm").addEventListener("click", function() {
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;
    
    var email = "mailto:zawmay.data.analyst@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent("Hello there,\n\n" + message + "\n\nThank you.\n\nBest Regards,");
        
    window.location.href = email;
});

