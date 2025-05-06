// Shared functions between all pages
function backupData() {
    const users = localStorage.getItem('grow-money-users');
    const transactions = localStorage.getItem('grow-money-transactions');
    const settings = localStorage.getItem('grow-money-settings');
    
    const data = {
        users: JSON.parse(users),
        transactions: JSON.parse(transactions),
        settings: JSON.parse(settings),
        backupDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `grow-money-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    document.getElementById('last-backup').value = new Date().toLocaleString();
    alert('Backup created successfully!');
}

function resetSystem() {
    if(confirm('Are you sure you want to reset all system data? This cannot be undone!')) {
        localStorage.clear();
        alert('System has been reset. Redirecting to login page...');
        window.location.href = 'index.html';
    }
}
