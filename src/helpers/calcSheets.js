function calculateSheets(cardSize, quantities, sheetSize) {
  let cardWidth = parseInt(cardSize.split("x")[0]);
  let cardHeight = parseInt(cardSize.split("x")[1]);
  let sheetWidth = parseInt(sheetSize.split("x")[0]);
  let sheetHeight = parseInt(sheetSize.split("x")[1]);
  let maxCardsPerSheet = 0;
  // let totalSheets = 0;
  let totalSheets = [];

  // Проверяем, какое количество изделий можно расположить по ширине и высоте листа
  let cardsPerWidth = Math.floor(sheetWidth / cardWidth);
  let cardsPerHeight = Math.floor(sheetHeight / cardHeight);

  // Проверяем, какое количество изделий можно расположить по ширине и высоте листа при повороте на 90 градусов
  let cardsPerWidthRotated = Math.floor(sheetWidth / cardHeight);
  let cardsPerHeightRotated = Math.floor(sheetHeight / cardWidth);

  // Выбираем лучшее количество изделий для раскладки и обновляем maxCardsPerSheet
  if (
    cardsPerWidth * cardsPerHeight >=
    cardsPerWidthRotated * cardsPerHeightRotated
  ) {
    maxCardsPerSheet = cardsPerWidth * cardsPerHeight;
  } else {
    maxCardsPerSheet = cardsPerWidthRotated * cardsPerHeightRotated;
    // Меняем местами ширину и высоту изделия, если выбран повернутый вариант
    [cardWidth, cardHeight] = [cardHeight, cardWidth];
  }

  quantities.forEach((quantity) => {
    const sheets = Math.ceil(quantity / maxCardsPerSheet);
    // totalSheets += sheets;
    totalSheets.push(sheets);
  });

  return totalSheets;
}

// пример візова const sheet = calculateSheets("150x100", [200], "330x483");



export { calculateSheets };
