export const startState = [
  {
    name: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    name: "Run",
    id: 123,
    completed: false,
  },
  {
    name: "Shop",
    id: 124,
    completed: false,
  },
  {
    name: "Work",
    id: 1235,
    completed: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          name: action.payload,
          id: Date.now(),
          completed: false,
        },
      ];
    case "TOGGLE_COMPLETE":
      return state.map((item) => {
        return action.payload === item.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "CLEAR_LIST":
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
};
