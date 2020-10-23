import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loading'

const WelcomePage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const ContentPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "contentPage" */ './pages/ContentPage')
    }
    ErrorComponent={() => ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route path="/content" component={ContentPage} />
          <Route exact path="/" component={WelcomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
