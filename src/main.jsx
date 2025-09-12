import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import Features from './pages/FeaturedPage.jsx';
import Pricing from './pages/Pricing.jsx';
import AffiliateProgram from './pages/Affiliateprogram.jsx';
import Accounts from './pages/Accounts.jsx';
import PressKit from './pages/PressKit.jsx';
import Help from './pages/Help.jsx'
import Contact from './pages/Contact.jsx'
import Support from './pages/CustomerSupport.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import PrivacyPolicy from './pages/Privacypolicy.jsx'
import Licensing from './pages/Licensing.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path: "/features",
                element: <Features />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/affiliate-program",
                element: <AffiliateProgram />
            },
            {
                path: "/accounts",
                element: <Accounts />
            },
            {
                path: "/press-kit",
                element: <PressKit />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/customer-support",
                element: <Support />
            },
            {
                path: "/terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/licensing",
                element: <Licensing />
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
