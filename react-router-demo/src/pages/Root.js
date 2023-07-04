import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

// Outlet component marks the place where the child route elements should be rendered to.

function RootLayout() {
    return <>
        <MainNavigation />
        <main >
            <Outlet />
        </main>
    </>;
}

export default RootLayout;