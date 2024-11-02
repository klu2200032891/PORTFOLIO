let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;
        if(tab !== null && tab !== active){

            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})
// Get modal elements
const modal = document.getElementById('certificate-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

// Add click event to each certificate item
document.querySelectorAll('.certificate-item img').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'flex';  // Show modal
        modalImg.src = this.src;       // Set modal image to clicked certificate
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';      // Hide modal
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click menu
});

document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Ctrl+X, Ctrl+S, and Ctrl+U
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});
