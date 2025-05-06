// import { Response } from 'next/server'

// export async function POST(req) {
//     const { email, password } = await req.json();
// //mock check

// if (!email || !password) {
//     return Response.json({ message: 'Email and password are required' }, { status: 400 });
//   }

//   // Simulate DB delay
//   await new Promise((res) => setTimeout(res, 1000));
  
//     if (email=== 'test@example.com' && password === 'password123') {
//         return Response.json ({ message:'Login success', token:'fake-jwt-token' });
//     }
//     return Response.json ({ message:'Invalid credentials'}, { status: 401 });

// }
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      // Replace this with your actual authentication logic
      if (email === "user@example.com") {
        // Simulate a successful login
        res.status(200).json({ success: true, token: 'fake-jwt-token' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }