const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-32">
      <div className="max-w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <h3 className="text-2xl  mb-4 font-mono font-extrabold text-white"> Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Team</a></li>
            <li><a href="#" className="hover:text-gray-200">Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold mb-4 font-mono text-white">Visit Us!</h3>
          <p>Address</p>
          <p className="mt-4">
            <strong>Saturday:</strong> CLOSED <br />
            <strong>Sunday-Friday:</strong> 8am-5pm <br />

          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 font-mono text-white">Policy <span className="font-dancingScript"> & </span> Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Salon Policies</a></li>
            <li><a href="#" className="hover:text-gray-200">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-200">Payment Methods</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 font-mono text-white">Contact</h3>
          <p className="font-robotoCondensed">
            <strong>Tel: </strong> 9876543210 <br />
            <strong>Email: </strong><a href="mailto:emailtosomewhere@gmail.com" className="hover:text-gray-400">emailtosomewhere@gmail.com</a>
          </p>
          <div className="mt-4 flex space-x-8 text-white ">
            <a href="http://tiktok.com" className="hover:text-gray-400 text-2xl"><i className="fab fa-tiktok"></i></a>
            <a href="http://facebook.com" className="hover:text-gray-400 text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="http://instagram.com" className="hover:text-gray-400 text-2xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

    </footer>
  )
}
export default Footer