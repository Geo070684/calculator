import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppSelector } from '../../../State/Store'

export const SelectListMaterial = () => {
  const list = useAppSelector(state => state.data.filter(item => item.type === 'list'))
  const [age, setAge] = React.useState('')

  console.log(list)
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 240, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Material</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Material"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}