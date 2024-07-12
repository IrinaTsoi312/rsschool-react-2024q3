import { useEffect, useState } from "react";
import "./CardCollection.scss";
import Card from "../Card/Card";
import {  Character } from "../../assets/types";
import Loader from "../../../public/icons8-rick-and-morty.svg";

const CardCollection = () => {
  const [characters, setCharacters] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [searchTerm , setSearchTerm] = useState("");
  const [isError, setIsError] = useState(false);

  const showLoader = <div>{Loader}</div>;

  useEffect(() => {
    if (isError) {
      throw new Error("Test for ErrorBoundary")
    }
    fetchData();
  }, [searchTerm, isError]);

  const fetchData = () => {
    const term = localStorage.getItem("searchTerm");
    if (!term) {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (term) {
      setSearchTerm(term);
      fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  const showError = () => {
    setIsError(true);
  };

  return (
    <main className="main">
      <section className="search">
        <div className="search-panel">
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              name="search"
              aria-roledescription="search input"
              defaultValue={searchTerm}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              id="searchBtn"
              type="button"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setSearchTerm(inputValue)
                localStorage.setItem("searchTerm", inputValue);
                fetchData();
              }}
            ></button>
          </form>
        </div>
        <button className="error-btn" onClick={showError}>
          Error
        </button>
      </section>
      <h2 className="message">Find your favorite character!</h2>
      {showLoader && (
        <section className="card-collection">
          <div className="collection">
            {characters!.map((item: Character) => (
              <Card
                key={item.id}
                imgUrl={item.image}
                name={item.name}
                species={item.species}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default CardCollection;

// export default class CardCollection extends Component<
//   object,
//   CardCollectionState
// > {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       characters: [],
//       searchTerm: "",
//       loading: "Loading...",
//       message: "Find your favorite character!",
//       showError: false,
//       inputRef: createRef(),
//     };
//   }

//   fetchData() {
//     const term = localStorage.getItem("searchTerm");
//     if (!term) {
//       fetch("https://rickandmortyapi.com/api/character")
//         .then((response) => response.json())
//         .then((data) => {
//           this.setState({ characters: data.results });
//         })
//         .catch((err) => {
//           console.error(err);
//           this.setState({ loading: "" });
//         });
//     }
//     if (term) {
//       this.setState({ searchTerm: term });
//       fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
//         .then((response) => response.json())
//         .then((data) => {
//           this.setState({ characters: data.results });
//         })
//         .catch((err) => {
//           console.error(err);
//           this.setState({ loading: "" });
//         });
//     }
//   }

//   componentDidMount(): void {
//     this.fetchData();
//   }

//   showError = () => {
//     this.setState({ showError: true });
//   };

//   render() {
//     const { characters, searchTerm, loading, message, showError, inputRef } =
//       this.state;

//     const showLoader = <div>{loading}</div>;

//     if (showError) {
//       throw new Error("Test for error Boundary");
//     }

//     return (
//       <main className="main">
//         <section className="search">
//           <div className="search-panel">
//             <form className="search-form">
//               <input
//                 type="text"
//                 className="search-input"
//                 name="search"
//                 aria-roledescription="search input"
//                 defaultValue={searchTerm}
//                 ref={inputRef}
//               />
//               <button
//                 id="searchBtn"
//                 type="button"
//                 className="btn"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   this.setState({ searchTerm: inputRef.current!.value });
//                   localStorage.setItem("searchTerm", inputRef.current!.value);
//                   this.fetchData();
//                 }}
//               ></button>
//             </form>
//           </div>
//           <button className="error-btn" onClick={this.showError}>
//             Error
//           </button>
//         </section>
//         <h2 className="message">{message}</h2>
//         {showLoader && (
//           <section className="card-collection">
//             <div className="collection">
//               {characters!.map((item: Character) => (
//                 <Card
//                   key={item.id}
//                   imgUrl={item.image}
//                   name={item.name}
//                   species={item.species}
//                 />
//               ))}
//             </div>
//           </section>
//         )}
//       </main>
//     );
//   }
// }
