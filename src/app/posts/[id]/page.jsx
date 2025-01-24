async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    return res.json();
}

export default async function Post({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return (
        <div style={{ padding: "1.25rem", height: "100vh" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
            <a
                href="/"
                style={{
                    marginTop: "1.5rem",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: ".5rem 1rem",
                    borderRadius: ".25rem",
                    display: "inline-block",
                    textDecoration: "none"
                }}
            >
                Back to Home
            </a>
        </div>
    );
}
