import React from 'react';
import { CopyIcon } from '../../environment/icons/Copy';
import { IService } from '../../types';

import {
    ServiceCardContainer,
    CardInfoBlock,
    CardTitle,
    CardDescription,
    PromoCodeInput,
    ToggleActiveButton
} from './ServiceCard.style';

interface ServiceCardProps {
    service: IService;
    onActivate: (serviceId: number) => void;
    onCopyPromocode: (promocode: string) => void;
}

export const ServiceCard = ({service, onActivate, onCopyPromocode}: ServiceCardProps) => {

  

    return (
        <ServiceCardContainer>
            <CardInfoBlock>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>Description</CardDescription>
            </CardInfoBlock>
            <PromoCodeInput
                label={'PROMOCODE'}
                value={service.promocode}
                onChange={() => {}}
                readOnly={true} 
                rightIcon={<CopyIcon />}
                onRightIconClick={() => onCopyPromocode(service.promocode)}
            />
            <ToggleActiveButton 
                title={service.active === false ? 'Activate bonus' : 'Activated'}
                onClick={() => onActivate(service.id)}
                variant="primary"
            />
        </ServiceCardContainer>
    )
}