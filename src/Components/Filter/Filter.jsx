// import React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { mainContext } from "../../Context/MainContext";

// const Filter = ({ type, setType }) => {
//   return (
//     <div>
//       <FormControl>
//         <FormLabel id="demo-radio-buttons-group-label">Select</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-radio-buttons-group-label"
//           defaultValue="female"
//           name="radio-buttons-group"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <FormControlLabel value="USA" control={<Radio />} label="USA" />
//           <FormControlLabel
//             value="South Korea"
//             control={<Radio />}
//             label="South Korea"
//           />
//           <FormControlLabel
//             value="Jamaica"
//             control={<Radio />}
//             label="Jamaica"
//           />
//           <FormControlLabel value="Mexico" control={<Radio />} label="Mexico" />
//           <FormControlLabel value="Greece" control={<Radio />} label="Greece" />
//           <FormControlLabel
//             value="Thailand"
//             control={<Radio />}
//             label="Thailand"
//           />
//           <FormControlLabel
//             value="Maldives"
//             control={<Radio />}
//             label="Maldives"
//           />

//           <FormControlLabel value="all" control={<Radio />} label="All Menu" />
//         </RadioGroup>
//       </FormControl>
//     </div>
//   );
// };

// export default Filter;

const Filter = () => {
  const [type, setType] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  const { fetchByParams } = useContext(mainContext);

  useEffect(() => {
    let currentParams = Object.fromEntries([]);
    if (true) {
      fetchByParams(type);
    }
  }, [type]);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="USA" control={<Radio />} label="USA" />
          <FormControlLabel
            value="South Korea"
            control={<Radio />}
            label="South Korea"
          />

          <FormControlLabel
            value="Thailand"
            control={<Radio />}
            label="Thailand"
          />
          <FormControlLabel
            value="Maldives"
            control={<Radio />}
            label="Maldives"
          />

          <FormControlLabel value="all" control={<Radio />} label="All Menu" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Filter;
