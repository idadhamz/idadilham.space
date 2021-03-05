# Documentation Quotation Information System

**Tech Stack**

- Frontend (CMS QIS) : React JS
- Backend (API) : Laravel
- DBMS : PostgreSQL
- State Management : Redux

## Cara Testing Sisi Frontend

1. Install GIT dan Node JS terlebih dahulu
2. Pilih folder yang akan ditaruh project QIS lalu klik kanan dan pilih **_Git Bash Here_**
3. **Clone** terlebih dahulu code dari sisi Frontend sistem QIS dari **Github/Gitlab** dengan cara:
   `git clone https://gitlab.com/idadhamz/im-sanbercode-reactjs-batch-22.git`
4. Setelah proses **clone project** selesai, pada direktori Git Bash sebelumnya ketik cd (nama project)
5. Setelah masuk ke direktori project QIS, ketik **_npm install_** dan tekan enter lalu tunggu sampai proses selesai
6. Setelah selesai, jalankan project QIS dengan cara ketik **_npm start_** dan tekan enter tunggu hingga proses selesai dan link url `localhost:3000` akan muncul
7. Buka Browser dan ketik `localhost:3000` untuk mengakses project QIS

## Struktur Files Project

## Cara Testing Sisi Backend

1. Install GIT dan Node JS terlebih dahulu
2. Pilih folder yang akan ditaruh project QIS lalu klik kanan dan pilih **_Git Bash Here_**
3. **Clone** terlebih dahulu code dari sisi Frontend sistem QIS dari **Github/Gitlab** dengan cara:
   `git clone https://gitlab.com/idadhamz/im-sanbercode-reactjs-batch-22.git`
4. Setelah proses **clone project** selesai, pada direktori Git Bash sebelumnya ketik cd (nama project)

## Dokumentasi Endpoint API

- Login : `http://localhost:8000/api/login`
- Profile 
- - Detail : `http://localhost:8000/api/users/${id}` 
- - Edit : `http://localhost:8000/api/users/${id}` 
- - Edit Password : `http://localhost:8000/api/users`
- Company 
- - Read 
- - Create 
- - Edit 
- - Delete
- Parameter 
- - Read 
- - Create 
- - Edit 
- - Delete
- Job Position 
- - Read 
- - Create 
- - Edit 
- - Delete
- Employee
- - Read 
- - Create 
- - Edit 
- - Delete
- Client Company 
- - Read 
- - Create 
- - Edit - Delete
- Country 
- - Read 
- - Create 
- - Edit 
- - Delete
- Contract Type 
- - Read 
- - Create 
- - Edit 
- - Delete
- Resource 
- - Read 
- - Create 
- - Edit 
- - Delete
- Job Category 
- - Read 
- - Create 
- - Edit 
- - Delete
- Quotation 
- - Read 
- - Create 
- - Edit 
- - Delete
- Quotation Resources 
- - Read 
- - Create 
- - Edit 
- - Delete
- Quotation Deliverables 
- - Read 
- - Create 
- - Edit 
- - Delete

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
