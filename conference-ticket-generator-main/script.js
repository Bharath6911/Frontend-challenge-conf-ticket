document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const ticket = document.querySelector('.ticket');
  const nameDisplay = document.getElementById('name-display');
  const emailDisplay = document.getElementById('email-display');
  const ticketName = document.getElementById('ticket-name');
  const ticketGithub = document.getElementById('ticket-github');
  const ticketAvatar = document.getElementById('ticket-avatar');
  const avatarInput = document.getElementById('avatar');
  const uploadLabel = document.querySelector('.upload-avatar');

  // Handle file upload via drag and drop
  uploadLabel.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadLabel.style.borderColor = '#ff8e6e';
  });

  uploadLabel.addEventListener('dragleave', function() {
    uploadLabel.style.borderColor = '#5e3be1';
  });

  uploadLabel.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadLabel.style.borderColor = '#5e3be1';
    
    if (e.dataTransfer.files.length > 0) {
      avatarInput.files = e.dataTransfer.files;
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from form
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github-username').value;
    
    // Set values on ticket
    nameDisplay.textContent = name;
    emailDisplay.textContent = email;
    ticketName.textContent = name;
    
    // Format GitHub username (ensure it has @ prefix)
    const formattedGithub = github.startsWith('@') ? github : '@' + github;
    ticketGithub.textContent = formattedGithub;
    
    // Handle avatar upload if provided
    if (avatarInput.files && avatarInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        ticketAvatar.src = e.target.result;
      };
      reader.readAsDataURL(avatarInput.files[0]);
    } else {
      // No avatar uploaded, leave it blank
      ticketAvatar.style.display = 'none';
    }
    
    // Hide form and show ticket
    form.style.display = 'none';
    ticket.style.display = 'block';
  });
});
