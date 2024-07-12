import React from 'react'
import Header from '../../components/Header/Header'
import ErrorBoundary from '../../features/ErrorBoundary/ErrorBoundary'
import Modal from '../../components/Modal/Modal'
import CardCollection from './../../components/CardCollection/CardCollection';

export default function Root() {
  return (
    <div className="root-component">
      <Header />
      <ErrorBoundary fallback={<Modal />} >
        <CardCollection />
      </ErrorBoundary>
    </div>
  )
}
