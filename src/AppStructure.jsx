import React, { useRef, useEffect, useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeNavigationScreen } from './features/user slice/NavigationSlice.js'
// logos and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import app_logo from './assets/app_logo.png'
// components ffrom views folder
import Dashboard from './views/dashboard/Dashboard.jsx'
import api from './axios.js'



const AppStructure = () => {
    const userNavigate = useNavigate()
    const dispatch = useDispatch()
    const userSlice_NavigationData = useSelector((state) => state.navigationSlice)
    const url_location = useLocation()
    const acitve_nav = (e) => {
        const link = e.currentTarget;
        const all_links = e.currentTarget.parentElement.children;
        for (let i = 0; i < all_links.length; i++) {
            all_links[i].classList.remove("active");

        }
        link.classList.add("active");
    }

    const [VendorProfileData, setVendorProfileData] = useState({})
    const UserProfile = async () => {
        try {
            const res = await api.get(`vednor_profile_get?vendorRef=${userSlice_NavigationData.vendorRef}`)
            setVendorProfileData(res.data.user)
            // console.log(res.data.user, 'venor profile ')

        }
        catch (err) {
            console.log(err, 'something went wrong from getting the vendor profile')
        }
    }
    
    // console.log(VendorProfileData, 'VendorData')

    useEffect(
        () => {
            const pathName_url = url_location.pathname == '/' ? 'Dashboard' : url_location.pathname.slice(1)
            const url = pathName_url.slice(0, 1).toUpperCase() + pathName_url.slice(1)
            // console.log(url ,'url name')
            dispatch(changeNavigationScreen(url))
        }, [url_location]
    )

    useEffect(
        ()=>{
            UserProfile()
        },[]
    )

    return (
        <div className='__app__'>
            <div className='sidebar' >
                <div className='app_logo'>
                    <img src={app_logo} alt="" />
                </div>
                <nav>
                    <Link className='active' onClick={acitve_nav} to='/'><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</Link>
                    <Link onClick={acitve_nav} to='/orders'><FontAwesomeIcon icon={faShoppingBag} />Orders</Link>
                    <Link onClick={acitve_nav} to='/products'><FontAwesomeIcon icon={faShoppingBag} />Products</Link>
                    <Link onClick={acitve_nav} to='/customer'><FontAwesomeIcon icon={faShoppingBag} />Customers</Link>
                    <Link onClick={acitve_nav} to='/discount'><FontAwesomeIcon icon={faShoppingBag} />Discount</Link>
                    <Link onClick={acitve_nav} to='/reports'><FontAwesomeIcon icon={faShoppingBag} />Reports</Link>
                </nav>
                <div className='user_logout' onClick={()=>{
                    localStorage.removeItem('vendorRef')
                    userNavigate('/login')
                }}>Logout</div>
            </div>

            <div className='container' >
                <div className='header'>
                    <div>{userSlice_NavigationData?.navigateScreen} - {VendorProfileData?.fullname}</div>
                </div>
                <div className='body'>
                    {/* <App /> */}

                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<h1>this is orders</h1>} />
                        <Route path="/products" element={<h1>this is products</h1>} />
                        <Route path="/customer" element={<h1>this is customer</h1>} />
                        <Route path="/discount" element={<h1>this is discount</h1>} />
                        <Route path="/reports" element={<h1>this is reports</h1>} />
                    </Routes>
                    {/* <h1>My App</h1> */}
                </div>
            </div>
        </div>
    )
}

export default AppStructure