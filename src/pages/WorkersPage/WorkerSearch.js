import React, { useState } from 'react'

import {
  Box,
  InputBase,
  IconButton,
} from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const WorkerSearch = ({ fetchWorkers }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input.length > 0) {
      fetchWorkers(input)
    }
  }

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="wrap">
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder="name"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  )
}

export default WorkerSearch