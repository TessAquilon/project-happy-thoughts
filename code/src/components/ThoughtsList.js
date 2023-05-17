/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const ThoughtsList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section>
      {thoughtsList.map((thought) => (
        <div className="thought" key={thought._id}>
          <h4>{thought.message}</h4>
          <button
            className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
            type="button"
            onClick={() => handleLike(thought._id)}>
              ❤️
          </button>
          <span>x {thought.hearts}</span>
          <span className="time">{formatDistanceToNow(
            new Date(thought.createdAt),
            Date.now(),
            { addSuffix: true }
          )}
              &nbsp;ago
          </span>
        </div>
      )).reverse()}
    </section>
  );
}