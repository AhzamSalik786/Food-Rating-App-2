import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField)

export default function CustomizedInputs() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate>
      <ValidationTextField
        className={classes.margin}
        label='Name'
        required
        variant='outlined'
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        id='validation-outlined-input'
      />
    </form>
  )
}
