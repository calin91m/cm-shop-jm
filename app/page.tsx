import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
export default function Home() {
  return (
    <div>
      hello! from homepage
      <div>
        <Button>
          <LoginLink>log In</LoginLink>
        </Button>
        <Button>
          <RegisterLink>sign Up</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
