import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';

import { AppRouter } from './providers/router';

const App = () => {
  return (
    <VStack className={classNames('app', {}, [])}>
      <HStack align="start" className="app-container" max>
        <Sidebar />
        <VStack max align="center" className="page-wrapper">
          <Navbar />
          <AppRouter />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default App;
