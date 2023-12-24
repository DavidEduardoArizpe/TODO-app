import React, { useRef } from "react";

function CratePoster(props) {
  const text = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text.current.value.trim() !== '') {
          props.show(false);
          props.posters(prevPosters => [...prevPosters, { text: text.current.value }]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text: <input type="text" ref={text} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CratePoster;
