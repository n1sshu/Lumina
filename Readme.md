# Lumina: Empowering Education with AI


<img src="client/public/logo.png" alt="drawing" width="200"/>

**Lumina** is an AI-powered learning platform developed for [YCS](https://ycs.lk/), offering interactive learning materials, ai powered features, and personalized study tools.

---

## **Table of Contents**

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
 * [Screenshots](#screenshots)
 * [Prerequisites](#Prerequisites)
* [Folder Structure](#folder-structure)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the Project](#running-the-project)
* [Contributing](#contributing)
* [License](#license)

---

## **Project Overview**

**Lumina** is a modern, AI-powered Learning Management System (LMS) built using the MERN stack.

It allows students and educators to register, log in, and access interactive courses, quizzes, and personalized study tools. Features include protected routes, JWT-based authentication, a dynamic React frontend, and smart AI-driven learning enhancements.

---

## **Features**

* ✅  User Management
* ✅  Daily Learning Resourses
* ✅  Smart Quiz
* ✅  Daily Planner
* ✅  Smart Flashcards
* ✅  24/7 AI Assistant

---

## **Technologies Used**

* **Frontend:** React, Tailwind
* **Backend:** Node.js
* **Database:** MongoDB 

---

## **Folder Structure**

```
root/
 ├─ server/
 │   ├─ controllers/
 │   ├─ middlewares/
 │   ├─ router/
 │   ├─ models/
 │   └─ utils/
 ├─ client/
 │   ├─ src/
 │   ├─ public/
 ├─ .gitignore
 └─ README.md
```

---

## **Screenshots**

### Frontend

![Frontend Screenshot](https://via.placeholder.com/600x400.png?text=Frontend+Screenshot)

### Backend

![Backend Screenshot](https://via.placeholder.com/600x400.png?text=Backend+Screenshot)

> Replace the above images with actual screenshots of your project.

---

## ****Prerequisites****

1. **Git**
- Before running this project, make sure you have the following installed:

2. **Node.js & npm**  
  - Install [Node.js](https://nodejs.org/) (v18+ recommended).  

3. **MongoDB**  
  - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database or install MongoDB locally.  
   - Add your MongoDB Connection URL to `.env`.

4. **Cloudinary account** (for image uploads)  
  - Sign up at [Cloudinary](https://cloudinary.com/) and get your API credentials.  
  - Add them to `.env`.

5. **Google OAuth credentials** (for Google login)  
  - Create a project on [Google Cloud Console](https://console.cloud.google.com/).  
  - Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env`.

6. **Gmail account for notifications**  
  - Setup Gmail for Nodemailer.  
  - Add `EMAIL_USER` and `EMAIL_PASS` to `.env`.

7. **Gemini API key**  
  -  Get Gemini API Keys on [Google AI Studio](https://aistudio.google.com/).  
  - Add `GEMINI_API_KEY` to `.env`.


---


## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/n1sshu/Lumina.git Lumina
cd Lumina
```

2. Install dependencies for both frontend and backend:

```bash
npm i
npm i --prefix server
npm i --prefix client
```

---

## **Environment Variables**

Create a `.env` file in the root/server folder:

```env
MONGO_URI = YOUR_MONGODB_URL

CLOUDINARY_CLOUD_NAME = YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY = YOUR_CLOUDINARY_APIKEY
CLOUDINARY_API_SECRET = YOUR_CLOUDINARY_SECRECT

JWT_SECRET = JSON_WEB_TOKEN_SECRECT_API ( CAN BE ANYTHING )

GOOGLE_CLIENT_ID = YOUR_GOOGLE_OATH_CLIENT
GOOGLE_CLIENT_SECRET = YOUR_GOOGLE_OATH_CLIENT_SECRECT

FRONTEND_URL = YOUR_FRONTEND_URL ( http://localhost:5173 )

EMAIL_USER = YOUR_GMAIL_USERNAME_FOR_NODEMAIL
EMAIL_PASS = YOUR_GMAIL_PASS

GEMINI_API_KEY = GEMINI_API_KEY
```

---


## **Running the Project**

```bash
npm run lumina
```

### **2. Running separately**

* Backend:

```bash
cd backend
npm run dev
```

* Frontend:

```bash
cd frontend
npm run dev
```

---





## **Team Behind the Project**

Meet the team that brought this project to life:

- [**Rayan Kumaranga**](https://github.com/n1sshu)  
- [**Dineth Jayathilaka**](https://github.com/bobsmith) 
- [**Mithum Buthsara**](https://github.com/charlielee) 

---
