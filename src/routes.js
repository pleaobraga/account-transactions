import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Atom/Loading'

const AccountPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/AccountPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/:accountId?" component={AccountPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
