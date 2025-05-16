// Anonymous function for retrieving and displaying a random user
const grabRandomUser = () => {
    // Fetching random user data from API
    fetch("https://randomuser.me/api/")
        .then(response => {
            if (!response.ok) {
                // Check for HTTP errors (e.g., 404, 500)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => { // Renamed 'users' to 'data' to better reflect the full response object
            // The API returns an object with a 'results' array
            const user = data.results[0]; // Access te first user from the 'results' array

            // Creating DOM elements for user properties
            const firstNameElement = document.createElement("h2");
            firstNameElement.textContent = user.name.first;
            const lastNameElement = document.createElement("h2");
            lastNameElement.textContent = user.name.last;
            const emailElement = document.createElement("p");
            emailElement.textContent = `Email: ${user.email}`;
            const phoneElement = document.createElement("p");
            phoneElement.textContent = `Phone: ${user.phone}`;
            const cityElement = document.createElement("p");
            cityElement.textContent = `City: ${user.location.city}`;
            const stateElement = document.createElement("p");
            stateElement.textContent = `State: ${user.location.state}`;
            const postcodeElement = document.createElement("p");
            // The Random User API can return postcode as a string or number, convert to string for safety
            postcodeElement.textContent = `Postcode: ${user.location.postcode}`;

            // Clear previous user data
            const userElement = document.getElementById("user");
            userElement.innerHTML = "";

            // Add user info to the page
            userElement.appendChild(firstNameElement);
            userElement.appendChild(lastNameElement);
            userElement.appendChild(emailElement);
            userElement.appendChild(phoneElement); 
            userElement.appendChild(cityElement);
            userElement.appendChild(stateElement);
            userElement.appendChild(postcodeElement);

            //Add a profile picture
            if (user.picture && user.picture.large) {
                const userImage = document.createElement("img");
                userImage.src = user.picture.large;
                userImage.alt = `${user.name.first} ${user.name.last} profile picture`;
                userImage.style.borderRadius = '50%'; // Make it round
                userImage.style.maxWidth = '100px'; // Set a max width
                userImage.style.display = 'block'; // Block display for centering/margin
                userImage.style.margin = '10px auto'; // Center it
                userElement.insertBefore(userImage, firstNameElement); // Insert before first name
            }

        })
        .catch(err => {
            console.error("Error fetching random user:", err.message);
            const userElement = document.getElementById("user");
            userElement.innerHTML = `<p">Failed to load user data: ${err.message}. Please try again.</p>`;
        });
};

// Grab a new user when clicking the button
document.addEventListener('DOMContentLoaded', () => { // Ensure the button exists before attaching event listener
    document.getElementById("grabButton").addEventListener("click", grabRandomUser);
});
