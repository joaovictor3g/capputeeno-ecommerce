import { Arrows, PaginationContainer, PaginationNumbers } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [1, 2, 3, 4, 5];

export function Pagination() {
  return (
    <PaginationContainer>
      <PaginationNumbers>
        {pages.map((page) => (
          <button key={page} className="page-number" data-active={page === 1}>
            {page}
          </button>
        ))}
      </PaginationNumbers>
      <Arrows>
        <button className="prev" disabled>
          <ChevronLeft size={18} />
        </button>
        <button className="next">
          <ChevronRight size={18} />
        </button>
      </Arrows>
    </PaginationContainer>
  );
}
