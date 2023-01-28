import { bubbleSortCode, bubbleSortText, insertionSortCode, insertionSortText, selectionSortCode, selectionSortText } from "../common/algoText";

type ReturnAlgoProps = {
  code: string;
  description: string;
  function: () => {};
}

export const selectAlgoProps = (sortId: string): ReturnAlgoProps => {
  const bubbleSort = () => ({ type: "SORTING/BUBBLE_SORT" });
  const insertionSort = () => ({ type: "SORTING/BUBBLE_SORT" });
  const selectionSort = () => ({ type: "SORTING/BUBBLE_SORT" });
  switch (sortId) {
    case 'bubblesort':
      return { code: bubbleSortCode, description: bubbleSortText, function: bubbleSort };
    case 'insertionsort':
      return { code: insertionSortCode, description: insertionSortText, function: insertionSort };
    case 'selectionsort':
      return { code: selectionSortCode, description: selectionSortText, function: selectionSort };
    default:
      return { code: '', description: '', function: bubbleSort };
  }
}