# **Sprint 7 project**
Author: Matt Lansing - TripleTen QA Student

## Description/Purpose

During the 7th Sprint of the TripleTen QA program, we learned about several of the ins and outs of JavaScript. In our Sprint 7 Project, we were tasked with demonstrating the skills we learned during the sprint, to include:

- Data Types and Variables
- Conditionals and Loops
- Data Structures: Arrays and Objects
- Functions
- Git and GitHub
- NodeJS

Using these lessons, we set up tests for the UrbanGrocers Server to test the effects of GET, POST, PUT and DELETE functions. Each function received at least two tests. The first test verified the status code for the endpoint. The second test verified a portion of the response body returned for the same function. Once completed this README.md was created for the purpose of describing and presenting our work professionally. Finally the Project was uploaded to the GitHub Repository for submission.

## Description of Technologies Used

### GitBash

Git Bash is a command-line tool for Windows that provides a Unix-like environment for using Git and other command-line utilities.

### GitHub

GitHub is a web-based platform for version control and collaboration that allows developers to host, manage, and share their code repositories using Git.

### Postman

Postman is an API development and testing tool that allows users to easily create, send, and manage HTTP requests and view responses.

### Urban Grocers Server

Urban Grocers is a temporary educational server used by TripleTen students to practice QA skills.

### URL/docs/

A URL ending in /docs/ points to the documentation section of a website, where users can find detailed guides, reference materials, and instructions related to a specific software, API, or service.

### VSCode

Visual Studio Code (VSCode) is a lightweight, open-source code editor that supports a wide range of programming languages and development tools, offering features like debugging, version control, and extensions for enhanced functionality.

## Instructions on "Installation"

1. Connect your GitHub
    1. Link GitHub account to TripleTen using "Link GitHub account" button in the widget at the top of the project page.
    2. Sign into GitHub(if not already signed in) and confirm link allowing projects to be submitted via GitHub directly to TripleTen.
2. Clone the project repository to your computer
    1. In GitHub clone the new repo, *hm07-qa-us*, to your local computer
        1. Open your preferred terminal emulator. On Windows use Git bash
        2. Create a directory to store all projects using the following commands if need be
            1. cd ~
            2. mkdir projects
            3. cd projects
        3. Clone the repo using the appropriate command
            1. HTTPS: git clone https://github.com/username/hm07-qa-us.git
            2. SSH: git clone git@github.com:username/hm07-qa-us.git
3. Work with the project locally-recommended VS Code
    1. Before starting work run npm install from the console in your project folder
        1. Open VS Code
        2. Select File
        3. Open Folder
        4. Select cloned hm07-qa-us folder
    2. In config.js replace the API URL with the unique link generated once you launch the Urban Grocers server. Using the variable allows us to declare the URl in one place and use it throughout the whole project. You may have to do this several times as the server can expire after a short amount of time. 
    3. Hit the **"Start Server"** botton on the TripleTen Project page and paste the link into the URL on the config.js page.
    4. Use apiDoc: URL /docs/ to check endpoints
    5. Run the command **npm install jest**

## Instructions on "How to Run the Tests"

1. Using apiDoc: URL /docs/ , verify the endpoints you will be using to set up your tests. 
2. Once you have identified the endpoints you would like to use for your request functions(you will need one for each type of request: **GET**, **POST**, **PUT**, and **DELETE**) verify the status code you should receive in Postman.
3. Use the code in each of the files to run the the "status check test" and "response body test". You can run these tests by using the command **npx jest** in the terminal. 

## Environment

Windows Surface Laptop 3
Intel(R) Core(TM) i5-1035G7 CPU @ 1.20GHz   1.50 GHz
64-bit operating system, x64-based processor

VSCode
Version: 1.92.1 (user setup)
Commit: eaa41d57266683296de7d118f574d0c2652e1fc4
Date: 2024-08-07T20:16:39.455Z
Electron: 30.1.2
ElectronBuildId: 9870757
Chromium: 124.0.6367.243
Node.js: 20.14.0
V8: 12.4.254.20-electron.0
OS: Windows_NT x64 10.0.22631