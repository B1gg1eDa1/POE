// 1. Image Gallery/Slider for Food Displays
document.addEventListener('DOMContentLoaded', function() {
    const foodImages = [
        'images/fire-pan.jpg',
        'images/pizza.jpg', 
        'images/spagg.jpg',
        'images/curry.jpg'
    ];
    
    if (document.querySelector('.image-p1')) {
        let currentImage = 0;
        const mainImage = document.querySelector('.image-p1');
        
        function cycleImages() {
            currentImage = (currentImage + 1) % foodImages.length;
            mainImage.src = foodImages[currentImage];
            mainImage.alt = "Kasi Bistro specialty dish " + (currentImage + 1);
        }
        
     
        setInterval(cycleImages, 5000);
        
       
        mainImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        mainImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

   
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0a500';
            this.style.color = '#1b1b1b';
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#1b1b1b';
            this.style.color = '#fff';
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

  
    function animateOnScroll() {
        const sections = document.querySelectorAll('.content-p1, .content-p2');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // 5. Social Media Share Buttons
    function initSocialShare() {
        const shareData = {
            title: 'Kasi Bistro - Elevated Taste, Rooted in Home',
            text: 'Check out this amazing restaurant in Polokwane!',
            url: window.location.href
        };
        
        document.querySelectorAll('.social-icons a').forEach(icon => {
            icon.addEventListener('click', function(e) {
                if (this.classList.contains('facebook-link')) {
                    e.preventDefault();
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, 'facebook-share-dialog', 'width=800,height=600');
                }
            });
        });
        
    
        const whatsappLinks = document.querySelectorAll('.whatsapp-link');
        whatsappLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (confirm('Copy our WhatsApp number to your clipboard?')) {
                    navigator.clipboard.writeText('+27123456789');
                    alert('Number copied! Open WhatsApp to message us.');
                    e.preventDefault();
                }
            });
        });
    }

  
    animateOnScroll();
    initSocialShare();
});