function Footer() {
  return (
    <div className="footer w-full h-auto  bottom-0">
    <footer className=" text-white bg-[#1F1F1F]  py-8 px-4">
<div className="container mx-auto ">
<div className="grid grid-cols-2 gap-8 mb-[2em]  lg:grid-cols-5">
{/* Column 1 */}
<div>
<h4 className="font-semibold mb-4 lg:text-xl">For Clients</h4>
<ul>
  <li><a href="" className="text-gray-400 hover:text-white">How to Hire</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Talent Marketplace</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Project Catalog</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Talent Scout</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Enterprise</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Payroll Services</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Direct Contact</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Hire Worldwide</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Hire in the USA</a></li>

</ul>
</div>

{/* Column 2 */}
<div>
<h4 className="font-semibold mb-4 lg:text-xl">For Talent</h4>
<ul>
  <li><a href="" className="text-gray-400 hover:text-white">For Talent</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">How to Find Work</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Direct Contact</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Find Freelance Job Worldwide</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Find Freelance Job in the USA</a></li>

</ul>
</div>

{/* Column 3 */}
<div>
<h4 className="font-semibold mb-4 lg:text-xl">Resources</h4>
<ul> 





  <li><a href="" className="text-gray-400 hover:text-white">Help & Support</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Success Stories</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Upwork Reviews</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Resources</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Blog</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Community</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
  

</ul>
</div>

{/* Column 4 */}
<div>
<h4 className="font-semibold mb-4 lg:text-xl">Company</h4>
<ul>
  <li><a href="" className="text-gray-400 hover:text-white">About Us</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Leadership</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Investor Relations</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Careers</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Our Impact</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Press</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Contact Us</a></li>
  <li><a href="" className="text-gray-400 hover:text-white">Trust, Safety & Security
  </a></li>
  <li><a href="" className="text-gray-400 hover:text-white">UK Modern Slavery Statement
  </a></li>
</ul>
</div>

{/* Column 5 */}
<div >
<h4 className="font-semibold mb-4 lg:text-xl">Download our App</h4>
<ul className=" flex flex-row justify-start gap-4 items-start">
  <li> <img src="playstore.svg" className="text-5xl"  alt="" /></li>
  <li> <img src="appstore.svg" alt="" /></li>
  
</ul>
</div>
</div>


<div className="line border border-solid border-white opacity-40  w-full	"></div>
{/* Footer Bottom */}
<div className="mt-5 grid grid-cols-2 lg:grid-cols-5 gap-2 text-[15px] font-normal  text-white lg:w-2/3">
<p>{new Date().getFullYear()} TrustLink</p>
<p>Terms of Service</p>
<p>Privacy Policy</p>
<p>CA Notice at Collection</p>
<div className="line hidden lg:flex border border-solid border-white opacity-40  w-full	h-[1.5em] border-y-0 border-r-0	"></div>

</div>
</div>
</footer>

</div>
  );
}

export default Footer;
