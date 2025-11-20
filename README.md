# HomeHero – Local Household Service Finder

HomeHero is a modern web application that connects users with trusted local service providers such as electricians, plumbers, and cleaners. Users can browse services, book appointments, and manage their bookings easily.

## 🔗 Live Site
https://homehero-a10.netlify.app/

## 🚀 Key Features
- Browse and filter services with price-range filtering using **$gte / $lte** (MongoDB).
- Fully authenticated system with Email/Password and Google Login.
- Service providers can **Add, Update, and Delete** their own services.
- Users can **Book services**, view bookings, and cancel them.
- Integrated **Framer Motion animations** and full responsiveness for all devices.
- Booking restriction: A user cannot book their own service.
- Environment variables used for Firebase & MongoDB security.

## 🗂️ Pages Included
- Home (Hero slider + dynamic + static sections)
- Services Page
- Service Details Page
- Add Service (Private)
- My Services (Private)
- My Bookings (Private)
- Profile (Private)
- Login & Register

## 🛠️ Technologies Used
- React + React Router
- Firebase Authentication
- Node.js + Express.js + MongoDB
- Tailwind CSS
- Framer Motion
- React Hot Toast / SweetAlert2
- React icon
- daisyui
- dotenv

## 📁 Environment Variables
```
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
MONGODB_URI=
```

## 📌 Deployment
- Client → Netlify 
- Server → Vercel
