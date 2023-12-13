import React from 'react'
import { Box, Input, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box display='flex' alignItems='center'>
      <Search />
      <Input
        placeholder='Search'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Box>
  )
}

export default SearchBar
