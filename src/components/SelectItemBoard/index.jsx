import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledSelectItemBoardWrapper,
  ItemRow,
  ItemKey,
  DeleteButton,
} from "./style";
import deleteButton from "../../images/delete button.png";
import { deleteSelectItem } from "../../store/app/appAction";

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
