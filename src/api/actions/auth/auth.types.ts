//USER TYPES
export type GetMeQueryResponse = {
  firstName: string;
  lastName: string;
  username: string;
};

export type User = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

//LOGIN MUTATION TYPES
export type LoginMutationArguments = {
  email: string;
  password: string;
};

export interface LoginMutationResponse extends User {
  token: string;
}

//REGISTER MUTATION TYPES
export type RegisterMutationArguments = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// API_ACTION_TYPES
