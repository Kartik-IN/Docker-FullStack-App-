# 🚀 Docker Full‑Stack Application

A production‑ready **Full‑Stack Web Application** containerized using **Docker Compose**.
The project includes:

* ⚛️ **Frontend:** React
* 🟢 **Backend:** Node.js + Express
* 🗄️ **Database:** MongoDB
* 🐳 **Orchestration:** Docker + Docker Compose
* 🌐 **Database UI:** Mongo‑Express

This project demonstrates real‑world DevOps concepts like container networking, environment variables, volumes, and multi‑service orchestration.

---

## 📐 Architecture

```
Browser
   ↓
React Frontend (Port 3000)
   ↓ REST API
Node Backend (Port 5000)
   ↓ Mongoose
MongoDB (Port 27017)
   ↓
Mongo‑Express UI (Port 8081)
```

---

## ✨ Features

✅ Frontend UI to add and display messages
✅ Backend REST API (GET / POST)
✅ MongoDB persistent storage using Docker volumes
✅ Mongo‑Express Web UI for DB management
✅ Environment variables for configuration
✅ Fully Dockerized using Docker Compose

---

## 📁 Project Structure

```
Docker-FullStack-App-
│
├── frontend/           # React application
│   └── Dockerfile
│
├── backend/            # Node + Express API
│   ├── models/
│   │   └── Message.js
│   ├── server.js
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## 🛠️ Prerequisites

Make sure you have installed:

* Docker Desktop
* WSL (Ubuntu recommended for Windows)
* Git

Verify installation:

```bash
docker --version
git --version
```

---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Kartik-IN/Docker-FullStack-App-.git
cd Docker-FullStack-App-
```

---

### 2️⃣ Start Containers

```bash
docker compose up --build
```

---

### 3️⃣ Access Application

| Service          | URL                                            |
| ---------------- | ---------------------------------------------- |
| Frontend         | [http://localhost:3000](http://localhost:3000) |
| Backend API      | [http://localhost:5000](http://localhost:5000) |
| Mongo Express UI | [http://localhost:8081](http://localhost:8081) |

Mongo‑Express Login:

```
Username: admin
Password: admin123
```

---

## 🧪 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /api/messages | Fetch all messages |
| POST   | /api/messages | Insert new message |

Example POST body:

```json
{
  "text": "Hello from UI"
}
```

---

## 🗄️ Database

* Database Name: `dockerdb`
* Collection: `messages`
* Data persists using Docker volume

You can view data using:

* Mongo‑Express Web UI
* MongoDB Compass

---

## 🔐 Environment Variables

Configured inside `docker-compose.yml`:

```yaml
REACT_APP_API_URL=http://localhost:5000
MONGO_URL=mongodb://mongo:27017/dockerdb
```

---

## 📦 Docker Services

| Service       | Description        |
| ------------- | ------------------ |
| frontend      | React UI container |
| backend       | Node Express API   |
| mongo         | MongoDB database   |
| mongo-express | Database Web UI    |

---

## 🎯 Learning Outcomes

* Docker Compose orchestration
* Container networking
* Environment variables management
* Database persistence using volumes
* Full‑stack architecture
* DevOps best practices

---

## 🚀 Future Enhancements

* ✅ Delete / Update messages
* 🔐 Authentication
* 🌍 Nginx reverse proxy
* ☁️ AWS deployment
* ☸️ Kubernetes deployment
* 🔄 CI/CD pipeline

---

## 👨‍💻 Author

**Kartik**
Engineering Student | DevOps & Full‑Stack Enthusiast

GitHub: [https://github.com/Kartik-IN](https://github.com/Kartik-IN)

---

⭐ If you like this project, give it a star on GitHub!
# Docker-FullStack-App-
