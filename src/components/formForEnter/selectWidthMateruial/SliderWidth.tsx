import * as React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import { getWidthSelector } from '../../../common/selectors'
import { useAppSelector } from '../../../State/Store'

function valuetext(value: number) {
  return `${value}m`
}

export const SliderWidth = ({ register }: any) => {
  const width = useAppSelector(getWidthSelector)
  const min = width.find(item => item.min)
  const max = width.find(item => item.max)

  return (
    <Box sx={{ width: 300, m: 2, mt: 4 }}>
      <Slider
        aria-label="width"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={0.2}
        min={min && min.min}
        max={max && max.max}
        {...register('width', { required: true })}
      />
      <Typography>Width, m</Typography>
    </Box>
  )
}
