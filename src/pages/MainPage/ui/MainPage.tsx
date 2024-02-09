import { Page } from '@/widgets/Page';

import { CustomerBlock } from './CustomerBlock/CustomerBlock';
import { PageHeader } from './PageHeader/PageHeader';

import cls from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Page data-testid="MainPage">
      <PageHeader className={cls.pageHeader} />
      <CustomerBlock />
    </Page>
  );
};

export default MainPage;
