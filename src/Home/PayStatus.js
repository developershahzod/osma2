import React, { Component } from 'react'
import { getPaymentStatus, getPaymentStatusClick, getPaymentUzcard } from '../API';

export class PayStatus extends React.Component {
  state = {
    order_status: null,
  };

  async componentDidMount() {
    setTimeout(() => {
       this.loadStatus();
    }, 1000);


  }

  async loadStatus() {
    const { payment_type, id } = this.props.item;
    await this.checkPayStatus(payment_type, id);


  }

  async checkPayStatus(payment_type, id) {
    if (payment_type === 3) {
       await getPaymentStatus(this, id);
    } else if (payment_type === 5) {
       await getPaymentUzcard(this, id);
    }
     else if (payment_type === 4) {
       await getPaymentStatusClick(this, id);
    }  
    else {
 
    }
  }

  render() {
    const { order_status } = this.state;

    return (
      <div>
        {
          order_status === 1 ? '(Ожидает)' :
          order_status === 2 ? '(Успешно)' :
          order_status === 3 ? '(Отклонено)' :
          '(Ожидает)'
        }
      </div>
    );
  }
}
