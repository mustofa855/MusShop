<template>
    <div class="contact-container">
      <h2>Contact Us</h2>
      <p>Jika Anda memiliki pertanyaan, umpan balik, atau ingin berbicara dengan tim kami, silakan hubungi kami melalui formulir di bawah ini. Kami siap membantu Anda!</p>
  
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nama:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Pesan:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const formData = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    // Implement logic to send the form data to your backend or handle as needed
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    text-align: left;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #0891b2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0e7490;
  }
  </style>
  