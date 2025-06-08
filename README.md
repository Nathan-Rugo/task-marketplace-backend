# Mobile Task Marketplace for Strathmore Students Residing in Madaraka - Backend

This is the official backend repository for the **Mobile Task Marketplace for Strathmore Students Residing in Madaraka**. The platform connects students residing in Madaraka Estate to task-based opportunities. Users can post tasks (shopping, delivery, cleaning, etc.) and also act as taskers to earn by completing posted tasks.

---

## 🔧 Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework for RESTful APIs
- **MySQL** – Relational database
- **Prisma ORM** – Elegant database access
- **JWT** – Authentication mechanism
- **Bcrypt** – Password hashing
- **Socket.IO** *(future)* – Real-time features (chat, task tracking)
- **Firebase Admin SDK** *(future)* – Push notifications

## 📁 Repository Structure

```bash
├── src/
│   ├── controllers/        # Request logic
│   ├── routes/             # Route definitions
│   ├── services/           # Business logic
│   ├── middlewares/        # Auth, validation, etc.
│   ├── models/             # ORM Models (via Prisma)
│   ├── config/             # App and DB config
│   └── app.js              # App entry point
├── prisma/                 # Prisma schema and migrations
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/task-marketplace-backend.git
cd task-marketplace-backend
```
### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a .env file:

```env
PORT=5000
DATABASE_URL="mysql://username:password@localhost:3306/task_marketplace_db"
JWT_SECRET=your_jwt_secret
```

### 4. Prisma setup
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the development server
```bash
npm run dev
```

---

## Features (MVP Phase)
- [ ] User registration/login

- [ ] JWT authentication

- [ ] Toggle tasker status

- [ ] Task creation, listing, application

- [ ] Ratings and reviews

- [ ] Secure API structure

## API Documentation
[Postman API Specification Document](https://app.getpostman.com/join-team?invite_code=61e9a43b1d804b0cddde3c462ba9fe296031e3d5685d051ce47960703fa9897d&target_code=e470a382183b82f85604a5eea7208d02)


---

## 👥 Team
Backend Developer: [Nathan Githinji](https://github.com/Nathan-Rugo)

Frontend Developer: [Brown Wangeci]()
