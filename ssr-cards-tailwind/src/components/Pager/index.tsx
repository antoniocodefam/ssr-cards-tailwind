import { useRouter } from "next/router";
import Button from "../Button";

export interface PagerProps {
  page: number;
  totalPages: number;
}

export default function Pager({ page, totalPages }: PagerProps) {
  const router = useRouter();

  const goToPage = (page: number) =>
    router.push(
      {
        pathname: router.pathname,
        query: { page },
      },
      null,
      { shallow: true }
    );

  return (
    <div className="flex justify-center mt-10">
      <ul className="flex gap-x-3 items-center" title="Pager">
        <li title="First">
          <Button disabled={!(page > 1)} onClick={() => goToPage(1)}>
            &lt;&lt;
          </Button>
        </li>
        <li title="Previous">
          <Button disabled={!(page > 1)} onClick={() => goToPage(page - 1)}>
            &lt;
          </Button>
        </li>
        <li title="Total pages" className="py-2 px-4 ">
          {page > totalPages ? totalPages : page} / {totalPages}
        </li>
        <li title="Next">
          <Button
            disabled={!(page < totalPages)}
            onClick={() => goToPage(page + 1)}
          >
            &gt;
          </Button>
        </li>
        <li title="Last">
          <Button
            disabled={!(page < totalPages)}
            onClick={() => goToPage(totalPages)}
          >
            &gt;&gt;
          </Button>
        </li>
      </ul>
    </div>
  );
}
