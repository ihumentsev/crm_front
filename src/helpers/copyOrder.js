export default function copyOrder(order){
    const obj = {
        owner: order.owner,
        total_amount: order.total_amount,
        source: order.source,
        deliveryMethod: order.deliveryMethod, 
        deliveryCity: order.deliveryCity,
        deliveryAdress: order.deliveryAdress, 
        deliveryCost: order.deliveryCost,
        products: order.products.map((product) => {
          
        //   let desriptonText = "";
        //   for (const optionName in product.option) {
        //     desriptonText += `${product.option[optionName]}, `
        //   }
    
          return {
            product_name: product.product_name,
            quantity: product.quantity,
            price_per_item: product.price_per_item,
            image_url: product.image_url,
            option: product.option,
            productionTime: product.productionTime,
            size: product.size,
            // description: desriptonText,
          };
        }),
      };
      return obj
}