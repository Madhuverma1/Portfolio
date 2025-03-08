//================================Toggle Bar==============================//
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        ///-------------------------------------Contact page-------------------------------------------//
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";

            if (name.trim() === "") {
                document.getElementById("nameError").textContent = "Name is required";
                isValid = false;
            }

            if (email.trim() === "" || !email.includes("@")) {
                document.getElementById("emailError").textContent = "Valid email is required";
                isValid = false;
            }

            if (message.trim() === "") {
                document.getElementById("messageError").textContent = "Message cannot be empty";
                isValid = false;
            }

            if (isValid) {
                alert("Message Sent Successfully!");
                document.getElementById("contactForm").reset();
            }
        });