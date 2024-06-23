import Logo from '../source/icons_assets/Logo.svg'

function Nav() {
  return (
  <nav>    
    <ul>
      <li><a href="/home">Home</a></li>        
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Menu</a></li>  
      <li><a href="/reservation">Reservations</a></li>        
      <li><a href="/order">Order online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
    <a href='/image'><img src={Logo} alt='logo'/></a>
  </nav>
  )
}

export default Nav