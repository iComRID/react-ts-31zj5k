import { createContext, useState } from 'react';
import * as React from 'react';

interface IUser {
  name: string;
  email: string;
  phone: number;
}

type UserType = {
  user: IUser[];
  setUser: React.Dispatch<React.SetStateAction<string[]>>;
};

type Props = {
  chidren: React.ReactNode;
};

export const UserContext = createContext<null | UserType>(null);

export const UserContextProvider = ({ chidren }: Props) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {chidren}
    </UserContext.Provider>
  );
};
