import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Admin from "./components/admin/Admin"
import { AuthProvider } from "./components/auth/AuthProvider"
import Login from "./components/auth/Login"
import Profile from "./components/auth/Profile"
import Registration from "./components/auth/Registration"
import RequireAuth from "./components/auth/RequireAuth"
import BookingSuccess from "./components/booking/BookingSuccess"
import Bookings from "./components/booking/Bookings"
import Checkout from "./components/booking/Checkout"
import FindBooking from "./components/booking/FindBooking"
import Home from "./components/home/Home"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import AddRoom from "./components/room/AddRoom"
import EditRoom from "./components/room/EditRoom"
import ExistingRooms from "./components/room/ExistingRooms"
import RoomListing from "./components/room/RoomListing"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {
	return (
		<AuthProvider>
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
						<Route path="/add-room" element={<AddRoom />} />

						<Route
							path="/book-room/:roomId"
							element={
								<RequireAuth>
									<Checkout />
								</RequireAuth>
							}
						/>
						<Route path="/browse-all-rooms" element={<RoomListing />} />

						<Route path="/admin" element={<Admin />} />
						<Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
						<Route path="/find-booking" element={<FindBooking />} />

						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Registration />} />

						<Route path="/profile" element={<Profile />} />
						<Route path="/logout" element={<FindBooking />} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</AuthProvider>
	)
}

export default App
