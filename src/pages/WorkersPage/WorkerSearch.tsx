import React, { useEffect, useState } from 'react'

import { Box, InputBase, IconButton } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { updateSearchList } from '../../actions/workContractActions'
import { useDispatch } from 'react-redux'

/**
 * @component
 * @desc
 * A searchbar for searching workers.
 */
const WorkerSearch = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  useEffect(() => {
    dispatch(updateSearchList('a'))
  }, [dispatch])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (input.length > 0) {
      dispatch(updateSearchList(input))
    }
  }

  return (
    <Box display='flex' justifyContent='flex-end' alignItems='center' flexWrap='wrap'>
      <form onSubmit={handleSubmit}>
        <Box display='flex' alignItems='center'>
          <InputBase
            placeholder='name'
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <IconButton type='submit' size='large'>
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  )
}

export default WorkerSearch
