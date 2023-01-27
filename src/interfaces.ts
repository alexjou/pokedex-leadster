export interface IAbility {
  url: string;
  name: string;
}

export interface IAbilities {
  name: string;
  ability: Array<IAbility>;
  is_hidden: boolean;
  slot: number;
}

export interface ISprite {
  front_default: string;
}

export interface IStats {
  stat: any;
  base_stat: number;
}

export interface IType {
  name: string;
  url: string;
}

export interface ITypes {
  slot: number;
  type: IType;
}
export interface IEvoSprites {
  src: string;
}

export interface IPokemon {
  evoSprites: Array<IEvoSprites>;
  name: string;
  description: string;
  types: Array<ITypes>;
  id: number;
  weight: number;
  height: number;
  stats: Array<IStats>;
  sprites: ISprite;
  abilities: Array<IAbilities>;
  evoNames: any;
}

export interface IPokemonBasicData {
  name: string;
  url: string;
}

export interface IUser {
  id: string;
  uid: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLogin {
  id: string;
  name: string;
  email: string;
}

export type IUserContext = {
  user: IUser;
  themeUpdate: string;
  theme: string;
  signIn: (data: IUser) => void;
  signUp: (data: IUser) => void;
  signOut: () => void;
  updateUser: (data: IUser) => void;
  changeTheme: () => void;
};
