
    document.addEventListener('DOMContentLoaded', () => {
      const loginInput = document.getElementById('github-login');
      const fetchButton = document.getElementById('fetch-profile');
      const profileContainer = document.getElementById('profile-container');
      const profileImage = document.getElementById('profile-image');
      const profileName = document.getElementById('profile-name');
      const profileWebsite = document.getElementById('profile-website');

      fetchButton.addEventListener('click', () => {
        const username = loginInput.value.trim();
        if (username) {
          fetch(`https://api.github.com/users/${username}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              profileName.textContent = data.name || data.login; // Use login if name is null
              profileImage.src = data.avatar_url;
              profileWebsite.textContent = data.blog || 'No website available.';
              profileWebsite.innerHTML = data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : 'No website available.';
              profileContainer.style.display = 'flex';
            })
            .catch(error => {
              console.error('Error fetching GitHub user:', error);
              profileName.textContent = 'Error fetching user.';
              profileImage.src = '';
              profileWebsite.textContent = '';
              profileContainer.style.display = 'block'; // Show error message
            });
        } else {
          alert('Please enter a GitHub username.');
        }
      });
    });