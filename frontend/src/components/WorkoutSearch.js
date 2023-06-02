import React, {useEffect, useState} from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const WorkoutSearch = () => {
    return(
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '32px', xs: '24px' } }} mb="49px" textAlign="center">
        Search for exercises you wish to add to your routine<br />
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '900px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '48px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}>
          Search
        </Button>
      </Box>
    </Stack>
    )
}

export default WorkoutSearch;