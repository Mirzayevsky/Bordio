import React, { useState, useCallback, DragEventHandler } from "react";
import {
  TaskCount,
  TaskContent,
  Header,
  TasksWrapper,
  Title,
  Wrapper,
  TitleWrapper,
} from "./styles";
import {
  addCardToColumn,
  removeCardFromColumn,
  moveCardInColumn,
} from "../../helpers/board/index";

import { data } from "../../data";
import TaskColumn from "../TaskColumn";

const Board = () => {

  const [boardData, setBoardData] = useState(data);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentColumn, setCurrentColumn] = useState(null);

  const handleDrop = useCallback( (event, column, card) => {
      event.stopPropagation();
      console.log("handleDrop data")
      console.log(column)
      console.log(card)
      console.log(event)

      if (!(currentCard && currentColumn)) return;

      const toIndex = card ? column.items.indexOf(card) : column.items.length;
      const fromIndex = currentColumn.items.indexOf(currentCard);
      const isSameColumn = column.id === currentColumn.id;

      setBoardData((prevState) =>
        prevState.map((prevCol) => {
          if (isSameColumn && prevCol.id === currentColumn.id) {
            return moveCardInColumn(currentColumn, fromIndex, toIndex);
          }

          if (prevCol.id === currentColumn.id) {
            return removeCardFromColumn(currentColumn, fromIndex);
          }

          if (prevCol.id === column.id) {
            return addCardToColumn(column, toIndex, currentCard);
          }

          return prevCol;
        })
      );
      setCurrentCard(null);
      setCurrentColumn(null);
    },
    [currentCard, currentColumn]
  );

  const handleDragStart = useCallback((_, column, card) => {
    setCurrentCard(card);
    setCurrentColumn(column);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <TaskContent>
      {/* <----------- Header ---------------->*/}
      <Header>
        {boardData.map(({id,label,items}) => {
          return (
            <TitleWrapper key={id}>
              <Wrapper>
                <Title>{label}</Title>
                <TaskCount>{items.length}</TaskCount>
              </Wrapper>
            </TitleWrapper>
          );
        })}
      </Header>

      {/* <----------- Columns of Task ---------------->*/}
      <TasksWrapper>
        {/* start cheaking from here...... */}
        {boardData.map((item) => {
          return (
            <TaskColumn
                key={item.id}
                type={item.id}
                data={item}
                onDrop={handleDrop}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver} />
          )
        })}
      </TasksWrapper>
    </TaskContent>
  );
};
export default Board;
