import ProfilePic from '../img/profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img src={ProfilePic} className='navbar-img' alt='profile-pic'/>
      <p className='navbar-profile'>Jayesh Nayak</p>
      <button className='navbar-button'>Log out</button>
    </div>
  )
}

export default Navbar;