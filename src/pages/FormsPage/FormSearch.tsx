import React, { useEffect, useState } from "react"

import {
  Box,
  InputBase,
  IconButton
} from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { updatFormList } from "../../actions/formListActions"
import { useDispatch } from "react-redux"
import { useTranslation } from 'react-i18next';

const INIT_SEARCH_TYPE = 'myforms'

/**
 * @component
 * @desc
 * A searchbar for searching forms.
 */
const FormSearch = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const { t } = useTranslation();


  useEffect(() => {
    dispatch(updatFormList("", INIT_SEARCH_TYPE))
  }, [dispatch])


  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (input.length > 0) {

    }
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
            placeholder={t('search_by_title')}
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <IconButton type="submit" size="large">
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
}

export default FormSearch