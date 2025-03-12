// Main JavaScript file for client-side functionality
document.addEventListener('DOMContentLoaded', () => {
	// Fetch and display users
	const fetchUsers = async () => {
		try {
			const response = await fetch('/api/users');
			const users = await response.json();
			displayUsers(users);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	// Display users in the UI
	const displayUsers = users => {
		const userList = document.getElementById('userList');
		if (!userList) return;

		userList.innerHTML = users
			.map(
				user => `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
            </div>
        `
			)
			.join('');
	};

	// Handle user form submission
	const userForm = document.getElementById('userForm');
	if (userForm) {
		userForm.addEventListener('submit', async e => {
			e.preventDefault();
			const formData = new FormData(userForm);

			try {
				const response = await fetch('/api/users', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: formData.get('name'),
						email: formData.get('email'),
					}),
				});

				if (response.ok) {
					userForm.reset();
					fetchUsers();
				}
			} catch (error) {
				console.error('Error creating user:', error);
			}
		});
	}

	// Initial fetch
	fetchUsers();
});
