# 🚀 KOS BOOKING API

### Modern Boarding House Booking Backend

<p align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,100:203a43&height=200&section=header&text=Kos%20Booking%20API&fontSize=40&fontColor=ffffff&animation=fadeIn" />

</p>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js"/>
<img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql"/>
<img src="https://img.shields.io/badge/API-REST-orange?style=for-the-badge"/>

</p>

---

# ✨ Project Overview

**Kos Booking API** adalah sistem backend yang dibuat untuk mengelola pemesanan kamar kos secara digital.

Sistem ini memungkinkan:

👤 **Society**

* Melihat daftar kos
* Melakukan booking kamar

🏠 **Owner**

* Menambahkan kos
* Melihat booking
* Mengubah status booking (accept / reject)

Project ini dibuat menggunakan **Node.js + Express + MySQL** dengan sistem **REST API**.

---

# 👨‍💻 Developer

**Nama :** Hizkia Agellvin Girsang
**Kelas :** XI RPL 3

Project ini dibuat sebagai **tugas backend development**.

---

# ⚡ Tech Stack

| Technology | Function        |
| ---------- | --------------- |
| Node.js    | Runtime backend |
| Express.js | Framework API   |
| MySQL      | Database        |
| Postman    | Testing API     |

---

# 🗂 Project Structure

```
kos-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authControllers.js
│   ├── kosControllers.js
│   ├── bookingControllers.js
│
├── routes
│   ├── authRoutes.js
│   ├── kosRoutes.js
│   ├── bookingRoutes.js
│
├── app.js
├── package.json
```

---

# 🗄 Database Structure

### users

| field    | type    |
| -------- | ------- |
| id       | int     |
| name     | varchar |
| email    | varchar |
| password | varchar |
| phone    | varchar |
| role     | enum    |

---

### kos

| field       | type    |
| ----------- | ------- |
| id          | int     |
| owner_id    | int     |
| name        | varchar |
| address     | text    |
| price       | int     |
| gender      | enum    |
| description | text    |

---

### booking

| field   | type |
| ------- | ---- |
| id      | int  |
| user_id | int  |
| kos_id  | int  |
| status  | enum |

---

# 🔌 API Endpoints

## Auth

Register

```
POST /register
```

Login

```
POST /login
```

---

## Kos

Tambah Kos

```
POST /kos
```

Lihat Semua Kos

```
GET /kos
```

Filter Kos

```
GET /kos?gender=male
GET /kos?gender=female
```

---

## Booking

Booking Kos

```
POST /booking
```

Owner melihat booking

```
GET /booking/owner/:owner_id
```

Update Status Booking

```
PUT /booking/:id
```

Body:

```
{
"status":"accepted"
}
```

---

# 🎯 Kenapa Tidak Menggunakan Prisma?

Dalam project ini **tidak menggunakan Prisma ORM**, tetapi menggunakan **query MySQL manual**.

Alasannya:

1️⃣ **Lebih mudah dipahami oleh pemula**
Karena query SQL langsung terlihat sehingga membantu memahami cara kerja database.

2️⃣ **Kontrol penuh terhadap query**
Developer dapat mengatur query secara manual tanpa bergantung pada ORM.

3️⃣ **Lebih ringan**
Tanpa tambahan dependency ORM sehingga project lebih sederhana.

4️⃣ **Latihan memahami SQL**
Project ini bertujuan untuk melatih penggunaan SQL secara langsung.

---

# 🎬 API Testing

Testing dilakukan menggunakan **Postman**.

Flow testing:

1️⃣ Register user
2️⃣ Login
3️⃣ Owner menambahkan kos
4️⃣ Society melihat kos
5️⃣ Society melakukan booking
6️⃣ Owner menerima / menolak booking

---

# 📊 Example Data

Kos untuk **Male**

```
Kos Jaya
```

Kos untuk **Female**

```
Kos Putri Jaya
```

---

# 🎨 Preview

<p align="center">

<img src="https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif" width="400"/>

</p>

---

# ⭐ Conclusion

Project ini menunjukkan implementasi **REST API Backend sederhana untuk sistem booking kos** menggunakan:

✔ Node.js
✔ Express.js
✔ MySQL

Backend ini dapat dikembangkan lebih lanjut menjadi **aplikasi fullstack** dengan frontend seperti:

* React
* Next.js
* Mobile App

---

<p align="center">

💡 *Built with passion and learning spirit*

</p>

<p align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:203a43,100:0f2027&height=120&section=footer"/>

</p>
