import { Box, Paper, Typography, Button, Stack } from '@mui/material'

export default function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>

      {/* Sidebar — uses #282b30 */}
      <Box sx={{ width: 240, bgcolor: '#282b30', padding: 2 }}>
        <Typography variant="h6">Rooms</Typography>
        <Typography variant="body2" color="text.secondary"># general</Typography>
      </Box>

      {/* Chat area — uses background.paper = #36393e */}
      <Paper sx={{ flex: 1, padding: 3, borderRadius: 0 }}>
        <Typography variant="h6">Welcome</Typography>
        <Typography color="text.secondary">This is the chat area</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained">Primary button</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Paper>

    </Box>
  )
}