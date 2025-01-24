import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Profile() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);

    return (
        <div>
            <h1>Welcome to your Profile: {user.given_name}</h1>
        </div>
    );
}