"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);

  if (isAuthenticated === null) {
    return 
  }

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <h2 className="text-xl font-semibold mt-2">Welcome to the Dashboard:</h2>
      <p>
        Products may have different meanings in different contexts. In a typical
        manufacturing scenario, products are finished goods which are kept in
        inventory after being processed from raw materials. A product is
        something that can be seen or experienced, created to meet the needs or
        desires of consumers. It can be a physical item, a service, an
        experience, or even a concept. Important aspects of a product include
        its features, quality, brand, packaging, and price. Products are
        essential in marketing, serving as the base of a company's promise to
        its customers. Successful products meet customer needs well, stand out
        from the competition, and provide value to both the company and its
        stakeholders. In summary, a product is a key part of any business plan,
        influencing revenue, customer happiness, and overall market success.
      </p>
      <h2 className="text-xl font-semibold mt-2">
        <Link href="./dashboard/d1">More about products...</Link>
      </h2>
    </>
  );
}















// "use client";
// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation";
// import Link from "next/link"

// export default function Dashboard() {
//   const router = useRouter()
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state

//     // Check login status on component mount
//     useEffect(() => {
//         const loginStatus = localStorage.getItem('isLoggedIn');
//         if (loginStatus === 'true') {
//             setIsLoggedIn(true);
//         } else {
//             router.push('/login'); // Redirect to login if not logged in
//         }
//         setLoading(false); // Set loading to false after checking
//     }, [router]);
//   return (
//     <>
//       <h2 className="text-xl font-semibold mt-2">Welcome to the Dashboard:</h2>
//       <p>Products may have different meanings in different contexts. In typical manufacturing scenario, products are finished goods which are kept in inventory after being processed from raw materials.A product is something that can be seen or experienced, created to meet the needs or desires of consumers. It can be a physical item, a service, an experience, or even a concept. Important aspects of a product include its features, quality, brand, packaging, and price. Products are essential in marketing, serving as the base of a company's promise to its customers. Successful products meet customer needs well, stand out from the competition, and provide value to both the company and its stakeholders. In summary, a product is a key part of any business plan, influencing revenue, customer happiness, and overall market success.</p>
//       <h2  className="text-xl font-semibold mt-2"> <Link href={"./dashboard/d1"}>  More about products... </Link>  </h2>

//     </>
//   )
// }
