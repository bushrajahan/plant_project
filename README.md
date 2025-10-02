# Project Documentation

## Getting Started

To run the project:

```bash
# Navigate to frontend folder
cd Frontend

# Install dependencies
npm install

# Run the frontend
npm run dev
## Frontend Folder Stucture
Frontend/
│── public/                # Static assets (favicon, logo, etc.)
│── src/
│   │── api/               # Axios/Fetch wrappers for API calls
│   │── assets/            # Images, icons, fonts
│   │── components/        # Reusable components (Navbar, Footer, etc.)
│   │── pages/             # Full-page components (Home, Cart, Orders, etc.)
│   │── hooks/             # Custom React hooks (useAuth, useCart, etc.)
│   │── context/           # React Context API (AuthContext, CartContext)
│   │── utils/             # Helper functions (formatCurrency, validation)
│   │── styles/            # Global styles (Tailwind config / SCSS)
│   │── App.jsx            # Main App entry
│   │── main.jsx           # ReactDOM entry
│── package.json



