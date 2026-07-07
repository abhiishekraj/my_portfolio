const toggle = document.getElementById('menu-toggle');
if (toggle){
    toggle.addEventListener("change",()=>{
        document.body.classList.toggle("no-scroll",toggle.checked);
    });
}


const tabs = document.querySelectorAll(".content");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        if(toggle && toggle.checked) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }
    });
});

const words=[
    "Full-Stack Developer",
    "Video Editor",
    "Freelancer",

]
const typingText = document.getElementById("typing-span");
let wordIndex =0;
let charIndex = 0;
let isDeleting=false;
let typingDelay=100;
let erasingDelay=70;
let nextWordDelay =950;
const type =() =>{
    const currentWord= words[wordIndex];
    if(!isDeleting){
        typingText.textContent=currentWord.substring(0,charIndex +1);
        charIndex++;

        if(charIndex== currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);

        }
        else{
            setTimeout(type, typingDelay);
        }

    }else {
        typingText.textContent = currentWord.substring(0, charIndex -1);
        charIndex--;

        if (charIndex ===0){
            isDeleting = false;
            wordIndex = (wordIndex +1) %words.length;
            setTimeout(type,500);
        }
        else{
            setTimeout(type,erasingDelay);
            }
        }
    };
    document.addEventListener("DOMContentLoaded",()=>{
        if (words?.length)type();
    });

    const navlinks =document.querySelectorAll(".navlink");
    const tabContent =document.querySelectorAll(".content");
    navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // active nav change
        navlinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        
        tabContent.forEach((tab) => tab.classList.remove("active"));

    
        const tabName = link.dataset.tab;

        
        document.getElementById(tabName).classList.add("active");
        
        // Close mobile menu
        if(toggle && toggle.checked) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }
        
        if (tabName === "services"){
            const servicesList =[
                {
                id:1,
                icon:"ph-code",
                text:"Full Stack Development",
                para:"I build a responsive and modern websites using the latest technologies like HTML,CSS,Javascript,React and tailwind",

            },
            {
                 id:2,
                icon:"ph-paint-brush",
                text:" Frontend Development",
                para:" Creating visually appealing and user-friendly interfaces with a focus on responsive design, accessibility, and seamless user experience.",

            },
            {
                 id:3,
                icon:"ph-trend-up",
                text:"Backend Development",
                para:" Building robust and scalable server-side applications using Node.js, Express, and MongoDB, ensuring efficient data management and seamless integration with frontend components.",
            },
            {
                id:4,
                icon:"ph-code",
                text:"E commerce Development",
                para:"I create secure and user-friendly e-commerce websites with features like product catalogs, shopping carts, payment gateways, and order management systems.",   
            },
            {
                 id:5,
                icon:"ph-paint-brush",
                text:"API Integration and Development ",
                para:"I integrate third-party APIs to enhance website functionality and develop custom APIs for seamless communication between frontend and backend systems.",

            },
            {
                 id:6,
                icon:"ph-trend-up",
                text:"Website Development and maintenance",
                para:"I build and maintain websites, ensuring they are up-to-date, secure, and optimized for performance. I handle regular updates, bug fixes, and improvements to keep the website running smoothly.",
            }
            ];
        const services = document.getElementsByClassName("service-list");
        const innerContent =servicesList.map((l)=>{
            return ` 
            <div class="box" key = ${l?.id}>
                    <div class="head-icon">
                        <i class="ph ${l?.icon}"></i>
                        <span>
                        <i class="ph ph-arrow-down-right"></i>
                        </span>
                    </div>
                    <div> 
                        <h3>${l.text}</h3>
                        <p>${l.para}</p>
                    </div>
                
            </div>`;
        }) .join("");
        Array.from(services).forEach((ele) =>{
            ele.innerHTML = innerContent;
        })
        
        } else if (tabName === "projects") {
            const projectsGrid = document.querySelector(".projects-grid");
            const projectsList = [
                {
                    id: 1,
                    title: "Gym Registration Website",
                    icon: "fa-solid fa-dumbbell",
                    tech: "React • Node.js • MongoDB",
                    description: "A comprehensive gym management system with user registration, membership plans, and workout tracking. Features include admin dashboard, member profiles, and payment integration.",
                    github: "https://github.com",
                    demo: "https://example.com"
                },
                {
                    id: 2,
                    title: "Responsive Portfolio Website",
                    icon: "fa-solid fa-briefcase",
                    tech: "HTML5 • CSS3 • JavaScript",
                    description: "A modern, fully responsive portfolio website with smooth animations, dark theme, and mobile-first design. Includes sections for projects, skills, experience, and contact information.",
                    github: "https://github.com",
                    demo: "https://example.com"
                }
            ];
            
            const projectsContent = projectsList.map((project) => {
                return `
                <div class="project-card" key=${project?.id}>
                    <div class="project-image">
                        <i class="${project?.icon}"></i>
                    </div>
                    <div class="project-content">
                        <h3>${project?.title}</h3>
                        <p class="project-tech">${project?.tech}</p>
                        <p class="project-description">${project?.description}</p>
                        <div class="project-links">
                            <a href="${project?.github}" class="btn-link">
                                <i class="fa-brands fa-github"></i> Code
                            </a>
                            <a href="${project?.demo}" class="btn-link">
                                <i class="fa-solid fa-globe"></i> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                `;
            }).join("");
            
            if(projectsGrid) {
                projectsGrid.innerHTML = projectsContent;
            }
        }
    });
    
});
// Contact Form Handler with EmailJS
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    
    if(contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
           
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
            
            
            if(!name || !email || !subject || !message) {
                showMessage("Please fill in all required fields");
                return;

            }
            const phoneDigits = phone.replace(/\D/g, ""); 

            if(phone && phoneDigits.length !== 10) {
                showMessage("Please enter a valid 10-digit mobile number");
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                showMessage("Please enter a valid email address");
                 return;
            };

           
            const submitBtn = contactForm.querySelector(".submit-btn");
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            
            const templateParams = {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            };

            emailjs.send("service_6fkj47d", "template_xlmkoxv", templateParams)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    showMessage("Message sent successfully!", "success");
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    showMessage("Failed to send message. Please check console for error.", "error");
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
function showMessage(text, type = "error") {
    const modal = document.getElementById("msgModal");
    const modalBox = document.getElementById("modalBox");
    const modalIcon = document.getElementById("modalIcon");
    const modalText = document.getElementById("modalText");

    modalText.innerText = text;
    modalBox.className = `modal-content ${type}`;
    
    
    modalIcon.className = type === "success" 
        ? "fa-solid fa-circle-check" 
        : "fa-solid fa-circle-exclamation";


    modal.classList.add("show");
    document.body.style.overflow = "hidden"; 

    
    setTimeout(() => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto"; 
    },2000);
}