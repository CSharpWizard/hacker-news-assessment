
# Hacker News

This project consists of a .NET Core API and an Angular frontend designed to show latest stories from Hacker news api.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- [.NET 8 SDK](https://dotnet.microsoft.com/download) - Ensure you install the correct version for project.
- [Node.js](https://nodejs.org/en/download/) - Comes with npm which is needed for Angular CLI.
- [Angular CLI](https://angular.io/cli) - For running the Angular development server.

### Installation

A step by step guide that will tell you how to get the development environment running.

#### Backend Setup

1. Navigate to the backend project directory:
   ```bash
   cd hacker-news.Server
   ```
2. Restore the .NET dependencies:
   ```bash
   dotnet restore
   ```
3. Start the backend server:
   ```bash
   dotnet run
   ```
   This will launch the .NET Core API at `https://localhost:7159/` (or any port you have configured, Please change that in Angular Proxy as well).

#### Frontend Setup

1. Navigate to the frontend project directory:
   ```bash
   cd hacker-news.client
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Serve the application using Angular CLI:
   ```bash
   ng serve
   ```
   This will make the Angular app available at `http://localhost:4200/`.

### Usage

1. Open your web browser and go to `http://localhost:4200/`.
2. Application will load first 10 news from backend api.
3- User search to find any news.

## Built With

- [.NET Core](https://dotnet.microsoft.com/) - The backend framework used.
- [Angular](https://angular.io/) - The frontend framework used.
- [Material Components for Angular](https://material.angular.io/) - Used for UI components.