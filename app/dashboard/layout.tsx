import SideNav from '@/components/ui/SideNav';

export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row flex-1">
                <SideNav />
                <main className="flex-1">{children}</main>
            </div>
            
        </div>
    );
}

interface Props {
    children: React.ReactNode;
}




