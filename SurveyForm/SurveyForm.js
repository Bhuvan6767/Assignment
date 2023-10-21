document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('surveyForm');
  var submitButton = document.querySelector('.submit-button');

  form.addEventListener('submit', function (event) {
      var firstName = document.getElementById('firstname').value.trim();
      var lastName = document.getElementById('lastname').value.trim();
      var dob = document.getElementById('dateofbirth').value;
      var country = document.getElementById('country').value;
      var profession = document.getElementById('profession').value.trim();
      var email = document.getElementById('email').value.trim();
      var mobile = document.getElementById('mobile').value.trim();
      var genderOptions = document.getElementsByName('gender');
      var gender;
      var isValid = true;
      
      if (firstName === '') {
          document.getElementById('firstNameError').textContent = 'Please fill in the first name';
          isValid = false;
      } else {
          document.getElementById('firstNameError').textContent = '';
      }

      if (lastName === '') {
          document.getElementById('lastNameError').textContent = 'Please fill in the last name';
          isValid = false;
      } else {
          document.getElementById('lastNameError').textContent = '';
      }

      if (dob === '') {
          document.getElementById('dobError').textContent = 'Please select a valid date of birth';
          isValid = false;
      } else {
          document.getElementById('dobError').textContent = '';
      }

      if (country === '') {
          document.getElementById('countryError').textContent = 'Please select a country';
          isValid = false;
      } else {
          document.getElementById('countryError').textContent = '';
      }

      var isChecked = false;
      for (var i = 0; i < genderOptions.length; i++) {
          if (genderOptions[i].checked) {
              isChecked = true;
              gender = genderOptions[i].value;
              break;
          }
      }

      if (!isChecked) {
          document.getElementById('genderError').textContent = 'Please select a gender';
          isValid = false;
      } else {
          document.getElementById('genderError').textContent = '';
      }

      if (profession === '') {
          document.getElementById('professionError').textContent = 'Please fill in the profession';
          isValid = false;
      } else {
          document.getElementById('professionError').textContent = '';
      }

      if (email === '') {
          document.getElementById('emailError').textContent = 'Please fill in the email';
          isValid = false;
      } else {
          document.getElementById('emailError').textContent = '';
      }

      if (mobile === '') {
          document.getElementById('mobileError').textContent = 'Please fill in the mobile number';
          isValid = false;
      } else {
          document.getElementById('mobileError').textContent = '';
      }

      if (isValid) {
        var displayText = `Your details are as follows\nFirst Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

        alert(displayText);
        form.reset(); 
      }
  });
});
 
