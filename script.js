document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Ensure all fields are filled
    if (!firstName || !lastName || !email || !dob || !age || !gender || !phone || !address) {
        alert("All fields are mandatory!");
        return;
    }

    // Validate phone number (must be exactly 10 digits)
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits!");
        return;
    }

    // Display data below form
    let userDataList = document.getElementById("userData");
    let newData = document.createElement("li");
    newData.innerHTML = `
        <strong>Name:</strong> ${firstName} ${lastName} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Date of Birth:</strong> ${dob} <br>
        <strong>Age:</strong> ${age} <br>
        <strong>Gender:</strong> ${gender} <br>
        <strong>Phone:</strong> ${phone} <br>
        <strong>Address:</strong> ${address}
    `;
    userDataList.appendChild(newData);

    // Show success message
    alert("Data has been successfully entered!");

    // Clear form
    document.getElementById("signupForm").reset();
});
