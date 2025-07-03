import axios from 'axios';


export async function changeOrderStaus(id, status) {

  
  axios
  .put(`https://osma.academytable.ru/api/v1/edit_order/${id}/`, 
    {
      "status": status,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  .then((response) => response.data)
  .then((data) => {
    window.history.back();
    
  
  })
  .catch((error) => {
    console.log(error);
    alert('Not work 1')

  });
}


export const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'UZS',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,  // Prevent decimal places
    maximumFractionDigits: 0, 
  }).format(price).replace('UZS', 'UZS');
};


export async function getPaymentStatus(component, order_id) {


  

  component.setState({loader: true})

  axios
    .get(`https://osmapayment.academytable.ru/api/v1/payment_order/${order_id}/`,{


    })
    .then((response) => response.data[0])
    .then((data) => {
      // component.props.navigation.navigate('Home');

      if(data.status == 'nostatus'){
        component.setState({order_status: 1})
      }else if(data.status == 'success'){
        component.setState({order_status: 2})
      }else if(data.status == 'processing'){
        component.setState({order_status: 1})
      }else if(data.status == 'failed'){
        component.setState({order_status: 3})
      }else if(data.status == 'canceled'){
         component.setState({order_status: 3})
      }else{
        component.setState({order_status: 1})
      }




      component.setState({loader: false});
    //   storeSession_token(data.data.session_token)
    //   storeSecurity_code(data.data.security_code)

    })
    .catch((error) => {
      // component.props.navigation.navigate('Login');
      console.log("Main a error: " + error);
      component.setState({loader: false});
    });
}

export async function getPaymentUzcard(component, order_id,) {


  

  component.setState({loader: true})

  axios
    .get(`https://osmapayment.academytable.ru/api/v1/uzcard_order/${order_id}/`,{


    })
    .then((response) => response.data[0])
    .then((data) => {
      // component.props.navigation.navigate('Home');

       if(data.length == 0){
        component.setState({order_status: 1})
      }

      if(data.status == 'nostatus'){
        component.setState({order_status: 1})
      }else if(data.status == 'success'){
        component.setState({order_status: 2})
      }else if(data.status == 'processing'){
        component.setState({order_status: 1})
      }else if(data.status == 'failed'){
        component.setState({order_status: 3})
      }else if(data.status == 'canceled'){
         component.setState({order_status: 3})
      }else{
        component.setState({order_status: 1})
      }




      component.setState({loader: false});
    //   storeSession_token(data.data.session_token)
    //   storeSecurity_code(data.data.security_code)

    })
    .catch((error) => {
      // component.props.navigation.navigate('Login');
      console.log("Main a error: " + error);
      component.setState({loader: false});
    });
}

export async function getPaymentStatusClick(component, order_id,) {


  

  component.setState({loader: true})

  axios
    .get(`https://osmapayment.academytable.ru/api/v1/click_order/${order_id}/`,{


    })
    .then((response) => response.data[0])
    .then((data) => {
      // component.props.navigation.navigate('Home');

      if(data.status == 'waiting'){
        component.setState({order_status: 1})
      }else if(data.status == 'confirmed'){
        component.setState({order_status: 2})
      }else if(data.status == 'preauth'){
        component.setState({order_status: 1})
      }else if(data.status == 'rejected'){
        component.setState({order_status: 3})
      }else if(data.status == 'error'){
         component.setState({order_status: 3})
      }
      else if(data.status == 'input'){
         component.setState({order_status: 3})
      }
      else if(data.status == 'input'){
         component.setState({order_status: 3})
      }
      else if(data.status == 'refunded'){
         component.setState({order_status: 3})
      }
      
      else{
        component.setState({order_status: 1})
      }




      component.setState({loader: false});
    //   storeSession_token(data.data.session_token)
    //   storeSecurity_code(data.data.security_code)

    })
    .catch((error) => {
      // component.props.navigation.navigate('Login');
      console.log("Main a error: " + error);
      component.setState({loader: false});
    });
}

export async function getOrders(component, status, date) {


    // component.setState({loader: true});
  
    axios
      .get(`https://osma.academytable.ru/api/v1/orders/${status}/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)

        if(date == null){
          component.setState({orders: data})
        }else{
          component.setState({orders: 
                    data.filter(order => {
                        const orderDate = new Date(order.created_at).toISOString().split("T")[0];
                        return orderDate === date;
                      })
                  });
        }
       
        component.setState({loader: false});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
}

export async function getOrderProduct(component, order_id) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/order_product/${order_id}/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({orders: data});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
}

  export async function getAllOrders(component, status) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/orders_all/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        data.sort((a, b) => b.id - a.id);
component.setState({ orders_all: data });
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }


  export async function getAllProducts(component, status) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/products/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({orders: data});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }

  export async function getBrands(component) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/brand/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({brands: data});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }

  export async function getClients(component, status) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/clients/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({orders: data});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }


  export async function getOrderByID(component, id) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/orders_d/${id}/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({data: data[0]});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }


  export async function getOrdersByUserID(component, id) {


  
    axios
      .get(`https://osma.academytable.ru/api/v1/order_user/${id}/`, 
        {
       
      })
      .then((response) => response.data)
      .then((data) => {
        // component.props.navigation.navigate('Home');
  
        console.log("Orders: " + JSON.stringify(data));
  
      //   storeSession_token(data.data.session_token)
      //   storeSecurity_code(data.data.security_code)
        component.setState({orders: data});
      })
      .catch((error) => {
        component.props.navigation.navigate('Login');
        console.log(error);
        component.setState({loader: false});
      });
  }


 


  export async function addToHits(component, id, hitStatus) {

  
    axios
    .put(`https://osma.academytable.ru/api/v1/edit_product/${id}/`, 
      {
        "hit": hitStatus,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => response.data)
    .then((data) => {
      // window.history.back();
      
    
    })
    .catch((error) => {
      console.log(error);
      alert(JSON.stringify(error))
  
    });
  }

  export async function addTobestsellers(component, id, hitStatus) {

  
    axios
    .put(`https://osma.academytable.ru/api/v1/edit_product/${id}/`, 
      {
        "bestsellers": hitStatus,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => response.data)
    .then((data) => {
      // window.history.back();
      
    
    })
    .catch((error) => {
      console.log(error);
      alert(JSON.stringify(error))
  
    });
  }
  
  export async function addTobrand_bestsellers(component, id, hitStatus) {

  
    axios
    .put(`https://osma.academytable.ru/api/v1/edit_product/${id}/`, 
      {
        "brand_bestsellers": hitStatus,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => response.data)
    .then((data) => {
      // window.history.back();
      
    
    })
    .catch((error) => {
      console.log(error);
      alert(JSON.stringify(error))
  
    });
  }

  export async function changeCount(component, id, stock) {

  
    axios
    .put(`https://osma.academytable.ru/api/v1/edit_product/${id}/`, 
      {
        "stock": stock,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => response.data)
    .then((data) => {
      // window.history.back();
      
    
    })
    .catch((error) => {
      console.log(error);
      alert(JSON.stringify(error))
  
    });
  }
  
  
