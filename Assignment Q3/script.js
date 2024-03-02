document.addEventListener('DOMContentLoaded', function() {
    const applicationForm = document.getElementById('jobApplicationForm');
    const viewApplicationsBtn = document.getElementById('viewApplications');
    let applications = []; 

    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        if (!validateForm()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        
        const formData = new FormData(applicationForm);
        const application = {};
        for (const [key, value] of formData.entries()) {
            application[key] = value;
        }
        applications.push(application); 

        console.log('Application submitted:', application);
        applicationForm.reset(); 
        alert('Application successfully submitted!');
    });

    viewApplicationsBtn.addEventListener('click', function() {
        displayApplications(applications);
    });

    function validateForm() {
    
        const email = document.getElementById('email').value;
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Invalid email format.');
            return false;
        }

        

        return true; 
    }

    function displayApplications(applications) {
        const applicationsTable = document.getElementById('applicationsTable');
        applicationsTable.innerHTML = ''; 

        
        const table = document.createElement('table');
        table.className = 'applications-table';
        const headerRow = table.insertRow();
        const headers = ['Name', 'Email', 'Phone', 'Resume', 'Cover Letter'];
        headers.forEach(headerText => {
            const headerCell = document.createElement('th');
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });


        applications.forEach(app => {
            const row = table.insertRow();
            headers.forEach(header => {
                const cell = row.insertCell();
                const text = document.createTextNode(app[header.toLowerCase()] || '');
                cell.appendChild(text);
            });
        });

        applicationsTable.appendChild(table);
    }
});
