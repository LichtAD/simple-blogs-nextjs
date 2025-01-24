import Link from 'next/link';

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export default async function Home() {
    const posts = await getPosts();

    return (
        <div style={{ padding: "10px" }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Blog Posts</h1>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                {posts.map((post, index) => (
                    <li key={post.id} style={{ marginBottom: "1rem" }}>
                        <Link href={`/posts/${post.id}`} style={{ color: "#3b82f6", textDecoration: "none" }}>
                            {index + 1}. {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
