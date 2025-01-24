import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
    return (
        <div>
            <LoginLink>
                <h1>Login</h1>
            </LoginLink>
        </div>
    );
};

export default page;