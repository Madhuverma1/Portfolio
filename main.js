//================================Toggle Bar==============================//
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        ///-------------------------------------Contact page-------------------------------------------//
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from redirecting
            
            let formData = new FormData(this);

    formData.append("time", formattedTime)
            fetch(this.action, {
                method: "POST",
                body: formData
            }).then(response => {
                if (response.ok) {
                    document.getElementById("popup-message").style.display = "flex"; // Show pop-up
                    this.reset(); // Reset form after submission
                }
            }).catch(error => console.error("Error:", error));
        });
        
        // Close pop-up function
        function closePopup() {
            document.getElementById("popup-message").style.display = "none";
        }
        
        
        
        