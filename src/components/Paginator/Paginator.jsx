import { Button, List, Wrapper } from "./Paginator.styled";

const Paginator = ({ currentPage, itemsPerPage, totalItems, onPageChange, pageNumbersToShow }) => {
  const handlePageChange = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(totalItems / itemsPerPage)) {
      onPageChange(pageNumber);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    const currentPageIndex = pageNumbers.indexOf(currentPage);

    const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
    const end = Math.min(pageNumbers.length - 1, start + pageNumbersToShow - 1);

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <Wrapper>
      <List>
        {getVisiblePageNumbers().map(number => (
          <li key={number}>
            <Button
              onClick={() => handlePageChange(number)}
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </Button>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default Paginator;
