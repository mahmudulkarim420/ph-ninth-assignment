🎯 SkillSwap – Local Skill Exchange Platform

An interactive platform for individuals to offer, learn, and trade skills within their local area.
Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse listings, rate experiences, and connect with local skill providers.

<br>
🔗 Live Site

Live URL: [_Add your Netlify/Surge/Firebase URL here_](https://ph-ninth-assignment-da6b4.web.app/)  

GitHub Repo: [_Add your GitHub repo URL here_  ](https://github.com/programming-hero-web-course2/b12-a9-firesheild-mahmudulkarim420.git)

<br>
📌 Project Overview

SkillSwap is a fully responsive SPA that allows users to:

Browse available skills and providers in their area

View top-rated providers and popular skills

Authenticate using Email/Password or Google Login

Book sessions for skills

Update their profile information (Name, Photo)

Enjoy a modern UI design with smooth animations

Experience persistent navigation with sticky Navbar and Footer

Filter and sort items on All Items page

Responsive across mobile, tablet, and desktop

<br>
🛠️ Tech Stack
Frontend

React.js

React Router

Tailwind CSS

Firebase Authentication

Swiper.js, AOS, React-Hot-Toast

Axios

Deployment

Netlify / Surge / Firebase (client)

<br>
🚀 Features
🏠 Home Page

Hero Slider (Swiper/DaisyUI) with maximum height 60–70% of screen

Popular Skills Section (Cards with image, skill name, rating, price, "View Details" button)

Top Rated Providers Section

How It Works Section

Additional relevant sections: Blog, Promotions, Offers, Newsletter, etc.

Sticky Navbar with minimum 5 navigation routes (Home, All Items, Login/Register, About Us, Contact, Support)

🔐 Authentication

Login & Signup pages

Google Social Login

Password validation (Uppercase, Lowercase, 6+ characters)

Password toggle (eye icon)

Forget Password functionality

Protected routes for skill booking

👤 My Profile Page

Shows user Name, Email, Photo

Update Profile functionality (Name, Photo)

📘 Skill Details Page

Accessible without login

Display all skill details from JSON

Book Session form with toast notification

📋 All Items Page

Display all skills in card view

Sorting (Ascending/Descending) and Filtering functionality

Clean and professional design

⚙️ Other Functionalities

Fully responsive layout for all devices

Persistent Navbar and Footer

Smooth animations using AOS, Animate.css, React-Spring

SPA behavior (no route reload errors)

Professional Error Pages

Minimum 10 meaningful GitHub commits

🗂️ Data Example (JSON Skills)
[
  {
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Music"
  },
  {
    "skillId": 2,
    "skillName": "Spoken English Practice",
    "providerName": "Sara Hossain",
    "providerEmail": "sara@skillswap.com",
    "price": 10,
    "rating": 4.6,
    "slotsAvailable": 5,
    "description": "Conversational English sessions for non-native speakers.",
    "image": "https://i.postimg.cc/example2.png",
    "category": "Language"
  }
]

🧪 How to Run Locally
git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-mahmudulkarim420.git

# Install Dependencies
npm install

# Start Development Server
npm run dev

⚡ Upgradation Instructions for Assignment 9

Navbar

Background color according to project’s primary/secondary color

Logo + minimum 5 nav routes

Sticky position on page scroll

Private Routes only after login

Landing Page

Hero section height max 60–70%

Minimum 3 sliders with uniform height & width

All Items cards: same height, ideally 4 cards per row

Cards include title, image, short description, "See More" button

Clicking "See More" navigates to Details page (full info)

Minimum 7 relevant sections including Top Rated Items, Categories, Blog, Promotions, Offers, Newsletter, etc.

Footer

Website logo

Relevant links & social media (Facebook, LinkedIn)

All Items Page

Card view display

Sorting & filtering options

Open access (no login required)

Clean, professional design

Other Requirements

Complete design for all pages

No demo text or Lorem Ipsum

Fully responsive across devices

Equal margins between sections

Check for text/background contrast in dark mode

No unclickable buttons/links

Professional error pages