import { userData } from '@/components/data'
import { createTheme ,ThemeProvider } from '@mui/material/styles'
import MaterialReactTable from 'material-react-table'
import { useMemo } from 'react'

const table = () => {


  const columns = useMemo(()=>[

    {
accessorKey:'name.firstName',
header:'First Name'
    },
    {
accessorKey:'name.lastName',
header:'Last Name'
    },
    {
accessorKey:'address',
header:'Address'
    },
    {
accessorKey:'city',
header:'City'
    },
    {
accessorKey:'state',
header:'State'
    },

  ],[])

const theme= useMemo(()=>createTheme(
  {
palette:{
  mode:'dark'
}
  }
),[])


  return (
    <div className='rounded-lg overflow-hidden' >
      <ThemeProvider theme={theme}>
      <MaterialReactTable columns={columns} data={userData} />
      </ThemeProvider>
    </div>
  )
}

export default table