import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';

const DashboardPage: NextPageWithLayout = () => {
  const a: Number = 1;

  return (
    <main>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum magnam
      qui saepe. Assumenda doloribus, iste esse nisi sunt nulla ullam at
      reiciendis, suscipit ipsum distinctio neque, facere tempora dolore
      perspiciatis? Explicabo fugiat vitae optio. Porro molestias perferendis,
      sunt corporis tenetur dolorum similique provident, quisquam earum a
      laudantium optio! Dolores incidunt ipsum sequi quaerat error quas hic in
      quam aspernatur nihil. Eligendi voluptates dolorum, repellendus
      consectetur quod ab illo rem, pariatur, quas nihil architecto delectus
      cumque corrupti quo! In inventore, est error repudiandae omnis eveniet
      pariatur laboriosam recusandae fuga numquam illo.
    </main>
  );
};

DashboardPage.getLayout = function (page: ReactElement) {
  return <div>{page}</div>;
};

export default DashboardPage;
