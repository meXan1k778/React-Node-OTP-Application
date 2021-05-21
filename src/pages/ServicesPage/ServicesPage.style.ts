import styled from 'styled-components';
import { Input } from '../../components/ui';
import { Colors, Fonts } from '../../environment';

export const ServicesPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
`;

export const PageTitle = styled.h1`
    font-size: 39px;
    font-weight: 300;
    color: ${Colors.primaryDark};
    font-family: ${Fonts.rubik};
    margin-bottom: 16px;
`;

export const FilterBar = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 24px;
`;

export const SearchInput = styled(Input)`
    margin-right: 8px;
`;

export const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;