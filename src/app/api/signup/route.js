// export async function POST(req) {
//     const { username, email, password } = await req.json();

//     if (!username || !email || !password) {
//         return Response.json({ message: 'All fields are required' }, { status: 400 });
//       }

//        // Simulate uniqueness check
//   if (email === 'test@example.com') {
//     return Response.json({ message: 'User already exists' }, { status: 409 });
//   }

//   // Simulate DB write delay
//   await new Promise((res) => setTimeout(res, 1000));

//     // here we store in DB, we are mocking it
//     return Response.json ({ message: 'User created successfully' });
// }