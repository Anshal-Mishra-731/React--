import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "./container";

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    //Ye buttons add karne ka saral tariqa hai , kaunsa ka button dikhega kaunsa nahi vo saral hojaata hai.
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return(
    <header className="py-3 shadow bg-gray-500">
        <Container>
            <nav>
                {/* <div>
                    <Link to = '/'>
                    <Logo width = '70px' />
                    </Link>
                </div> */}
                
                {/* Jo HTML element repeat hota hai uske keys lagaate hain subh hota hai
                    Dekh le navigae ko kaise prayog ho raha, slug traverse karne keliye*/}

                <ul className="flex ml-auto">
                    {navItems.map((item) =>
                    item.active ? (
                        <li key={item.name}>
                            <button 
                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            onClick={() => navigate(item.slug)}>{item.name}
                            </button>
                        </li>
                    ) : null
                    )}
                    {/*Ye syntax mein () waali cheezein chalti yadi pehle true ho*/}
                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
  )
}