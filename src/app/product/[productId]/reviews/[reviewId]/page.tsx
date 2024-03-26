export default function Product({params}:{params:{reviewId:string,productId : string}})  {
    return <h1>{params.reviewId} reviews of {params.productId} product</h1>;
}