// const getApiData = () => {
//   return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

// export default getApiData;

//APP ----------------

//FETCH API
// const getApiData = () => {
//   return fetch(
//     `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

// useEffect(() => {
//   if (dataCharacters.length === 0) {
//     getApiData().then((dataFromApi) => {
//       setDataCharacters(dataFromApi);
//     });
//   }
// }, []);
