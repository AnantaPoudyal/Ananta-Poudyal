 // Portfolio JSON data
        const portfolioData = {
            hero: {
                name: "Hi, I'm Ananta",
                description: "A passionate web and mobile application developer building applications with php, Laravel, android studio (java), and ASP.NET.",
                image: "./images/my.jpeg",
                buttonText: "Get in Touch"
            },
            about: {
                title: "About Me",
                description: "                I am a web and mobile application developer with begineer experience in php, Laravel, ASP.NET and android studio (java). I love building dynamic, functional, and visually appealing websites. My passion lies in continuous learning and staying updated with the latest trends in technology.",
                
                image: "./images/my.jpeg",
                tags: ["Web Developer", "Full Stack", "Problem Solver"]
            },
            education: [
                { institution: "Patan Multiple Campus", degree: "Bachelor of Computer Application", location: "Patan Dhoka, Lalitpur", graduation: "Expected Graduation: Fall 2025", icon: "fas fa-university", color: "purple" },
                { institution: "Capital Secondary School", degree: "High School (+2)", location: "Koteshwor, Kathmandu", graduation: "", icon: "fas fa-school", color: "pink" }
            ],
          
            footer: {
                about: "I’m a web developer passionate about building beautiful, functional, and modern web applications. Always eager to learn new technologies and enhance my skills.",
                quickLinks: [
                    { text: "About", href: "#about" },
                    { text: "Projects", href: "#projects" },
                    { text: "Education", href: "#education" },
                    { text: "Contact", href: "#contact" }
                ],
                contact: {
                    email: "anantapoudyal24@gmail.com",
                    social: [
                        { icon: "fab fa-linkedin", href: "#" },
                        { icon: "fab fa-github", href: "#" },
                        { icon: "fab fa-twitter", href: "#" }
                    ]
                },
                copyright: "© 2025 Ananta Poudyal. All rights reserved."
            }
        };
// Projects data
// Projects data with dynamic SVG selection
const projects = [
    { 
        title: "Laravel Sample", 
        description: "A simple sample project based on Laravel", 
        technologies: "HTML, CSS, JavaScript, Laravel", 
        databases: "MySQL",
        svg:`
        <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>laravel</title> <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path> </g></svg>
        `
    },
    { 
        title: "Cloth Recommendation System", 
        description: "Online Cloth Recommendation System", 
        technologies: "HTML, CSS, JavaScript, Django", 
        databases: "MySQL",
        svg: `
        <svg viewBox="0 0 512 512" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#3B4652;} .st1{fill:#2B79C2;} </style> <g> <path class="st0" d="M387.5,326.6h72.3V196.9c0-75.4-70.6-110-120.1-123.6V38c0-17.5-167.4-17.5-167.4,0v35.4 C122.8,86.9,52.2,121.5,52.2,196.9v129.7h72.3V188.9c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7v31.9c41.9-7.8,81-6.4,116.5,4.1 c37.2,9.6,76.9,10.7,118.4,3.1v-39.1c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7V326.6z"></path> <path class="st0" d="M251.4,286.5c-0.1,0-0.2,0-0.2-0.1c-34.1-10.1-71.9-11.3-112.6-3.3v186.8c0,9.5,7.7,17.2,17.2,17.2h200.5 c9.5,0,17.2-7.7,17.2-17.2V290.4c-18.2,3.2-36.1,4.8-53.6,4.8C296.3,295.1,273.4,292.3,251.4,286.5z"></path> <path class="st1" d="M251.4,238.4c-0.1,0-0.2,0-0.2-0.1c-34.1-10.1-71.9-11.3-112.6-3.3v33.9c41.9-7.8,81-6.5,116.5,4.1 c37.2,9.6,76.9,10.7,118.4,3.1v-34c-18.2,3.2-36.1,4.8-53.6,4.8C296.3,246.9,273.4,244.1,251.4,238.4z"></path> <path class="st1" d="M40.2,364.7c0,4.5,3.6,8.1,8.1,8.1h75.1c0.4,0,0.7,0,1.1-0.1v-32.1H40.2V364.7z"></path> <path class="st1" d="M387.5,340.6v32.1c0.4,0,0.7,0.1,1.1,0.1h75.2c4.5,0,8.1-3.6,8.1-8.1v-24.1H387.5z"></path> </g> </g></svg>`
    },
    { 
        title: "Food Ordering System", 
        description: "Online Food Ordering System", 
        technologies: "HTML, CSS, JavaScript, ASP.NET", 
        databases: "MySQL",
        svg:`
        <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M774.8 327.8c-50.6-4.8-97.3 4.3-131 22.7 15.9 20.3 26.1 52.1 26.1 87.9 0 29.2-6.8 55.7-17.9 75.5 28.3 16.9 64.5 28.8 104.6 32.6 96.7 9.2 179.2-32.4 184.2-92.8s-69.3-116.7-166-125.9z" fill="#FFB89A"></path><path d="M67.2 494l1 31c2.2 67.7 26.2 133.6 69.6 190.4 41.6 54.5 99.6 99.2 167.9 129.3 15.2 6.7 32.9-0.2 39.5-15.4 6.7-15.2-0.2-32.9-15.4-39.5-59-26-108.9-64.3-144.4-110.8-29-38-47.5-80.7-54.4-125h762.6c-7 44.8-25.8 87.9-55.4 126.3-36.1 46.8-86.8 85.2-146.8 110.9-15.2 6.5-22.2 24.2-15.7 39.4 4.9 11.4 15.9 18.2 27.6 18.2 4 0 8-0.8 11.8-2.4 144.5-62.2 237-185.3 241.3-321.4l1-31H67.2z" fill="#45484C"></path><path d="M591.9 800.1h-159c-35.2 0-64.1 28.8-64.1 64.1s28.8 64.1 64.1 64.1h159c35.2 0 64.1-28.8 64.1-64.1s-28.9-64.1-64.1-64.1z m0 68.1h-159c-2.1 0-4.1-2-4.1-4.1s2-4.1 4.1-4.1h159c2.1 0 4.1 2 4.1 4.1s-2 4.1-4.1 4.1z" fill="#45484C"></path><path d="M498.1 373.5c-9.6-13.5-28.4-16.6-41.9-6.9-13.5 9.6-16.6 28.4-6.9 41.9 10.8 15.1 16.6 33 16.6 51.7 0 16.6 13.4 30 30 30s30-13.4 30-30c0-31.4-9.6-61.4-27.8-86.7zM432.4 321.8c-17.7-7.1-36.3-10.7-55.5-10.7-82.2 0-149 66.8-149 149 0 16.6 13.4 30 30 30s30-13.4 30-30c0-49.1 39.9-89 89-89 11.5 0 22.6 2.1 33.1 6.4 15.4 6.2 32.8-1.3 39-16.7 6.2-15.4-1.2-32.9-16.6-39z" fill="#33CC99"></path><path d="M549.4 274.7c-46.7-45.6-107.7-70.8-171.8-70.8-64.1 0-125.1 25.1-171.8 70.8-46.1 45.1-74 106-78.6 171.4-1.2 16.5 11.3 30.9 27.8 32 16.5 1.1 30.9-11.3 32-27.8 3.5-50.8 25.1-97.9 60.7-132.7 35.4-34.6 81.5-53.7 129.9-53.7 48.3 0 94.5 19.1 129.9 53.7 35.6 34.8 57.1 81.9 60.7 132.7 1.1 15.8 14.3 27.9 29.9 27.9 0.7 0 1.4 0 2.1-0.1 16.5-1.2 29-15.5 27.8-32-4.6-65.4-32.5-126.3-78.6-171.4zM895.1 385.9c-11.5-19.4-27.7-36.6-48.1-51.2l53.9-58.3c11.2-12.2 10.5-31.2-1.7-42.4s-31.2-10.5-42.4 1.7l-65 70.4c-5-1.8-10.1-3.5-15.3-5l82.4-159.2c7.6-14.7 1.9-32.8-12.9-40.4-14.7-7.6-32.8-1.9-40.4 12.9l-91.2 176.3c-5.5-0.3-11.1-0.5-16.7-0.5-21.9 0-43.5 2.4-64.3 7.2-16.1 3.7-26.2 19.8-22.5 36 3.7 16.1 19.8 26.2 36 22.5 16.3-3.8 33.4-5.7 50.7-5.7 43.6 0 84.2 11.8 114.3 33.3 27.1 19.3 42 44 42 69.5 0 16.6 13.4 30 30 30s30-13.4 30-30c0-23.5-6.3-46.1-18.8-67.1z" fill="#45484C"></path></g></svg>
        
        `
    }
];



        // Mobile menu toggle
        document.getElementById('menuButton').addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        });

        // Fade-in animation
        function revealSections() {
            document.querySelectorAll('.fade-in-section').forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) section.classList.add('visible');
            });
        }
        window.addEventListener('scroll', revealSections);
        window.addEventListener('DOMContentLoaded', revealSections);

        // Hero
        document.getElementById("heroName").innerText = portfolioData.hero.name;
        document.getElementById("heroDesc").innerText = portfolioData.hero.description;
        document.getElementById("heroImage").src = portfolioData.hero.image;
        document.querySelector("#hero a").innerText = portfolioData.hero.buttonText;

        // About
        document.getElementById("aboutTitle").innerText = portfolioData.about.title;
        document.getElementById("aboutDesc").innerText = portfolioData.about.description;
        document.getElementById("aboutImage").src = portfolioData.about.image;
        const aboutTagsContainer = document.getElementById("aboutTags");
        portfolioData.about.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "px-4 py-2 bg-purple-200 text-purple-800 rounded-full font-semibold";
            span.innerText = tag;
            aboutTagsContainer.appendChild(span);
        });

        // Education
        const educationGrid = document.getElementById("educationGrid");
        portfolioData.education.forEach(edu => {
            const div = document.createElement("div");
            div.className = `bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 hover:scale-105 transition transform flex flex-col items-start border-l-4 border-${edu.color}-500`;
            div.innerHTML = `
                <h3 class="text-2xl font-bold text-${edu.color}-700 mb-2"><i class="${edu.icon} mr-2"></i>${edu.institution}</h3>
                <p class="text-gray-700 mb-2">${edu.degree}</p>
                <p class="text-sm text-gray-600 mb-2">${edu.location}</p>
                <p class="text-sm text-gray-600">${edu.graduation}</p>
            `;
            educationGrid.appendChild(div);
        });

        // Populate projects grid
const projectsContainer = document.getElementById('projectsGrid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition transform flex flex-col items-center text-center";
    card.innerHTML = `
        ${project.svg}
        <h3 class="text-2xl font-bold text-purple-700 mb-2">${project.title}</h3>
        <p class="text-gray-700 mb-4">${project.description}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Technologies:</strong> ${project.technologies}</p>
        <p class="text-sm text-gray-600"><strong>Database:</strong> ${project.databases}</p>
    `;
    projectsContainer.appendChild(card);
});

        // Footer
        const footer = document.getElementById("footer");
        const footerAbout = document.createElement("div");
        footerAbout.className = "space-y-4";
        footerAbout.innerHTML = `<h3 class="text-xl font-bold text-purple-700">About Me</h3><p class="text-gray-600">${portfolioData.footer.about}</p>`;
        const footerLinks = document.createElement("div");
        footerLinks.className = "space-y-4";
        footerLinks.innerHTML = `<h3 class="text-xl font-bold text-purple-700">Quick Links</h3><ul class="space-y-2">${portfolioData.footer.quickLinks.map(link => `<li><a href="${link.href}" class="hover:text-purple-600 transition">${link.text}</a></li>`).join("")}</ul>`;
        const footerContact = document.createElement("div");
        footerContact.className = "space-y-4";
        footerContact.innerHTML = `<h3 class="text-xl font-bold text-purple-700">Contact</h3><p class="text-gray-600">Email: <a href="mailto:${portfolioData.footer.contact.email}" class="text-purple-600 hover:underline">${portfolioData.footer.contact.email}</a></p><div class="flex space-x-4 mt-2">${portfolioData.footer.contact.social.map(s => `<a href="${s.href}" class="text-purple-700 hover:text-purple-900 text-2xl"><i class="${s.icon}"></i></a>`).join("")}</div>`;
        const footerContent = document.createElement("div");
        footerContent.className = "max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-gray-700";
        footerContent.appendChild(footerAbout);
        footerContent.appendChild(footerLinks);
        footerContent.appendChild(footerContact);
        footer.appendChild(footerContent);
        const footerCopy = document.createElement("div");
        footerCopy.className = "text-center text-gray-500 mt-8 mb-4";
        footerCopy.innerHTML = portfolioData.footer.copyright;
        footer.appendChild(footerCopy);

        // Dynamic Time
        function displayDate() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            document.getElementById("time").innerHTML = `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}&nbsp;&nbsp;`;
            setTimeout(displayDate, 1000);
        }
        displayDate();