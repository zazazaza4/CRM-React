import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';

import { AppRouter } from './providers/router';

const App = () => {
  return (
    <VStack className={classNames('app', {}, [])}>
      <HStack max>
        <Sidebar />
        <VStack max>
          <Navbar />
          <AppRouter />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default App;
