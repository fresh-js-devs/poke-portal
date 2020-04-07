import React from "react";

const Template = ({ name, isLoading, card, error }) => {
  const renderCard = () => {
    const { imageUrl, attacks } = card;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} alt={name} />
        <ul>
          {attacks &&
            attacks.map(({ name, text }) => (
              <li key={`${name}-${text}`}>
                {name} - <i>{text}</i>
              </li>
            ))}
          }}
        </ul>
      </div>
    );
  };

  return <div>{renderCard()}</div>;
};

export default Template;
