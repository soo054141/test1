import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import deleteButton from "../../images/delete button.png";
import { deleteSelectItem } from "../../store/app/appAction";

const StyledSelectItemBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 82.083vw;
  gap: 13px;
  margin-top: 10px;
  background-color: #9ed6d3;
`;

const ItemRow = styled.div`
  padding: 12px 19px;
  display: flex;
  align-items: center;
  gap: 13px;
`;

const ItemKey = styled.span`
  width: 140px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;

const DeleteButton = styled.img`
  width: 32px;
  height: 32px;
`;

const SelectItemBoard = () => {
  const dispatch = useDispatch();
  const { selectMap } = useSelector((state) => state.app);

  const deleteItem = useCallback(
    (key) => {
      dispatch(deleteSelectItem(key));
    },
    [dispatch],
  );
  return (
    <StyledSelectItemBoardWrapper>
      {selectMap &&
        React.Children.toArray(
          Object.keys(selectMap).map((item) => (
            <ItemRow>
              <ItemKey>{item}</ItemKey>
              <DeleteButton
                src={deleteButton}
                onClick={() => deleteItem(item)}
              />
            </ItemRow>
          )),
        )}
    </StyledSelectItemBoardWrapper>
  );
};

export default SelectItemBoard;
