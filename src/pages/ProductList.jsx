import {useStateContext} from "../StateContext/StateContext";
import Card from "../components/Card";
import Spinner from "./spinner/Spinner";

function ProductList() {
    const {state:{product}} = useStateContext();

    // console.log(typeof product);
    return (
        <div>
            {product?.length > 0 ? <div className={'container mx-auto flex items-center flex-wrap gap-5 py-5'}>{product?.map(pd => <Card key={pd.dealID} item={pd}/>)}</div> : <Spinner/>}

        </div>
    )
}

export default ProductList