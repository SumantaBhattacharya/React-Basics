import { useState } from "react";
import "./App.css";
// import SearchBox from "./SearchBox"
// import InfoBox from "./InfoBox";
import WhtherApp from "./WhtherApp";

// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Alert from "@mui/material/Alert";

function App() {
  // const [count, setCount] = useState(0);


  return (
    <div style={{ position: "relative" }}>
      {/* <SearchBox />
      <InfoBox /> */}
      <WhtherApp />
    </div>
  );
}

export default App;

/*
   const [showAlert, setShowAlert] = useState(false);

  const handleDeleteClick = () => {
    setCount((count) => count + 1);
    setShowAlert(true);
    // Hide alert after a few seconds
    setTimeout(() => setShowAlert(false), 2000);
  };

<Button
          variant="outlined"
          size="small"
          color="primary"
          aria-label="delete"
          onClick={handleDeleteClick}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <DeleteIcon fontSize="medium" />
          Outlined {count}
        </Button>
        {showAlert && (
          <Alert severity="error" style={{ marginTop: "1rem" }}>
            Deleted.
          </Alert>
        )}
*/