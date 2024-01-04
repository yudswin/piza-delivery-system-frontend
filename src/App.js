import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/index'
import Default from './components/DefaultComponents/Default'
import FooterComponent from './components/FooterComponents/FooterComponent'
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode'
import * as UserService from './services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
import AdminComponent from './components/AdminComponents/AdminComponent'
import Loading from './components/LoadingComponent/Loading'


function App() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector(state => state.user)

  useEffect(() => {
    setIsLoading(true)
    let storageData = localStorage.getItem('accessToken')
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      const decoded = jwtDecode(storageData);
      if (decoded?.id) {
        handleGetDetailUser(decoded?.id, storageData);
      }
    }
    setIsLoading(false)
  })

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const token = localStorage.getItem('accessToken');
    const decoded = jwtDecode(token);
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.accessToken}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  const handleGetDetailUser = async (id, token) => {
    try {
      const res = await UserService.getDetailUser(id, token)
      dispatch(updateUser({ ...res?.data, accessToken: token }))
      setIsLoading(false)
      // console.log(res?.data)
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <div>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const checkAdmin = !route.isShowAdmin || user.isAdmin
              const Footer = route.isShowFooter ? FooterComponent : () => null
              const Layout = route.isShowHeader ? Default : Fragment
              return (
                <Route key={route.path} path={checkAdmin && route.path} element={
                  <Layout>
                    <Page />
                    <Footer />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  )
}

export default App