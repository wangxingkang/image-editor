import { usePageTitle } from '@/hooks/usePageTitle';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  usePageTitle();

  return (
    <Outlet />
  );
}
