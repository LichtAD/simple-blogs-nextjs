export default async function PageDetails({ params }: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;
    
    return (
        <div>
            <h1>Product Details: {productId}</h1>
        </div>
    );
}