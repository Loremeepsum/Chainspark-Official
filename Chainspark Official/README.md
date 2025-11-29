# ChainSpark 🔥

A collaborative idea-sharing platform where users co-create ideas through sequential contributions. Start a "spark" and watch it grow as others add their contributions!

## ✨ Features

- **Start Sparks**: Begin an idea with a short fragment (up to 100 characters)
- **Contribute**: Add your contribution to incomplete chains (5 fragments total)
- **Idea Wall**: Browse completed ideas with likes, comments, and engagement
- **Contribution Queue**: See chains waiting for contributions
- **User Profiles**: View your contribution history and stats
- **Dark Mode**: Toggle between light and dark themes
- **Real-time Updates**: Firebase integration for live collaboration
- **Analytics Dashboard**: Admin view with platform statistics

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- (Optional) Firebase project for cloud sync

### Local Development

1. **Clone or download this repository**

2. **Open `index.html` in a web browser**
   - The app works entirely client-side
   - Uses localStorage as a fallback if Firebase isn't configured

3. **Configure Firebase (Optional)**
   - Open `index.html`
   - Find the `firebaseConfig` object (around line 324)
   - Replace placeholder values with your Firebase project credentials:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
     };
     ```

4. **Start using ChainSpark!**
   - Click "Sign In" to create an account
   - Start your first spark or contribute to existing chains

## 📁 Project Structure

```
Chainspark/
├── index.html          # Main application file (all code)
├── FullLogo-02.svg     # Light mode logo
├── Fulllogo_dark-05.svg # Dark mode logo
├── Logo512-04.svg      # App icon
├── README.md           # This file
├── IMPROVEMENTS.md      # Detailed improvement recommendations
└── .gitignore          # Git ignore rules
```

## 🎯 How It Works

1. **Start a Spark**: Users begin an idea with a short fragment
2. **Contribute**: Other users add up to 4 more fragments (5 total)
3. **Complete**: When a chain reaches 5 fragments, it becomes a completed idea
4. **Engage**: Users can like, dislike, and comment on completed ideas

## 🔧 Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: Firebase Firestore (optional, with localStorage fallback)
- **Authentication**: Simple email-based (Firebase Auth compatible)
- **Icons**: Custom SVG icons

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Notes

- **Firebase credentials**: Use `firebase-config.js` (not in git) - see `firebase-config.example.js`
- **Input sanitization**: All user inputs are sanitized and validated
- **XSS protection**: Enhanced HTML escaping and Content Security Policy
- **File validation**: Image uploads validated for type and size
- **See SECURITY_AND_OPTIMIZATION_CHANGES.md** for detailed security improvements

## 🛠️ Development

### Current Architecture

The application is a single-page application (SPA) with all code in `index.html`:
- **State Management**: Global `state` object
- **Rendering**: Manual DOM manipulation via `render()` function
- **Data Persistence**: Firebase Firestore or localStorage

### Future Improvements

See `IMPROVEMENTS.md` for detailed recommendations on:
- Code organization and modularization
- Performance optimization
- Testing strategy
- Security enhancements
- Build process setup

## 📊 Admin Features

To access admin features:
1. Sign up with email: `admin@chainspark.com`
2. Access the Analytics Dashboard from the user menu
3. View platform statistics and user metrics

## 🤝 Contributing

This is a project for Product Development Studio. For improvements and contributions, please refer to the improvement recommendations in `IMPROVEMENTS.md`.

## 📝 License

This project is part of a university course. Please respect academic integrity guidelines.

## 🐛 Known Issues

- Duplicate notification announcement (fixed in latest version)
- No build process (all code in single file)
- Firebase config needs to be set up for cloud features

## 🎨 Design

- **Primary Colors**: Custom brand colors defined in CSS variables
- **Typography**: Aleo (headings) and Lato (body)
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-friendly design with Tailwind CSS

## 📈 Roadmap

See `IMPROVEMENTS.md` for a detailed roadmap of suggested improvements including:
- Module-based architecture
- Testing framework
- Performance optimization
- Enhanced security
- Better accessibility

---

**Made with ❤️ for collaborative ideation**

