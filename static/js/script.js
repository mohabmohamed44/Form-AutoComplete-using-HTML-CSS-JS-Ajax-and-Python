document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const formMessage = document.getElementById('form-message');
    const autocompleteList = document.getElementById('autocomplete-list');

    usernameInput.addEventListener('input', () => {
        const query = usernameInput.value;
        if (query.length < 2) {
            autocompleteList.innerHTML = '';
            return;
        }

        fetch(`/autocomplete?query=${query}`)
            .then(response => response.json())
            .then(data => {
                autocompleteList.innerHTML = '';
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = item;
                    div.addEventListener('click', () => {
                        usernameInput.value = item;
                        autocompleteList.innerHTML = '';
                    });
                    autocompleteList.appendChild(div);
                });
            })
            .catch(error => console.error('Error fetching autocomplete data:', error));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !email || !password) {
            formMessage.textContent = 'All fields are required.';
            formMessage.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green';
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
