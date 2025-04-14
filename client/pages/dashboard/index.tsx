import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <main>
      Dashboard
    </main>
  )
}

DashboardPage.getLayout = function (page: ReactElement) {
  return (
    <div>
      {page}
    </div>
  )
}

export default DashboardPage;