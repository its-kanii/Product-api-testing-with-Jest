# 🧪 Product API Testing with Jest + Keploy

A Node.js-based RESTful API that manages product inventory, tested using **Jest** and **Keploy** for seamless functional and regression testing via real user traffic.

---

## 📦 Features

- CRUD operations on products
- MongoDB integration via Mongoose
- Unit + API test coverage using **Jest**
- Keploy traffic-based test generation and cloud test suite
- GitHub Actions CI pipeline with automated testing

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js    | Runtime |
| Express.js | API framework |
| MongoDB    | Database |
| Mongoose   | ODM |
| Jest       | Unit/API Testing |
| Keploy     | API Traffic Replay Testing |
| GitHub Actions | CI/CD |

---

## 📁 Project Structure

```

├── app.js                     # Main entry point
├── models/                   # Mongoose schemas
├── routes/                   # Express routes
├── keploy/                   # Keploy test cases
├── keploy_linux_amd64/       # Keploy binary for GitHub Actions
├── .github/workflows/        # CI setup
├── package.json
└── README.md

```
---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/its-kanii/Product-api-testing-with-Jest.git
cd Product-api-testing-with-Jest
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file:
```env
PORT=3000
HOST=0.0.0.0
MONGO_URI=mongodb://localhost:27017/test
```

### 4. Run the Application
```bash
npm start
```

---

## 🧪 Running Tests

### Unit Tests with Jest
```bash
npm test
```

### API Regression Tests with Keploy
Record:
```bash
keploy record -c "npm start"
```

Replay:
```bash
keploy test -c "npm start" --delay 10
```

---

## ☁️ CI/CD: Keploy Cloud Integration

This project includes a GitHub Actions workflow:

- Runs on each push and pull request to `main`
- Spins up MongoDB container
- Boots the app and replays Keploy test cases
- Uses the Keploy Cloud Test Suite

---

## ✅ Test Summary (Latest Run)

| Total Suites | Passed | Failed |
|--------------|--------|--------|
| 24           | ✅ 24  | ❌ 0   |

---

## 📸 Sample API Request

```http
POST /api/items
Content-Type: application/json

{
  "name": "Pencil",
  "quantity": 20
}
```

---

## 🧠 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Kanimozhi K**  
Connect on [GitHub](https://github.com/its-kanii) • [LinkedIn](https://linkedin.com/in/kanimozhi-kathirvel)

---

## ⭐ Star This Repo

If you found this helpful, please ⭐ the repository to support!
