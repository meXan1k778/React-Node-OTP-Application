import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ServiceCard } from '../../components/ServiceCard';
import { Button } from '../../components/ui/Button';
import { IService } from '../../types';

import { 
    ServicesPageContainer, 
    PageTitle,
    FilterBar,
    SearchInput,
    ServicesList
 } from './ServicesPage.style';

const servicesData: IService[] = [
    {id: 1, title: 'Sitecostructor.io', promocode: 'itpromocodes1', active: false},
    {id: 2, title: 'Appvision.com', promocode: 'itpromocodes2', active: false},
    {id: 3, title: 'Analytics.com', promocode: 'itpromocodes3', active: false},
    {id: 4, title: 'Logotype', promocode: 'itpromocodes4', active: false},
];

export const ServicesPage = () => {
    const [filterValue, setFilterValue] = useState('');
    const [services, setServies] = useState<IService[]>([]);


    useEffect(() => {
        setServies(servicesData);
    }, []);

    const activateService = (serviceId: number) => {
        const tempServices = [...services];
        tempServices.map(s => (s.id === serviceId) ? s.active = !s.active : s);
        setServies(tempServices);
    };

    const handleCopyPromocode = (promocode: string) => {
        navigator.clipboard.writeText(promocode);
        toast.success('Copied to clipboard!');
    }

    return (
        <ServicesPageContainer>
            <PageTitle>Services</PageTitle>
            <FilterBar>
                <SearchInput 
                    label={'Filter'}
                    value={filterValue} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)} 
                />
                <Button 
                    title={'Reset'}
                    onClick={() => setFilterValue('')}
                />
            </FilterBar>
            <ServicesList>
                {
                    services.length > 0 &&
                    services
                    .filter(service => service.title.includes(filterValue))
                    .map((service) => (
                        <ServiceCard  
                            key={`service-item-${service.id}`}
                            service={service}
                            onActivate={activateService}
                            onCopyPromocode={handleCopyPromocode}
                        />
                    ))
                }
            </ServicesList>
        </ServicesPageContainer>
    )
};