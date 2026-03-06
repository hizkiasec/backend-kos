# 🚀 Kos Hunter Backend API

<p align="center">

<img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&size=28&center=true&vCenter=true&width=600&lines=Kos+Hunter+Backend+API;Node.js+%7C+Express+%7C+MySQL;REST+API+Project;Built+by+Hizkia+Agellvin+Girsang" />

</p>

---

<p align="center">

![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge\&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge\&logo=mysql)
![API](https://img.shields.io/badge/REST-API-orange?style=for-the-badge)

</p>

---

# 👨‍💻 Developer Identity

|             |                                    |
| ----------- | ---------------------------------- |
| **Name**    | Hizkia Agellvin Girsang            |
| **Class**   | XI RPL 3                           |
| **Project** | Kos Hunter Backend API             |
| **Purpose** | Backend System Development Project |

---

# 📌 About This Project

**Kos Hunter Backend API** adalah sistem backend yang dibuat untuk membantu masyarakat mencari kos dan melakukan pemesanan kamar kos secara online.

Sistem ini memiliki **dua role pengguna**:

👤 **Society**
→ Pengguna yang mencari dan memesan kos

🏢 **Owner**
→ Pemilik kos yang mengelola kos dan booking

---

# ✨ System Features

## 👤 Society Features

* Register akun
* Login akun
* Melihat daftar kos
* Filter kos berdasarkan gender kamar
* Memberikan review kos
* Melakukan booking kamar
* Melihat bukti pemesanan

---

## 🏢 Owner Features

* Registrasi owner
* Login owner
* CRUD data kamar kos
* CRUD fasilitas kos
* Membalas review society
* Accept / Reject booking
* Update data owner
* Melihat histori transaksi booking

---

# 🧠 Tech Stack

| Technology | Usage              |
| ---------- | ------------------ |
| Node.js    | Backend Runtime    |
| Express.js | REST API Framework |
| MySQL      | Database           |
| Postman    | API Testing        |
| GitHub     | Version Control    |

---

# 📂 Project Structure

```
kos-backend
│
├── controllers
│   ├── authControllers.js
│   ├── kosControllers.js
│   ├── roomControllers.js
│   ├── bookingControllers.js
│   ├── reviewControllers.js
│   └── facilityControllers.js
│
├── routes
│   ├── authRoutes.js
│   ├── kosRoutes.js
│   ├── roomRoutes.js
│   ├── bookingRoutes.js
│   ├── reviewRoutes.js
│   └── facilityRoutes.js
│
├── config
│   └── db.js
│
├── app.js
└── package.json
```

---

# 🔌 API Endpoint Example

### Register User

```
POST /api/register
```

---

### Login

```
POST /api/login
```

---

### Get All Kos

```
GET /api/kos
```

---

### Filter Kos

```
GET /api/kos?gender=male
GET /api/kos?gender=female
```

---

### Booking Room

```
POST /api/bookings
```

---

### Accept / Reject Booking

```
PUT /api/bookings/:id
```

---

### Add Review

```
POST /api/reviews
```

---

### Reply Review

```
PUT /api/reviews/:id
```

---

# 🗄 Database Tables

Database menggunakan **MySQL** dengan beberapa tabel utama:

* users
* kos
* rooms
* bookings
* reviews
* facilities

---

# 📌 Why Not Using Prisma ORM?

Dalam project ini saya **tidak menggunakan Prisma ORM**, tetapi menggunakan **query MySQL secara manual**.

### Alasan:

✔ Untuk melatih pemahaman SQL secara langsung
✔ Lebih mudah memahami hubungan backend dan database
✔ Mengurangi kompleksitas konfigurasi ORM
✔ Cocok untuk pembelajaran dasar backend development

Dengan menggunakan query manual seperti:

```
SELECT
INSERT
UPDATE
DELETE
```

saya dapat memahami bagaimana **REST API berinteraksi langsung dengan database**.

---

# 📌 Why Creating Database Manually?

Database dibuat manual menggunakan **MySQL CLI**.

### Tujuan:

1️⃣ Memahami struktur database secara langsung
2️⃣ Melatih penggunaan **DDL (Data Definition Language)**

Contoh:

```
CREATE DATABASE
CREATE TABLE
ALTER TABLE
```

3️⃣ Memahami relasi antar tabel dalam sistem backend.

---

# 🚀 How To Run This Project

### Install dependency

```
npm install
```

---

### Run server

```
npm start
```

---

### Server running on

```
http://localhost:3000
```

---

# 🧪 API Testing

Semua endpoint diuji menggunakan **Postman** untuk memastikan API berjalan dengan baik.

---

# 📊 System Workflow

```
Society Register/Login
        ↓
Melihat daftar kos
        ↓
Filter kamar
        ↓
Booking kamar
        ↓
Owner menerima / menolak booking
        ↓
Society memberikan review
        ↓
Owner membalas review
```

---

# 🎯 Project Conclusion

Project **Kos Hunter Backend API** berhasil dibuat menggunakan arsitektur **REST API dengan Node.js dan MySQL**.

Sistem ini memungkinkan:

✔ Society mencari dan memesan kos
✔ Owner mengelola kos dan pemesanan
✔ Sistem review antara pengguna dan owner

Project ini dibuat sebagai **pembelajaran backend development dan implementasi REST API**.

---

<p align="center">

⭐ **If you like this project, don't forget to give it a star!** ⭐

</p>
