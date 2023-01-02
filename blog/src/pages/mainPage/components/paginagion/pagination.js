import { Wrapper, PageBtn, Underline, Blank } from "./paginationST";

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    PageNumber.push(i);
  }

  return (
    <Wrapper>
      <ul>
        {PageNumber.map((number) => (
          <li key={number}>
            <PageBtn onClick={() => paginate(number)}>{number}</PageBtn>
            {currentPage === number && <Underline></Underline>}
            <Blank></Blank>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default Pagination;
