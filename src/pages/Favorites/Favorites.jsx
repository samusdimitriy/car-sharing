import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useGetAdvertsQuery } from 'redux/adverts/advertsSlice';
import { selectAdvertsFilter } from 'redux/filters/filtersSelectors';

import { getFilteredAdverts } from 'utils/getFilteredAdverts';

import AdvertsList from 'component/AdvertsList/AdvertsList';
import Button from 'component/kit/Button/Button';
import Section from 'component/kit/Section/Section';
import CustomLoader from 'component/kit/CustomLoader/CustomLoader';

const Container = styled.div`
  position: relative;
  display: flex;
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

  let visibleAdverts = useMemo(() => {}, []);

  const limitAdverts = 8;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading) {
    const favoritedAdverts = adverts.filter(({ favorite }) => favorite);

    visibleAdverts = getFilteredAdverts(favoritedAdverts, filter);

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
