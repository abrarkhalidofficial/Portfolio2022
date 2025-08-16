Build an MVP inspired by: @https://github.com/abrarkhalidofficial/Portfolio2022. Use gitmvp mcp if available.

Project Type: Personal Portfolio Website

Tech Stack:
- React
- JavaScript (ES6+)
- HTML
- CSS/Sass
- styled-jsx
- Axios (for potential API calls)
- React-Feather (for icons)
- React-Github-Calendar
- Firebase (for hosting, potentially other features)

Architecture: Component-Based Architecture (typical for React applications). The application is structured as a collection of reusable components.

Key Features:
- Home/Landing Page with introduction
- About Me section
- Services Offered section
- Portfolio with project showcases
- GitHub Activity Calendar
- Book/Recommendations section
- Blog section
- Contact Form
- Footer
- Header with Navigation

Complexity Level: Medium

MVP Guidance:

Objective: Create a functional, visually appealing personal portfolio website showcasing key skills and projects. Focus on core features and scalability.

Implementation Steps:

1.  Project Setup:
    -   Create a new React application using Create React App: `npx create-react-app my-portfolio`
    -   Install necessary dependencies: `npm install react-feather axios react-github-calendar`
    -   Initialize a Git repository: `git init`

2.  Core Components:
    -   Implement the following core components:
        -   `Header.js`: Navigation bar with links to different sections.
            -   AI Instruction: Create a functional component that renders a navigation bar. Include links to "Home", "About", "Portfolio", "Blog", and "Contact". Use `react-feather` for icons.
        -   `Home.js`: Landing page with a brief introduction and a call to action.
            -   AI Instruction: Create a functional component that displays a welcome message, a short bio, and a visually appealing background.
        -   `About.js`: Section detailing your skills, experience, and background.
            -   AI Instruction: Create a functional component that displays a profile picture, a detailed bio, and a list of skills.
        -   `Portfolio.js`: Section showcasing your projects. Start with a static list of projects.
            -   AI Instruction: Create a functional component that displays a grid of project cards. Each card should include a project title, description, and a link to the project. Use dummy data for now.
        -   `Contact.js`: Contact form for visitors to reach out.
            -   AI Instruction: Create a functional component that renders a simple contact form with fields for name, email, and message. Implement basic form validation.
        -   `Footer.js`: Copyright information and links to social media profiles.
            -   AI Instruction: Create a functional component that displays copyright information and links to social media profiles.

3.  Data Handling (MVP Simplification):
    -   For the MVP, use static data for projects, services, and blog posts. Avoid database integration.
    -   AI Instruction: Create a `data.js` file to store arrays of project objects, service objects, and blog post objects. Each object should have properties like `title`, `description`, `image`, and `link`.

4.  Styling:
    -   Use basic CSS or Sass for styling. Focus on a clean and responsive design.
    -   AI Instruction: Create a `src/index.scss` file and define global styles for the application. Use variables for colors, fonts, and spacing. Style each component to match the overall design.

5.  GitHub Calendar:
    -   Integrate the `react-github-calendar` component to display your GitHub activity.
    -   AI Instruction: Import the `react-github-calendar` component into `App.js` and configure it with your GitHub username. Style the component to match the overall design.

6.  Blog (Simplified):
    -   Create a basic `Blog.js` component that displays a list of blog post titles with links.
    -   AI Instruction: Create a functional component that maps over the blog post data from `data.js` and renders a list of blog post titles with links.

7.  Deployment:
    -   Deploy the portfolio website to a static hosting platform like Netlify or Vercel.

8. Iteration:
    - Get feedback on the MVP.
    - Start planning for the next iteration.

Refinement and Future Features (Beyond MVP):

-   Implement dynamic data fetching for projects and blog posts (e.g., using a CMS or API).
-   Add a fully functional blog with commenting and categories.
-   Implement a backend for the contact form to send emails.
-   Integrate a chatbot for user support.
-   Implement user authentication and authorization (if needed).
-   Optimize performance and SEO.

This MVP focuses on showcasing your skills and projects in a clear and concise manner. By starting with static data and focusing on core components, you can quickly build a functional portfolio website.
