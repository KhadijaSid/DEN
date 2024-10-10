document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').textContent = '';
    

   
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

 
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }
    }

    if (date === '') {
        document.getElementById('dateError').textContent = 'Date is required.';
        isValid = false;
    }

  
    if (guests === '' || guests < 1) {
        document.getElementById('guestsError').textContent = 'Number of guests must be at least 1.';
        isValid = false;
    }


    if (isValid) {
        document.getElementById('successMessage').textContent = 'Reservation successful!';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('reservationForm').reset(); // Reset the form
    }
});
