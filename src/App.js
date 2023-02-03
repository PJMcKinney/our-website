import logo from "./logo.svg";
import "./App.css";
import { Stack, Box } from "@mui/system";
import { Typography, Card } from "@mui/material";

function App() {
  return (
    <Stack>
      <Typography variant="h1" component="h2">
        Our Website
      </Typography>
      <Box>
        <Card variant="outlined">
          <Typography variant="h3">Team Members:</Typography>
          <Box paddingLeft="50px">
            <Typography variant="h4">Adrian</Typography>
            <Typography variant="h4">Agata</Typography>
            <Typography variant="h4">Kyrsti</Typography>
            <Typography variant="h4">Patrick</Typography>
            <Typography variant="h4">PJ</Typography>
            <Typography variant="h4">Wojciech</Typography>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
}

export default App;
