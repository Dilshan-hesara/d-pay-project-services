# 🧩 D-Pay - Business Microservices Module

[![Java](https://img.shields.io/badge/Java-25-orange.svg)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
 ---

## 🎥 Project Demonstration VIDEO & GCP Configuration VIDEO

Click the image below to watch the full project demonstration. This video showcases the execution of the D-Pay microservices and provides a detailed walkthrough of the internal configurations on Google Cloud Platform (GCP).

## 🔗 Quick Links

|                                               🎥 **Video Demo**                                                |
|:--------------------------------------------------------------------------------------------------------------:|
| [▶ Watch on Google Drive](https://drive.google.com/file/d/1NDpEqigfrObE7qfIt4ZVdgn3tiRLsIk-/view?usp=drive_link) |

[![D-Pay Project Demonstration Video](https://github.com/Dilshan-hesara/D-Pay-Web-app/blob/master/img.png)](https://drive.google.com/file/d/1NDpEqigfrObE7qfIt4ZVdgn3tiRLsIk-/view?usp=drive_link)

The `services/` directory houses the core business domain microservices in the D-Pay System. Each microservice is an independent Spring Boot application utilizing polyglot persistence.

---

## 📦 Submodules

| Microservice | Target Database | Base Path | Description |
| :--- | :--- | :--- | :--- |
| **[`user-service`](./user-service/README.md)** | PostgreSQL | `/api/v1/users` | Manages user accounts, profiles, and authentication details. |
| **[`inventory-service`](./inventory-service/README.md)** | MongoDB | `/api/v1/inventory` | Manages product catalog, stock levels, and item availability. |
| **[`order-service`](./order-service/README.md)** | MySQL | `/api/v1/orders` | Handles order placement, payment processing, and transaction history. |

---

## 🚀 Running Microservices

> **Prerequisite**: Ensure the **Config Server** (Port `9000`) and **Service Registry** (Port `9001`) are running first.

### Run Individually via Maven:

```bash
# User Service
cd user-service && ./mvnw spring-boot:run

# Inventory Service
cd inventory-service && ./mvnw spring-boot:run

# Order Service
cd order-service && ./mvnw spring-boot:run
   ```


---

## ⚡ PM2 Process Management

For production or background execution, an `ecosystem.config.js` file is provided:

```bash
# Build all platform JARs
mvn clean package -DskipTests

# Start all platform components with PM2
pm2 start ecosystem.config.js
```

---

## 👤 Student Information

- **Student Name:** M.K.Dilshan Hesara
- **Student Number:** 241711049
- **GCP Project ID:** auton-dh
- **Slack Handle:** https://ijse-eca-hdse-71-72.slack.com/team/U0BHGQU16F2