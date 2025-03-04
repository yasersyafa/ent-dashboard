import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { columns } from '@/components/ui/tables/column'
import { DataTable } from "@/components/ui/tables/data-table"
import { Members } from '@/types'
import { Link } from 'react-router'

const getMember = (): Members[] => {
    return [
        {
            uuid: '#0001',
            name: 'Muhammad Yaser Syafa Al-Machdi',
            email: 'yasersyafa.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '22 - Desember - 2004',
            status: 'active'
        },
        {
            uuid: '#0002',
            name: 'Akmal Luthfi',
            email: 'alfi.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '22 - Desember - 2004',
            status: 'active'
        },
        {
            uuid: '#0003',
            name: 'Hansdika Nugroho',
            email: 'hansdika.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '22 - Desember - 2004',
            status: 'active'
        },
        {
            uuid: '#0004',
            name: 'Kenzie Nararya',
            email: 'zienararya.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '22 - Desember - 2004',
            status: 'active'
        },
        {
            uuid: '#0005',
            name: 'Akhmad Tegar Ramadhani',
            email: 'tigreal.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '22 - Desember - 2004',
            status: 'active'
        },
        {
            uuid: '#0006',
            name: 'Falih Aryadhika Endrianto',
            email: 'fadhea04.ent@gmail.com',
            generation: 'Gen 18',
            birthday: '26 - November - 2004',
            status: 'active'
        },
    ]
}

const Index = () => {
    return (
        <section>
            <div className='flex max-md:flex-col-reverse gap-5 items-center justify-between mt-5 mb-10'>
                <Input type='search' placeholder='Search member' className='md:min-w-xl max-w-full md:max-w-3xl' />
                <Button asChild className='max-md:w-full'>
                    <Link to={'/dashboard/members/create'}>Add Member +</Link>
                </Button>
            </div>
            <DataTable columns={columns} data={getMember()} />
        </section>
    )
}

export default Index