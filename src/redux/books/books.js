const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  status: 'Idle',
  books: [],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState();
  console.log(`State before: ${stateBefore.booksReducer.books.title}`);
  dispatch(
    addBook({
      id: '1',
      title: 'hello',
      category: 'romance',
    }),
  );
  const stateAfter = getState();
  console.log(`State after: ${stateAfter.booksReducer.books.item1[0].title}`);
};

const GET_CURRENT_API = 'GET_CURRENT_API';
const GET_CURRENT_API_SUCCESS = 'GET_CURRENT_API_SUCCESS';
const GET_CURRENT_API_FAILURE = 'GET_CURRENT_API_FAILURE';
const API = `
  https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/te3yGvr5UxRAlLl8NErA/books
`;

export const getApi = async (dispatch) => {
  dispatch({ type: GET_CURRENT_API });
  const books = await fetch(API).then((res) => res.json());
  return dispatch({ type: GET_CURRENT_API_SUCCESS, books });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK: {
      const newBook = { ...state.books };
      delete newBook[action.payload];
      return {
        ...state,
        books: newBook,
      };
    }
    case GET_CURRENT_API:
      return {
        ...state,
        status: 'Loading',
      };
    case GET_CURRENT_API_SUCCESS:
      return {
        books: action.books,
        status: 'SUCCESS',
      };
    case GET_CURRENT_API_FAILURE:
      return {
        ...state,
        status: 'ERROR',
      };
    default:
      return state;
  }
};

export const selectBooks = (state) => state.booksReducer.books;

export default reducer;
