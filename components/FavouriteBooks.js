import { useState } from 'react';
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


import Title from './Title';   


export default function FavouriteBooks(props) {

  const [searchTitle, setSearchTitle ] = useState("")
  let [searchTitleList, setSearchTitleList] = useState([...props.books])

 function searchFunction(e) {

  setSearchTitle(e.target.value)

    let newsearchTitleList = [...props.books]

// console.log(searchTitleList)
console.log([...props.books])
// console.log(newsearchTitleList)
console.log(searchTitle)

    if(searchTitle.trim() !=="") {
     newsearchTitleList = newsearchTitleList.filter((book) => {
      
      let bookName = book.title.toLowerCase()
      let searchValue = searchTitle.trim().toLowerCase()

      if (bookName.includes(searchValue)) {
        return true
       
      }
      return false
   
    // console.log(bookName)
    // console.log(searchValue)
     })

  
    }


console.log(newsearchTitleList)

setSearchTitleList(newsearchTitleList)
  }
  

  return <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Title>Favourite Books</Title>
      <TextField
            id="searchTitle"
            name="searchTitle"
            label="search title"
            variant="standard"
            onChange={searchFunction}
            value={searchTitle}
            sx={{marginBottom: "1rem", width: "12rem"}}
          />


      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            searchTitle === "" ?
            (props.books.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.rating}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))) :
            searchTitleList.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.rating}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))

          }
         
          
        </TableBody>
      </Table>

  </Paper>
}

