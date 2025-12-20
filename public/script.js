const API_URL = '/api/solutions';

// DOM elements
const solutionForm = document.getElementById('solutionForm');
const solutionsList = document.getElementById('solutionsList');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const solutionIdInput = document.getElementById('solutionId');

// Load solutions on page load
document.addEventListener('DOMContentLoaded', loadSolutions);

// Form submit
solutionForm.addEventListener('submit', handleFormSubmit);

// Cancel button
cancelBtn.addEventListener('click', resetForm);

// Load all solutions
async function loadSolutions() {
    try {
        const response = await fetch(API_URL);
        const solutions = await response.json();
        
        if (solutions.length === 0) {
            solutionsList.innerHTML = '<p style="color: white; text-align: center;">No solutions yet. Be the first to add one!</p>';
            return;
        }
        
        displaySolutions(solutions);
    } catch (error) {
        console.error('Error loading solutions:', error);
        solutionsList.innerHTML = '<p style="color: white;">Error loading solutions. Please try again.</p>';
   }
}

// Display solutions
function displaySolutions(solutions) {
    solutionsList.innerHTML = solutions.map(solution => `
        <div class="solution-card">
            <div class="solution-header">
                <h3 class="solution-title">${solution.problemTitle}</h3>
                <div class="solution-meta">
                    <span class="badge badge-contest">🏆 ${solution.contestName}</span>
                    <span class="badge badge-difficulty badge-${solution.difficulty.toLowerCase()}">${solution.difficulty}</span>
                    <span class="badge badge-language">💻 ${solution.language}</span>
                    <span class="badge badge-author">👤 ${solution.author}</span>
                </div>
            </div>
            
            <div class="solution-code">
                <pre><code>${solution.code}</code></pre>
            </div>
            
            <p class="solution-explanation"><strong>💡 Explanation:</strong> ${solution.explanation}</p>
            
            <div class="solution-complexity">
                <div class="complexity-item">⏱️ Time: <strong>${solution.timeComplexity || 'N/A'}</strong></div>
                <div class="complexity-item">💾 Space: <strong>${solution.spaceComplexity || 'N/A'}</strong></div>
            </div>
            
            <p class="solution-date">📅 ${new Date(solution.createdAt).toLocaleDateString()}</p>
            
            <div class="solution-actions">
                <button class="btn-edit" onclick="editSolution('${solution._id}')">✏️ Edit</button>
                <button class="btn-delete" onclick="deleteSolution('${solution._id}')">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

// Handle form submit
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const solutionId = solutionIdInput.value;
    const solutionData = {
        contestName: document.getElementById('contestName').value,
        problemTitle: document.getElementById('problemTitle').value,
        difficulty: document.getElementById('difficulty').value,
        language: document.getElementById('language').value,
        code: document.getElementById('code').value,
        explanation: document.getElementById('explanation').value,
        author: document.getElementById('author').value,
        timeComplexity: document.getElementById('timeComplexity').value,
        spaceComplexity: document.getElementById('spaceComplexity').value
    };
    
    try {
        let response;
        
        if (solutionId) {
            response = await fetch(`${API_URL}/${solutionId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(solutionData)
            });
        } else {
            response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(solutionData)
            });
        }
        
        if (response.ok) {
            resetForm();
            loadSolutions();
        } else {
            alert('Error saving solution. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error saving solution. Please try again.');
    }
}

// Edit solution
async function editSolution(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const solution = await response.json();
        
        solutionIdInput.value = solution._id;
        document.getElementById('contestName').value = solution.contestName;
        document.getElementById('problemTitle').value = solution.problemTitle;
        document.getElementById('difficulty').value = solution.difficulty;
        document.getElementById('language').value = solution.language;
        document.getElementById('code').value = solution.code;
        document.getElementById('explanation').value = solution.explanation;
        document.getElementById('author').value = solution.author;
        document.getElementById('timeComplexity').value = solution.timeComplexity || '';
        document.getElementById('spaceComplexity').value = solution.spaceComplexity || '';
        
        formTitle.textContent = '✏️ Edit Solution';
        submitBtn.textContent = 'Update Solution';
        cancelBtn.style.display = 'inline-block';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error loading solution:', error);
        alert('Error loading solution. Please try again.');
    }
}

// Delete solution
async function deleteSolution(id) {
    if (!confirm('Are you sure you want to delete this solution?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            loadSolutions();
        } else {
            alert('Error deleting solution. Please try again.');
        }
    } catch (error) {
        console.error('Error deleting solution:', error);
        alert('Error deleting solution. Please try again.');
    }
}

// Reset form
function resetForm() {
    solutionForm.reset();
    solutionIdInput.value = '';
    formTitle.textContent = '➕ Add New Solution';
    submitBtn.textContent = 'Add Solution';
    cancelBtn.style.display = 'none';
}
