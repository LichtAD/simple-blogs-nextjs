import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
    return (
        <div style={{
            height: "100vh",
        }}>
            <LoginLink>
                <h1>Login</h1>
            </LoginLink>
        </div>
    );
};

export default page;