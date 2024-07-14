import { ReactNode, RefObject } from "react";

export type CharactersFetchedData = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CardCollectionState = {
  characters: Character[] | undefined;
  searchTerm: string;
  loading: string;
  message: string;
  showError: boolean;
  inputRef: RefObject<HTMLInputElement>;
};

export type CardProps = {
  name: string;
  imgUrl: string;
  species: string;
};

export type SearchPanelState = {
  searchTerm: string;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

export type HeaderProps = {
  hasError: boolean;
};
