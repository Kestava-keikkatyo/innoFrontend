import React, { useEffect, useState } from "react"

import {
  Box,
  InputBase,
  IconButton
} from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { updatFormList } from "../../actions/formListActions"
import { useDispatch } from "react-redux"
import { roles } from "../../types/types"

const INIT_SEARCH_TYPE = 'myforms'

/**
 * @component
 * @desc
 * A searchbar for searching forms.
 */
const FormSearch = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")



  useEffect(() => {
    dispatch(updatFormList("", INIT_SEARCH_TYPE))
  }, [dispatch])


  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (input.length > 0) {

    }
  }

  const handleChange = (event: any) => {
    dispatch(updatFormList("",event.target.value))
  }

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="wrap"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder="search by title"
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

export default FormSearch