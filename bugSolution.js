```javascript
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session
    }
  }
}

export default function MyComponent({ session }) {
  // ... rest of the component, access session here
}
```