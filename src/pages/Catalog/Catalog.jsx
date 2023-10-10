import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useGetAdvertsQuery } from 'redux/adverts/advertsSlice';
import { selectAdvertsFilter } from 'redux/filters/filtersSelectors';

import { getFilteredAdverts } from 'utils/getFilteredAdverts';
import { createArrayWithStep } from 'utils/createArrayWithStep';

import AdvertsList from 'component/AdvertsList/AdvertsList';
import Filter from 'component/Filter/Filter';
import Section from 'component/kit/Section/Section';
import Button from 'component/kit/Button/Button';
import CustomLoader from 'component/kit/CustomLoader/CustomLoader';

const LoadMoreButton = styled(Button)`
  display: block;
  margin: 100px auto 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 24px;
  margin: auto;
`;

const Catalog = () => {
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
    visibleAdverts = getFilteredAdverts(adverts, filter);
    dataFilters = {
      brands: ['All', ...new Set(adverts.map(({ make }) => make))],
      prices: createArrayWithStep(
        0,
        Math.max(
          ...new Set(
            adverts.map(({ rentalPrice }) => rentalPrice.replace(/(\$)/, ''))
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
      {isLoading && <CustomLoader />}
      {!isLoading && (
        <>
          <Filter filtersList={dataFilters} />
          <AdvertsList list={currentAdvertsData} />
          <ButtonsWrapper>
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
          </ButtonsWrapper>
        </>
      )}
    </Section>
  );
};

export default Catalog;
