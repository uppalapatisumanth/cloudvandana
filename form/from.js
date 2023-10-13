document.addEventListener('DOMContentLoaded', function () {
  const surveyForm = document.getElementById('surveyForm');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const summaryPopup = document.getElementById('summaryPopup');
  const summary = document.getElementById('summary');
  const closePopup = document.getElementById('closePopup');

  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('Lastname').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('MoblieNumber').value;

    // Perform validation here (you can customize this part)

    // Construct a summary message
    const summaryMessage = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender ? gender.value : 'N/A'}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    // Display the summary in a popup
    summary.innerHTML = summaryMessage;
    summaryPopup.style.display = 'block';
  });

  closePopup.addEventListener('click', function () {
    summaryPopup.style.display = 'none';
    surveyForm.reset();
  });

  resetBtn.addEventListener('click', function () {
    surveyForm.reset();
  });
});
