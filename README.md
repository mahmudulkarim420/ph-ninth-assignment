# 🎯 SkillSwap – Local Skill Exchange Platform  

An interactive platform for individuals to offer, learn, and trade skills within their local area.  
Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse listings, rate experiences, and connect with local skill providers.

<br>

## 🔗 Live Site  
**Live URL:** [_Add your Netlify/Surge/Firebase URL here_](https://ph-ninth-assignment-da6b4.web.app/)  
**GitHub Repo:** [_Add your GitHub repo URL here_  ](https://github.com/programming-hero-web-course2/b12-a9-firesheild-mahmudulkarim420.git)

<br>

## 📌 Project Overview  
SkillSwap allows users to:  
- Browse available skills and providers in their area  
- View top-rated providers and popular skills  
- Authenticate using Email/Password or Google Login  
- Book sessions for skills  
- Update their profile information (Name, Photo)  
- Fully responsive SPA with modern UI design  
- Integration of multiple npm packages like AOS, Swiper, react-hot-toast  

<br>

---

# 🚀 Features  

### 🏠 **Home Page**
- Hero Slider (Swiper/DaisyUI)  
- Popular Skills Section (Cards with image, skill name, rating, price, "View Details" button)  
- Top Rated Providers Section (Static or JSON-based)  
- How It Works Section  
- Extra relevant section of your choice  

### 🔐 **Authentication**
- Login & Signup pages  
- Google Social Login  
- Password validation (Uppercase, Lowercase, 6+ characters)  
- Password toggle (eye icon)  
- Forget Password functionality with Gmail redirect  
- Protected routes for skill booking  

### 👤 **My Profile Page**
- Shows user Name, Email, Photo  
- Update Profile functionality (Name, Photo)  

### 📘 **Skill Details Page**
- Protected Route (redirect to login if not authenticated)  
- Display all skill details from JSON  
- Book Session form with toast notification  

### ⚙️ **Other Functionalities**
- Responsive layout for all devices  
- Persistent Navbar/Footer  
- Smooth animations (AOS, Animate.css, React-Spring)  
- SPA behavior (no route reload errors)  
- At least 10 meaningful GitHub commits  

---

# 🛠️ Tech Stack  

### **Frontend**
- React.js  
- React Router  
- Tailwind CSS  
- Firebase Authentication  
- Swiper.js, AOS, React-Hot-Toast  
- Axios  

### **Deployment**
- Netlify / Surge / Firebase (client)  

---

# 🗂️ Data Example (JSON Skills)
```json
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


# 🧪 How to Run Locally

 git clone  https://github.com/programming-hero-web-course2/b12-a9-firesheild-mahmudulkarim420.git

 # Install Dependencies
 
 npm install

 # Start Development Server

 npm run dev


