# React Lab Works Dashboard 🚀

A modern, interactive React application showcasing various programming utilities and educational components. This dashboard provides a clean, professional interface for exploring different mathematical and computational tools.

## ✨ Features

### 🏠 **Interactive Dashboard**
- Beautiful grid-based layout with hover animations
- Gradient backgrounds and modern UI design
- Responsive design that works on all screen sizes
- Sticky navigation for easy component switching

### 🧮 **Mathematical Tools**
- **Armstrong Number Checker**: Verify if a number is an Armstrong number
- **Natural Numbers Display**: Show the first N natural numbers
- **Factorial Calculator**: Calculate factorials with an intuitive interface
- **Greatest of Three**: Find the maximum value among three numbers

### 🎮 **Interactive Components**
- **Ball Box Game**: Practice coding interview questions in an engaging format

## 🛠️ Tech Stack

- **React 18+** - Modern React with functional components
- **React Router DOM** - Client-side routing and navigation
- **React Icons** - Beautiful, customizable icons
  - `react-icons/tb` - Tabler Icons
  - `react-icons/ri` - Remix Icons  
  - `react-icons/io` - Ionicons
  - `react-icons/fa` - Font Awesome
- **CSS3** - Custom styling with gradients and animations

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-lab-works-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react-router-dom react-icons
   # or
   yarn add react-router-dom react-icons
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 📁 Project Structure

```
src/
├── App.js                 # Main application component with routing
├── App.css               # Global styles
├── components/
│   ├── ArmstrongChecker.js
│   ├── NaturalNumber.js
│   ├── FactorialCalculator.js
│   ├── GreatestOfThreeNumbers.js
│   └── InterviewQuestion.js
└── index.js              # Application entry point
```

## 🎯 Component Overview

### **HomePage Component**
- Landing page with interactive component cards
- Grid layout with hover effects and animations
- Clear navigation to all available tools

### **Navigation Component**
- Sticky navigation bar for easy access
- Links to all components
- Responsive design with clean styling

### **PageWrapper Component**
- Consistent layout wrapper for all pages
- Breadcrumb navigation back to dashboard
- Professional styling with shadows and borders

## 🎨 Design Features

### **Visual Elements**
- **Gradients**: Beautiful CSS gradients for backgrounds and cards
- **Hover Effects**: Smooth transitions and transform animations
- **Icons**: Meaningful icons from react-icons library
- **Typography**: Clean, readable fonts with proper hierarchy
- **Shadows**: Subtle box-shadows for depth and professionalism

### **Color Scheme**
- Primary: `#667eea` to `#764ba2` gradient
- Background: `#f5f7fa` to `#c3cfe2` gradient
- Text: Various shades of gray for optimal readability

## 🚀 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Main dashboard with component overview |
| `/armstrong-checker` | ArmstrongChecker | Check Armstrong numbers |
| `/natural-numbers` | NaturalNumbers | Display natural numbers |
| `/factorial-calculator` | FactorialCalculator | Calculate factorials |
| `/greatest-of-three` | GreatestOfThreeNumbers | Find maximum of three numbers |
| `/interview-questions` | InterviewQuestion | Ball Box Game |

## 🔧 Customization

### **Adding New Components**
1. Create your component in the `components/` directory
2. Import it in `App.js`
3. Add a new route in the `Routes` section
4. Add a new card to the `components` array in `HomePage`

### **Styling**
- Modify the inline styles in `App.js` for layout changes
- Update `App.css` for global styles
- Colors and gradients can be easily customized in the style objects

## 📱 Responsive Design

The application is fully responsive and works well on:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Responsive grid that adapts to screen size
- **Mobile**: Single column layout with touch-friendly interactions

## 🎯 Educational Value

Perfect for:
- **Learning React Router**: Demonstrates navigation and routing
- **React Best Practices**: Modern functional components and hooks
- **UI/UX Design**: Professional interface design patterns
- **Mathematical Concepts**: Interactive tools for learning algorithms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Commit your changes (`git commit -am 'Add new component'`)
4. Push to the branch (`git push origin feature/new-component`)
5. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify that you're using a compatible Node.js version
4. Create an issue in the repository for bug reports

---

**Happy Coding!** 🎉

Built with ❤️ using React and modern web technologies.