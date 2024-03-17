 document.addEventListener('DOMContentLoaded', () => {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberCheckbox = document.getElementById('checkbox');
            const submitButton = document.getElementById('submit');
            const existingButton = document.getElementById('existing');

            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                existingButton.style.display = 'block';
            }

            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                if (rememberCheckbox.checked) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }

                alert('Logged in as ' + username);
            });

            existingButton.addEventListener('click', () => {
                const username = localStorage.getItem('username');
                alert('Logged in as ' + username);
            });
        });