document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('content');
  const submitButton = document.getElementById('submitButton');
  let linkListContainer;
  let newLinkForm;
  let successMessage;

  // Function to create a link element
  function createLinkElement(title, url, author) {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');

      const linkElement = document.createElement('a');
      linkElement.href = url;
      linkElement.textContent = title;
      linkElement.target = "_blank";

      const details = document.createElement('p');
      details.classList.add('details');
      details.textContent = `Submitted by ${author} on ${getCurrentDateAndTime()}`;

      newsItem.appendChild(linkElement);
      newsItem.appendChild(details);
      return newsItem;
  }

  // Function to get current date and time
  function getCurrentDateAndTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  // Function to display the list of links
  function displayLinks(links) {
      linkListContainer.innerHTML = ''; // Clear existing links
      links.forEach(link => {
          const linkElement = createLinkElement(link.title, link.url, link.author);
          linkListContainer.appendChild(linkElement);
      });
  }

  // Initial list of links
  const initialLinks = [
      { title: "CSULB Home Page", url: "http://www.csulb.edu", author: "CSULB" },
      { title: "Information Systems Department", url: "https://www.csulb.edu/college-of-business/information-systems", author: "IS Dept" },
      { title: "CSULB COB Main Page", url: "https://www.csulb.edu/college-of-business", author: "Student" }
  ];

  // Create container for the link list
  linkListContainer = document.createElement('div');
  linkListContainer.id = 'linkListContainer';
  displayLinks(initialLinks);
  contentDiv.appendChild(linkListContainer);

  // Function to handle submit button click
  submitButton.addEventListener('click', function() {
      // Remove existing form and success message if present
      if (newLinkForm) {
          newLinkForm.remove();
      }
      if (successMessage) {
          successMessage.remove();
      }

      // Create the new link form
      newLinkForm = document.createElement('form');
      newLinkForm.id = 'newLinkForm';
      newLinkForm.innerHTML = `
          <div>
              <label for="author">Author:</label>
              <input type="text" id="author" name="author" required>
          </div>
          <div>
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" required>
          </div>
          <div>
              <label for="url">URL:</label>
              <input type="url" id="url" name="url" required placeholder="http:// or https://">
          </div>
          <button type="submit" class="btn btn-primary">Submit Link</button>
      `;

      contentDiv.prepend(newLinkForm);

      // Handle form submission
      newLinkForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent default form submission

          const authorInput = document.getElementById('author');
          const titleInput = document.getElementById('title');
          const urlInput = document.getElementById('url');

          const author = authorInput.value.trim();
          const title = titleInput.value.trim();
          let url = urlInput.value.trim();

          if (!author || !title || !url) {
              alert("All fields are mandatory.");
              return;
          }

          // Automatically add "http://" if URL doesn't start with it or "https://"
          if (!url.startsWith("http://") && !url.startsWith("https://")) {
              url = "http://" + url;
          }

          // Create the new link element and add it to the top of the initial links array
          const newLink = { title: title, url: url, author: author };
          initialLinks.unshift(newLink);
          displayLinks(initialLinks);

          // Remove the form
          newLinkForm.remove();
          newLinkForm = null;

          // Display success message
          successMessage = document.createElement('div');
          successMessage.classList.add('alert', 'alert-success');
          successMessage.textContent = "New link submitted successfully!";
          contentDiv.prepend(successMessage);

          // Remove success message after 2 seconds
          setTimeout(() => {
              if (successMessage) {
                  successMessage.remove();
                  successMessage = null;
              }
          }, 2000);
      });
  });
});