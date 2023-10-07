import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetAdvertsQuery } from 'redux/adverts/advertsSlice';
import { selectFilter } from 'redux/filter/filterSelectors';

import { getFilteredAdverts } from '../../components/helpers/getFilteredAdverts';

import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import CustomLoader from '../../components/Loader/Loader';

import { BtnWrapper, LoadMoreBtn } from './Catalog.styled';

const Catalog = () => {
  const filter = useSelector(selectFilter);
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

  const createArrayWithStep = (start, end, step) => {
    return Array.from(
      { length: Math.floor((end - start) / step) + 1 },
      (_, index) => start + index * step
    );
  };

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

  const hundleClickLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const hundleClickRetuntToStart = () => {
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
          <BtnWrapper>
            {totalPages > currentPage && (
              <LoadMoreBtn variant="text" onClick={hundleClickLoadMore}>
                Load more
              </LoadMoreBtn>
            )}
            {currentPage !== 1 && (
              <Button
                variant="text"
                className="load-more__btn"
                onClick={hundleClickRetuntToStart}
              >
                Return to 1 page
              </Button>
            )}
          </BtnWrapper>
        </>
      )}
    </Section>
  );
};

export default Catalog;
