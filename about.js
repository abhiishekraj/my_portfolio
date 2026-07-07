const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded",()=>{
    if (aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        e.preventDefault();
        
        aboutTabs.forEach((a) =>{
            a.classList.remove("active");
        });
        tab.classList.add("active");
        
        aboutContent.forEach((c)=>{
            c.classList.remove("active");
        });
        
        const activeTab =tab.dataset.section;
        const activeContent = document.getElementById(activeTab);
        activeContent.classList.add("active");
        
        // Smooth scroll to content on mobile
        if(window.innerWidth < 768) {
            setTimeout(() => {
                activeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");
            const experienceList = [

            {
                id: 1,
                date: " Present",
                position: "Full Stack Developer Intern",
                company: "Tech Solutions Pvt. Ltd.",
                details: "Worked on building responsive web applications using HTML, CSS, JavaScript, and React. Improved UI/UX and optimized website performance."
            },
            {
                id: 2,
                date: "2025 - 2026",
                position: "Freelance Developer & Video Editor",
                company: "Self-Employed",
                details: "Developed modern websites for clients and created engaging video content. Focused on user-friendly design and high-quality visuals."
            },
            {
                id: 3,
                date: "2024 - 2025",
                position: "UI/UX Designer",
                company: "Self-Employed",
                details: "Developed modern websites for clients and created engaging video content. Focused on user-friendly design and high-quality visuals."
            },

        ];
        const experienceContent = experienceList.map((ele)=>{
             return`
            
            <div class="experience-box" key =${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
            `
        }).join("");
        if(experiences){
            experiences.innerHTML = experienceContent;
        }
        }
        else if(activeTab === "education"){ 
            const educations = document.querySelector(".education-list");
            const educationList = [
                {
                    id: 1,
                    date: "2025- 2027",
                    degree: "MCA",
                    institute: "Chandigarh University , Unnao",
                    details: "Pursued Master of Computer Applications with focus on web development, database management, and software engineering principles."
                },
                {
                    id: 2,
                    date: "2022 - 2025",
                    degree: "BCA",
                    institute: "Araybhatth University , Patna",
                    details: "Completed Bachelor of Computer Applications with strong foundation in programming and data structures."
                },
                {
                    id: 3,
                    date: "2020 - 2022",
                    degree: "High School",
                    institute: "Gaya college, Gaya",
                    details: "Completed high school education with a focus on science and mathematics."
                }
            ];
            const educationContent = educationList.map((ele)=>{
                return`
                <div class="education-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.institute}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `
            }).join("");
            if(educations){
                educations.innerHTML = educationContent;
            }
        }
        else if(activeTab === "skills"){
            const skillsList = document.querySelector(".skills-list");
            const skills = [
                { id: 1, name: "HTML5", icon: "fa-brands fa-html5", level: "Expert" },
                { id: 2, name: "CSS3", icon: "fa-brands fa-css3", level: "Expert" },
                { id: 3, name: "JavaScript", icon: "fa-brands fa-js", level: "Advanced" },
                { id: 4, name: "React", icon: "fa-brands fa-react", level: "Advanced" },
                { id: 5, name: "Node.js", icon: "fa-brands fa-node", level: "Intermediate" },
                { id: 6, name: "Python", icon: "fa-brands fa-python", level: "Intermediate" },
                { id: 7, name: "MongoDB", icon: "fa-solid fa-leaf", level: "Intermediate" },
                { id: 8, name: "Git", icon: "fa-brands fa-git", level: "Advanced" }
            ];
            const skillsContent = skills.map((skill) => {
                return `
                <div class="skill-item" key=${skill?.id}>
                    <i class="${skill?.icon}"></i>
                    <p>${skill?.name}</p>
                    <small>${skill?.level}</small>
                </div>
                `
            }).join("");
            if(skillsList){
                skillsList.innerHTML = skillsContent;
            }
        }
    else if(activeTab === "about-me"){
        const myInfo = document.querySelector(".my-info");
        const infoList = [
            {
                id: 1,
                Key: "Name",
                value: "Abhishek Yadav"
            },
            {
                id: 2,
                Key: "Email",
                value: "itzabhi4169.com"},
                {
                id: 3,
                Key: "Phone",
                value: "+91 7491018988"
                },
                {
                id: 4,
                Key: " Current Location",
                value: "Luncknow, India "
                },
                {
                id: 5,
                Key: "Experience",
                value: "Fresher"
                },
                {
                id: 6,
                Key: " Permanent Address",
                value: "Gaya, India"
            }
        ];
        const infoContent = infoList.map((ele)=>{
            return`
            <div class="info-list" key=${ele?.id}>
                <h3>${ele?.Key}</h3>
                <p>${ele?.value}</p>
            </div>
            `
        }).join("");
        if(myInfo){
            myInfo.innerHTML = infoContent;
        }
    }
    });
});