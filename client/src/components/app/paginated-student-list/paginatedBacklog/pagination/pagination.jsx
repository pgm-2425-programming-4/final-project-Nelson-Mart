export function Pagination({ currentPage, pageCount, onPageChanged }) {
  let pageNumberArray;

  if (pageCount <= 6) {
    pageNumberArray = Array.from({ length: pageCount }, (_, i) => i + 1);
  } else if (currentPage > 3 && currentPage < pageCount - 2) {
    pageNumberArray = [
      1,
      null,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      null,
      pageCount,
    ];
  } else if (currentPage <= 3) {
    pageNumberArray = [1, 2, 3, 4, null, pageCount];
  } else {
    pageNumberArray = [
      1,
      null,
      pageCount - 3,
      pageCount - 2,
      pageCount - 1,
      pageCount,
    ];
  }

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button
        className="pagination-previous"
        disabled={currentPage === 1}
        onClick={() => onPageChanged(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="pagination-next"
        disabled={currentPage === pageCount}
        onClick={() => onPageChanged(currentPage + 1)}
      >
        Next page
      </button>
      <ul className="pagination-list">
        {pageNumberArray.map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === null ? (
              <span className="pagination-ellipsis">&hellip;</span>
            ) : (
              <button
                className={`pagination-link ${
                  pageNumber === currentPage ? "is-current" : ""
                }`}
                aria-label={`Go to page ${pageNumber}`}
                onClick={() => onPageChanged(pageNumber)}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}