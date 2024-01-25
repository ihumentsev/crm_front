import { format } from "date-fns";
import jsPDF from "jspdf";
import "jspdf-autotable";
import montserratFont from "../assets/fonts/montserrat/Montserrat-Medium.ttf";


export async function createOrderDocument(order) {
  const pdf = new jsPDF();

  pdf.addFont(
    montserratFont,
    "Montserrat",
    "normal",
    "Identity-H"
  );
  pdf.setFont('Montserrat');
  
  pdf.text(`Замовлення №${order.id} від №${format(
    new Date(order.createdAt),
    "dd-MM-yyyy"
  )}`, 20, 10);
  pdf.text(`Особовий рахунок замовника: ${order.owner}`, 20, 20);

  // Добавляем таблицу с продуктами
  const products = order.products || [];
  const columns = ['Продукт', 'Кількість', 'Ціна', 'Вартість'];
  const data = products.map(product => [product.product_name, product.quantity, product.price_per_item, product.total_price]);
  
  pdf.autoTable({
    head: [columns],
    body: data,
    startY:  30,
    styles: {
      font: 'Montserrat', 
      fontStyle: 'normal', 
      halign: 'left',
      valign: 'top', 
      fontSize: 10,
      lineColor: 10,
      lineWidth: 0.5, 
    },
  });
  
  const columnsDelyvery = ['Метод доставки', 'Місто', 'Адреса', 'Вартість'];
  const dataDelyvery = [
    ['Нет данных', 'Нет данных','Нет данных','Нет данных'],
   
  ];
  pdf.autoTable({
    head: [columnsDelyvery],
    body: dataDelyvery,
    // startY: 40,
    styles: {
      font: 'Montserrat', // или 'times', 'courier'
      fontStyle: 'normal', // или 'bold', 'italic', 'bolditalic'
      startY: pdf.autoTable.previous.finalY + 30,
    },
  });

// Сохранение или вывод на печать
pdf.save(`Замовлення: ${order.id}`);
  }

   