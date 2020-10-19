import React , {useEffect} from "react";
import Order from "../../Components/checkOutSummary/Order/Order";
import axios from "../../axios/axiosinstance";
import errorHandler from "../../hoc/errorHandler/errorHandler";
import {connect} from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import *  as actionCreator from "../../Store/Actions/Index"; 
const orders=(props)=>{
    const {onOrdersFetched}=props;
    useEffect(()=>{
    onOrdersFetched(props.token,props.userId);

    },[onOrdersFetched]);
       /* axios.get("/order.json").then(res=>{
            //console.log(res.data);
            let fetchedorders=[];
            for(let key in res.data){
                fetchedorders.push({
                    ...res.data[key],
                    id:key
                });
            }
            this.setState({order:fetchedorders,loading:false})
           // console.log(fetchedorders);

        }).catch(error=>{
            console.log(error);
            this.setState({loading:false});
        })*/
    //console.log(this.props.userId);
    
    
        const order=props.orders;
        let orderel=<Spinner/>
        if(!props.loading){
           orderel=order.map(el=>{
            return(
                <Order key={el.id}
                ingredients={el.ingredients}
                price={el.price}
                />
            )
        })
    }

        return (
            <div>
                   {orderel}
            </div>
        )

    }


const mapStateToProps=(state)=>{
    return{
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    onOrdersFetched:(token,userId)=>dispatch(actionCreator.fetchOrdersAction(token,userId))
}
}
export default connect(mapStateToProps,mapDispatchToProps)( errorHandler(orders,axios));