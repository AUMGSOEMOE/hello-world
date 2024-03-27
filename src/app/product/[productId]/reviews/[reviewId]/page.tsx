import {notFound} from "next/navigation"

export default function Product({params}:{params:{reviewId:string,productId : string}})  {
    if(parseInt(params.reviewId) > 100){
        notFound()
    }
    return <h1>{params.reviewId} reviews of {params.productId} product</h1>;
}