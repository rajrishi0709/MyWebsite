export const getImageUrl = (path) => {
    console.log("I am here");
  return new URL(`../../assets/${path}`, import.meta.url).href;
  ;
  
};