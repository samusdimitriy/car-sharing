import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useGetAdvertsQuery } from 'redux/adverts/advertsSlice';
import { selectAdvertsFilter } from 'redux/filters/filtersSelectors';

import { createArrayWithStep } from 'utils/createArrayWithStep';
import { getFilteredAdverts } from 'utils/getFilteredAdverts';

import AdvertsList from 'component/AdvertsList/AdvertsList';
import Filter from 'component/Filter/Filter';
import Button from 'component/kit/Button/Button';
import Section from 'component/kit/Section/Section';
import CustomLoader from 'component/kit/CustomLoader/CustomLoader';

const Container = styled.div`
  position: relative;
  display: flex;
`;

const FilterWrapper = styled.div`
  position: sticky;
  top: 24px;
  left: 0;
  padding: 24px 12px;
  background-color: ${props => props.theme.bgDarkColor};

  height: fit-content;
  border-radius: 0 24px 24px 0;

  & > .filter {
    flex-direction: column;
    align-items: flex-start;

    width: fit-content;

    margin-bottom: 0;
  }
`;

const AdvertsWrapper = styled.div`
  width: 100%;

  & > button {
    display: block;
    margin: auto;
    margin-top: 44px;
  }
`;

const LoadMoreButton = styled(Button)`
  display: block;
  margin: 100px auto 0 auto;
`;

const Favorites = () => {
  const filter = useSelector(selectAdvertsFilter);
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  const [currentPage, setCurrentPage] = useState(1);

  let dataFilters = {
    brands: [],
    prices: [],
  };
  let visibleAdverts = useMemo(() => {}, []);

  const limitAdverts = 8;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading) {
    const favoritedAdverts = adverts.filter(({ favorite }) => favorite);

    visibleAdverts = getFilteredAdverts(favoritedAdverts, filter);

    dataFilters = {
      brands: ['All', ...new Set(favoritedAdverts.map(({ make }) => make))],
      prices: createArrayWithStep(
        0,
        Math.max(
          ...new Set(
            favoritedAdverts.map(({ rentalPrice }) =>
              rentalPrice.replace(/(\$)/, '')
            )
          )
        ),
        10
      ),
    };

    totalAdverts = visibleAdverts.length;
    totalPages = !totalAdverts ? 1 : Math.ceil(totalAdverts / limitAdverts);
  }

  const currentAdvertsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * limitAdverts;
    const lastPageIndex = firstPageIndex + limitAdverts;

    return visibleAdverts?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, visibleAdverts]);

  const handleClickLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleClickReturnToStart = () => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  return (
    <Section>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Container>
          <AdvertsWrapper>
            <AdvertsList list={currentAdvertsData} />
            <div className="buttons__wrapper">
              {totalPages > currentPage && (
                <LoadMoreButton
                  variant="text"
                  className="load-more__btn"
                  onClick={handleClickLoadMore}
                >
                  Load more
                </LoadMoreButton>
              )}
              {currentPage !== 1 && (
                <LoadMoreButton
                  variant="text"
                  className="load-more__btn"
                  onClick={handleClickReturnToStart}
                >
                  Return to 1 page
                </LoadMoreButton>
              )}
            </div>
          </AdvertsWrapper>
        </Container>
      )}
    </Section>
  );
};

export default Favorites;
