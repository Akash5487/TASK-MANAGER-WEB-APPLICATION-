**Task Manager Web Application**

A full-stack task manager application built with React, Node.js, Express, and AWS DynamoDB. This project demonstrates a modern web application with CRUD functionality, cloud integration, and a responsive UI styled with Tailwind CSS.

**Features**

Create, read, update, and delete tasks.
Store tasks in AWS DynamoDB, a scalable NoSQL database.
Responsive frontend with Tailwind CSS.
RESTful API with error handling
Modular and scalable codebase.

**Tech Stack**

Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express, AWS SDK
Database: AWS DynamoDB
Tools: Git, npm

**Project Structure**

task-manager/
├── backend/              # Node.js/Express backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── services/     # DynamoDB interactions
│   │   └── server.js     # Main server
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main app component
│   │   └── index.css     # Tailwind styles
├── README.md
└── .gitignore



**Create a .env file with AWS credentials:**

AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
TABLE_NAME=Tasks



**Create a DynamoDB table named Tasks with taskId as the partition key.**

Start the backend server:
npm start
Frontend Setup





**Navigate to the frontend directory:**

cd frontend
Install dependencies:
npm install



**Start the React development server:**

npm start
Running the Application

Ensure the backend server is running on http://localhost:5000.
Open http://localhost:3000 in your browser to access the frontend.
Use the UI to add, edit, and delete tasks.

**API Endpoints**

POST /api/tasks - Create a task
GET /api/tasks - Get all tasks
PUT /api/tasks/:taskId - Update a task
DELETE /api/tasks/:taskId - Delete a task




Implement task categories and filters.
Deploy to AWS Amplify or EC2.



Add unit tests with Jest.
Contributing





