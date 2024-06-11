import { Link, Head } from '@inertiajs/react';
import MyGuestLayout from '@/GuestLayout/MyGuestLayout';
import Headers from '@/Components/GuestComponents/headers';
import NewsBanner from '@/Components/GuestComponents/NewsBanner';
import ServicesBaner from '@/Components/GuestComponents/servicesBaner';
import Mainpoint from '@/Components/GuestComponents/mainpoint';
import SectionContenst from '@/Components/GuestComponents/sectionContenst';
import NewNews from '@/Components/GuestComponents/newNews';

export default function Welcome({ auth, newNews}) {
    
    console.log(newNews)
    return (
        <>
            <Head title="Welcome" />
            <MyGuestLayout>
                <Headers />
                <Mainpoint />
                <ServicesBaner />
                <SectionContenst />
                <NewsBanner />
                <NewNews
                    newNews={newNews}
                />
            </MyGuestLayout>
        </>
    );
}
