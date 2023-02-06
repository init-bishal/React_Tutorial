import React from 'react'
import { Typography } from '@mui/material'
import {Stack} from '@mui/material'
import {ButtonGroup} from '@mui/material'
import {Button} from '@mui/material'
import {ToggleButtonGroup, ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'
import {Text} from '@adobe/react-spectrum'
import Pin from '@spectrum-icons/workflow/PinOff';
import '../../App.css'
import { FormatBoldRounded } from '@mui/icons-material'

const List = () => {            
      const [formats, setFormats]=useState("")
      const handleFormatChange=(event)=>{
          console.log(event.target.value)
           
      }
  return ( 
      // tuts
      <div className='App'>

          <div className='head' style={{width:"200px"}}>
                <h1 style={{color:'green'}}>GeeksforGeeks</h1>
                <strong>
                  React MUI ToggleButtonGroup API
                </strong>
          </div>
          <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
         <ToggleButtonGroup value={formats}
         onChange={handleFormatChange}>
            <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
            <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italics' aria-label='italic'><FormatItalicIcon/></ToggleButton>

         </ToggleButtonGroup>
      </div>
      </div>
  )
}

export default List
