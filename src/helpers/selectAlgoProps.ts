import { binarySearchCode, binarySearchText, bubbleSortCode, bubbleSortText, insertionSortCode, insertionSortText, interpolationSearchCode, interpolationSearchText, linearSearchCode, linearSearchText, quickSortCode, quickSortText, selectionSortCode, selectionSortText } from "../common/algoText";

type ReturnAlgoProps = {
  code: string;
  description: string;
  dispatchtype: { type: string };
}

export const selectAlgoProps = (sortId: string): ReturnAlgoProps => {
  switch (sortId) {
    case 'bubblesort':
      return { code: bubbleSortCode, description: bubbleSortText, dispatchtype: { type: "SORTING/BUBBLE_SORT" } };
    case 'insertionsort':
      return { code: insertionSortCode, description: insertionSortText, dispatchtype: { type: "SORTING/INSERTION_SORT" } };
    case 'selectionsort':
      return { code: selectionSortCode, description: selectionSortText, dispatchtype: { type: "SORTING/SELECTION_SORT" } };
    case 'quicksort':
      return { code: quickSortCode, description: quickSortText, dispatchtype: { type: "SORTING/QUICK_SORT" } };

      case 'linearsearch':
      return { code: linearSearchCode, description: linearSearchText, dispatchtype: { type: "SEARCHING/LINEAR_SEARCH" } };
      case 'binarysearch':
      return { code: binarySearchCode, description: binarySearchText, dispatchtype: { type: "SEARCHING/BINARY_SEARCH" } };
      case 'interpolationsearch':
      return { code: interpolationSearchCode, description: interpolationSearchText, dispatchtype: { type: "SEARCHING/INTERPOLATION_SEARCH" } };
    default:
      return { code: '', description: '', dispatchtype: { type: "" } };
  }
}