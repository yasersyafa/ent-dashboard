export type Members = {
    uuid: string
    name: string
    email: string
    birthday: string
    generation: 'Gen 18' | 'Gen 19' | 'Gen 17'
    status: 'active' | 'passive' | 'dropped out' | 'graduated'
}