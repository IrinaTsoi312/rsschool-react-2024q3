import { ReactNode, RefObject } from "react";

export interface SearchContextInitialValue {
  term: string,
  setTerm: React.Dispatch<React.SetStateAction<string>>,
}

export interface DataContextInitialValue {
  data: CharactersFetchedData | undefined,
  setData: React.Dispatch<
    React.SetStateAction<CharactersFetchedData | undefined>
  >,
  showDetails: boolean,
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  cardId: string,
  setCardId: React.Dispatch<React.SetStateAction<string>>
}

export interface ContextProps {
  children: ReactNode,
}

export type CharactersFetchedData = {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: null | string,
  },
  results: Character[],
};

export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
  episode: string[],
  url: string,
  created: string,
};

export type CSVCharacterData = {
  id: string,
  name: string,
  species: string,
}

export type CardCollectionState = {
  characters: Character[] | undefined,
  searchTerm: string,
  loading: string,
  message: string,
  showError: boolean,
  inputRef: RefObject<HTMLInputElement>,
};

export type CardProps = {
  name: string,
  imgUrl: string,
  species: string,
  id: number,
  checked: boolean
};

export type SearchPanelState = {
  searchTerm: string,
};

export type ErrorBoundaryState = {
  hasError: boolean,
};

export type ErrorBoundaryProps = {
  children: ReactNode,
  fallback: ReactNode,
};

export type HeaderProps = {
  hasError: boolean,
};

export type PaginationProps = {
  num: number,
  link: string,
  setCurrentPageNum: (num: number) => void
}

export type CollectionProps = {
  fetchedData: CharactersFetchedData,
}

export type CardDetailsProps = {
  fetchedData: Character[]
}
