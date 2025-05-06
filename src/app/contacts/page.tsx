import Link from "next/link"
import Navbar from "../navbar/page"

export default function contact() {
    return (
      <>
      <Navbar/>
      <h1 className="text-2xl"><u>Contact us</u></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur voluptas cum porro aliquid iste necessitatibus molestiae earum, quis labore doloremque eaque non. Totam, perferendis nemo quo rerum veritatis vitae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur voluptas cum porro aliquid iste necessitatibus molestiae earum, quis labore doloremque eaque non. Totam, perferendis nemo quo rerum veritatis vitae?
      </p>
      <h2  className="text-xl font-semibold mt-2"> <Link href={"./contacts/calls"}>  Call </Link>  </h2>
      <h2  className="text-xl font-semibold mt-2"> <Link href= {"./contacts/numbers"}>  Number </Link>  </h2>
      </>
    )
  }