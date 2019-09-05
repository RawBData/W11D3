import { getChirps, postLikeToChirp, deleteLikeFromChirp } from '../utils/chirps';

export const RECEIVE_CHIRPS = 'RECEIVE_CHIRPS';
export const RECEIVE_LIKED_CHIRPS = 'RECEIVE_LIKED_CHIRPS';
export const RECEIVE_SINGLE_CHIRP = 'RECEIVE_SINGLE_CHIRP';


const receiveChirps = chirps => ({
  type: RECEIVE_CHIRPS,
  chirps,
});

const receiveSingleChirp = chirp => ({
  type: RECEIVE_SINGLE_CHIRP,
  chirp,
});

const receiveLikedChirps = chirps => ({
  type: RECEIVE_LIKED_CHIRPS,
  chirps,
});


//Fetch all chirps
export const fetchChirps = () => dispatch => getChirps()
  .then(chirps => dispatch(receiveChirps(chirps)));

//Like and Unlike Chirps
export const likeChirp = id => dispatch => postLikeToChirp(id)
  .then(chirp => dispatch(receiveSingleChirp(chirp)));

export const unLikeChirp = id => dispatch => deleteLikeFromChirp(id)
  .then(chirp => dispatch(receiveSingleChirp(chirp)));


//Fetch all chirps liked by user
export const fetchLikedChirps = () => dispatch => getLikedChirps()
  .then(chirps => dispatch(receiveLikedChirps(chirps)));