import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import { getContent as actionGetContent } from '../../redux/ContentReducer'
import ErrorPage from '../ErrorPage'
import './ContentPage.scss'

const ContentPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector((state) => state.content)

  const getContent = useCallback(() => dispatch(actionGetContent()), [dispatch])

  useEffect(() => {
    getContent()
  }, [])

  return pageContent.errorContent ? (
    <ErrorPage />
  ) : pageContent.content ? (
    <main className="page page-content">
      <Card title={pageContent.content.title} text={pageContent.content.text} />
    </main>
  ) : (
    <Loading />
  )
}

export default ContentPage
