// script.js
const projects = [
    {
        title: "Paradise Eats",
        stack: ".NET MAUI, C#, SQLite",
        description: "A mobile app for seamless food delivery with intuitive UI and real-time order tracking.",
        link: "https://github.com/GreatOJ/ParadiseEats"
    },
    {
        title: "Calculator API",
        stack: "ASP.NET Core, C#",
        description: "An API for efficient arithmetic operations with modular architecture and robust error handling.",
        link: "https://github.com/GreatOJ/CalculatorApi"
    },
    {
        title: "Split the Bill",
        stack: "JavaScript, HTML, CSS",
        description: "A lightweight web app to calculate individual expense shares among friends.",
        link: "https://github.com/GreatOJ/SPLIT-THE-BILL"
    },
    {
        title: "Geometry Application",
        stack: "Python",
        description: "A CLI tool to calculate geometric properties like area and perimeter.",
        link: "https://github.com/GreatOJ/Geometry-Application"
    },
    {
        title: "Weather Monitoring",
        stack: "JavaScript, Node.js, OpenWeather API",
        description: "A web tool providing real-time weather updates with dynamic visualization.",
        link: "https://github.com/GreatOJ/WEATHER-MONITORING"
    },
    {
        title: "To-Do List API",
        stack: "ASP.NET Core, C#",
        description: "A productivity API for managing tasks with CRUD operations and scalability.",
        link: "https://github.com/GreatOJ/ToDoListApi"
    },
    {
        title: "Counting App",
        stack: "Flutter, Dart",
        description: "A minimalist mobile app for counting items with cross-platform compatibility.",
        link: "https://github.com/GreatOJ/countingapp"
    },
    {
        title: "MultiCalculator",
        stack: "Java",
        description: "A calculator app with multiple modes (basic, scientific, programmer).",
        link: "https://github.com/GreatOJ/MultiCalculator"
    }
];

const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Technology Stack:</strong> ${project.stack}</p>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    projectsList.appendChild(projectDiv);
});
