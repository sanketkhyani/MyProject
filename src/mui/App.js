import Button from "@mui/material/Button";

export default function App() {
    return (
      <div>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>
    );
}