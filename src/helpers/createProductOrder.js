import { format } from "date-fns";
// import PropTypes from "prop-types";
import jsPDF from "jspdf";
import "jspdf-autotable";
import montserratFont from "../assets/fonts/montserrat/Montserrat-Medium.ttf";


export async function createProductOrder(products) {
    const pdf = new jsPDF();
    // src\assets\fonts\montserrat\Montserrat-Medium.ttf
    pdf.addFont(
      montserratFont,
      "Montserrat",
      "normal",
      "Identity-H"
    );
    pdf.setFont("Montserrat");

    pdf.text(
      `Ордер на друк №${products.id} від ${format(
        new Date(products.created_at),
        "dd-MM-yyyy"
      )}`,
      20,
      20
    );
    
    // Добавляем таблицу с продуктами
    const columns = ["Найменування", "Опис"];
    const data = [
      ["Продукт", products.product_name],
      ["Розмір", products.size],
      ["Кількість", products.quantity],
      ["Опціі", products.option],
      ["Дата виготовлення", products.productionTime],
    ];
    // const data = products.map(product => [product.product_name, product.quantity, product.price_per_item, product.total_price]);

    pdf.autoTable({
      head: [columns],
      body: data,
      startY: 25,
      styles: {
        font: "Montserrat", // или 'times', 'courier'
        fontStyle: "normal", // или 'bold', 'italic', 'bolditalic'
        halign: "left", // или 'center', 'right'
        valign: "middle", // или 'middle', 'bottom'
        fontSize: 10,
        lineWidth: 0.1, // если 0, граница не рисуется
      },
    });
    const textY = pdf.autoTable.previous.finalY + 20;
    pdf.text(
      `Готова продукція по замовленню №${products.id} від ${format(
        new Date(products.created_at),
        "dd-MM-yyyy"
      )}`,
      20,
      textY
    );
   
    pdf.autoTable({
      head: [columns],
      body: data,
      startY: textY + 5,
      styles: {
        font: "Montserrat",
        fontStyle: "normal",
        lineWidth: 0.1,
        halign: "left",
        valign: "middle",
      },
    });


    pdf.save(`Ордер: ${products.id}`);
  }

   