import axios from "axios";
export const getAddresses = async (address) => {
  const res = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=pk.eyJ1IjoicHN1Z2FuZGhyYWoiLCJhIjoiY2trNW4yNzU5MGNxZzJvbGtrb29sOTNzMSJ9.MsIjKqQ7jJnKJllu1Oc5gg&limit=5`
  );
  return res.data.features.map((feature) => feature.place_name);
};
