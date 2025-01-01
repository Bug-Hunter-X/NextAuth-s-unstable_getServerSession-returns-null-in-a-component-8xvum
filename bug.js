```javascript
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function MyComponent(props) {
  const session = await unstable_getServerSession(props.req, props.res, authOptions);
  // ... rest of component
}
```