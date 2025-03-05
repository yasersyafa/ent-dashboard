import { Route, Routes } from 'react-router'
import HomePage from '@/pages/home/home-page'
import DashboardPage from '@/pages/admin/dashboard-page'
import DashboardLayout from '@/layouts/dashboard-layout'

// auth pages
import LoginPage from './pages/auth/login-page'

// member pages
import MemberListPage from '@/pages/admin/members/index'
import MemberDetailPage from '@/pages/admin/members/show'
import MemberCreatePage from '@/pages/admin/members/create'
import MemberEditPage from '@/pages/admin/members/edit'

// generation page
import GenerationPage from '@/pages/admin/generations/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />

        {/* member pages */}
        <Route path='/dashboard/members' element={<MemberListPage />} />
        <Route path='/dashboard/members/:slug' element={<MemberDetailPage />} />
        <Route path='/dashboard/members/create' element={<MemberCreatePage />} />
        <Route path='/dashboard/members/:slug/edit' element={<MemberEditPage />} />

        {/* page generation */}
        <Route path='/dashboard/generation' element={<GenerationPage />} />
      </Route>
    </Routes>
  )
}

export default App