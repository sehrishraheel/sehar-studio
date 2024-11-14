document.getElementById('contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
  
    if (name && email && message) {
      const formMessage = document.getElementById('formMessage');
      if (formMessage) {
        formMessage.textContent = "Thank you for reaching out! We will get back to you soon.";
      }
    } else {
      alert("Please fill out all fields.");
    }
  });
  