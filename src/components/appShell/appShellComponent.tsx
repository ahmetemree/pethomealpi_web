import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ShopNavbar from '../navbar/ShopNavbar';
import { Outlet } from 'react-router-dom';

function AppShellComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: "20vh" }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"

          />
          <ShopNavbar/>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  );
}

export default AppShellComponent