import { binarySearchCode, binarySearchText, bubbleSortCode, bubbleSortText, graphBreadthFirstCode, graphBreadthFirstText, graphDepthFirstCode, graphDepthFirstText, graphDijkstraCode, graphDijkstraText, hashClosedAddressingCode, hashClosedAddressingText, hashOpenAddressingCode, hashOpenAddressingText, insertionSortCode, insertionSortText, interpolationSearchCode, interpolationSearchText, linearSearchCode, linearSearchText, quickSortCode, quickSortText, selectionSortCode, selectionSortText } from "../common/algoText";

type ReturnAlgoProps = {
  code: string;
  description: string;
  dispatchtype: { type: string };
}

export const selectAlgoProps = (sortId: string): ReturnAlgoProps => {
  switch (sortId) {
    //сортировки массивов
    case 'bubblesort':
      return { code: bubbleSortCode, description: bubbleSortText, dispatchtype: { type: "SORTING/BUBBLE_SORT" } };
    case 'insertionsort':
      return { code: insertionSortCode, description: insertionSortText, dispatchtype: { type: "SORTING/INSERTION_SORT" } };
    case 'selectionsort':
      return { code: selectionSortCode, description: selectionSortText, dispatchtype: { type: "SORTING/SELECTION_SORT" } };
    case 'quicksort':
      return { code: quickSortCode, description: quickSortText, dispatchtype: { type: "SORTING/QUICK_SORT" } };
    //алгоритмы поиска
    case 'linearsearch':
      return { code: linearSearchCode, description: linearSearchText, dispatchtype: { type: "SEARCHING/LINEAR_SEARCH" } };
    case 'binarysearch':
      return { code: binarySearchCode, description: binarySearchText, dispatchtype: { type: "SEARCHING/BINARY_SEARCH" } };
    case 'interpolationsearch':
      return { code: interpolationSearchCode, description: interpolationSearchText, dispatchtype: { type: "SEARCHING/INTERPOLATION_SEARCH" } };
    //хэш-таблицы
    case 'open-addressing':
      return { code: hashOpenAddressingCode, description: hashOpenAddressingText, dispatchtype: { type: "HASH_TABLE/OPEN_ADDRESSING" } };
    case 'closed-addressing':
      return { code: hashClosedAddressingCode, description: hashClosedAddressingText, dispatchtype: { type: "HASH_TABLE/CLOSED_ADDRESSING" } };
    //графы
    case 'breadth-first':
      return { code: graphBreadthFirstCode, description: graphBreadthFirstText, dispatchtype: { type: "GRAPH/BREADTH_FIRST" } };
    case 'depth-first':
      return { code: graphDepthFirstCode, description: graphDepthFirstText, dispatchtype: { type: "GRAPH/DEPTH_FIRST" } };
    case 'dijkstra':
      return { code: graphDijkstraCode, description: graphDijkstraText, dispatchtype: { type: "GRAPH/DIJKSTRA" } };
    default:
      return { code: '', description: '', dispatchtype: { type: "" } };
  }
}