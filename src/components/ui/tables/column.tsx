import { ColumnDef } from '@tanstack/react-table'
import { Members } from '@/types'

export const columns : ColumnDef<Members>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'generation',
        header: 'Generation'
    },
    {
        accessorKey: 'status',
        header: () => <div className='text-right'>Status</div>,
        cell: ({ row }) => <div className='text-right'>{row.getValue('status')}</div>
    }
]