/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_SOMETHING,
  LOAD_SOMETHING_SUCCESS,
  LOAD_SOMETHING_ERROR,
} from './constants';

/**
 * Load the *__*, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SOMETHING
 */
export function loadSomethings() {
  return {
    type: LOAD_SOMETHING,
  };
}

/**
 * Dispatched when the *__*-ies are loaded by the request saga
 *
 * @param  {array} item The *__* data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function itemsLoaded(item, username) {
  return {
    type: LOAD_SOMETHING_SUCCESS,
    item,
    username,
  };
}

/**
 * Dispatched when loading the *__* fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_SOMETHING_ERROR passing the error
 */
export function thingLoadingError(error) {
  return {
    type: LOAD_SOMTHING_ERROR,
    error,
  };
}
