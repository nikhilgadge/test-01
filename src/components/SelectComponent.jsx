import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectComponent = ({ route, setRoute, routeIds }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setRoute(event.target.value);
  };
  return (
    <>
      <h2>Select Routes</h2>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Routes</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={route}
          onChange={handleChange}
          label="Age"
        >
          {routeIds &&
            routeIds.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectComponent;
