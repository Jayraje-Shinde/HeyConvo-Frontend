import { Box, Button, Typography } from '@mui/material'

export default function App() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Theme is working</Typography>
      <Typography variant="body1" color="text.secondary">
        This should be grey
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        This should be purple
      </Button>
    </Box>
  )
}