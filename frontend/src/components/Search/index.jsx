import React from "react";

function Search({ setInputText }) {
  function debounce(fn, args) {
    let timer;
    // let timeout;
    // if (timeout) {
    //     return;
    // }

    // timeout = setTimeout(() => {

    // }, 500)
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, 1500);
    };
  }

  function onInputHandler(e) {
    debounce(() => setInputText(e.target.value))();
  }

  return (
    <div data-testid="search-comp">
      <input onChange={onInputHandler} />
    </div>
  );
}

export default Search;
