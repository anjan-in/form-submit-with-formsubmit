document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to button
    const button = document.querySelector('.btn');
    button.addEventListener('click', function(e) {
        const circle = document.createElement('div');
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        circle.style.width = circle.style.height = '1px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.classList.add('ripple');
        
        const ripple = document.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }
        
        this.appendChild(circle);
        
        setTimeout(function() {
            circle.remove();
        }, 600);
    });

    // Form submission handling
    const form = document.getElementById('contactForm');
    const loadingSpinner = document.querySelector('.loading');
    const btnText = document.querySelector('.btn-text');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    
    form.addEventListener('submit', function(e) {
        // This would normally not be needed with FormSubmit's direct handling,
        // but we're adding it for visual feedback
        loadingSpinner.style.display = 'inline-block';
        form.classList.add('form-submitted');
        
        // We're not preventing default submission since FormSubmit handles it
        // This is just for animation purposes
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            successMessage.style.display = 'block';
            form.reset();
            
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.classList.remove('form-submitted');
            }, 5000);
        }, 2000);
    });

    // Field animation on focus
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
});