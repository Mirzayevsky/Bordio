
// remove card from  column
export const removeCardFromColumn = (column, fromIndex) => {
  const newItems = [...column.items];

  newItems.splice(fromIndex, 1);

  return {
    ...column,
    items: newItems,
  };
};

//add card to column
export const addCardToColumn = (column, toIndex, card) => {
  const newItems = [...column.items];

  newItems.splice(toIndex, 0, { ...card, status: column.status });

  return {
    ...column,
    items: newItems,
  };
};

// move card in column
export const moveCardInColumn = (column, fromIndex, toIndex) => {
  const newItems = [...column.items];

  newItems.splice(fromIndex, 1);
  newItems.splice(toIndex, 0, column.items[fromIndex]);

  return {
    ...column,
    items: newItems,
  };
};

