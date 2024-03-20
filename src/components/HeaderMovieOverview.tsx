import { useState } from "react";

interface HeaderMovieOverviewProps {
  movieOverview: string;
}

function isTextOverLimit(inputString: string, charLimit: number) {
  if (inputString) {
    return inputString.length > charLimit;
  }
}

function truncateString(inputString: string, charLimit: number) {
  if (inputString && isTextOverLimit(inputString, charLimit)) {
    const truncatedString = inputString.slice(0, charLimit).trimEnd();
    return truncatedString + "...";
  }
  return inputString;
}

function HeaderMovieOverview({ movieOverview }: HeaderMovieOverviewProps) {
  const [isShowMore, setShowMore] = useState(false); //state to handle showing/truncating of overview text of movie
  const charTruncationLimit = 150; //truncation will take place after theses many characters.

  const toggleShowMore = () => {
    setShowMore(!isShowMore);
  };

  return (
    <>
      {isShowMore ? (
        <p className="text-gray-300 w-full md:w-[50%] sm:w-[75%] xs:w-[100%]">
          {movieOverview}
        </p>
      ) : (
        <>
          <p className="text-gray-300 w-full md:w-[50%] sm:w-[75%] xs:w-[100%]">
            {truncateString(movieOverview, charTruncationLimit)}

            {/* will show 'Show More' btn only if text over specified limit */}
            {isTextOverLimit(movieOverview, charTruncationLimit) && (
              <button
                className="text-gray-500 hover:text-gray-300 outline-none"
                onClick={toggleShowMore}
              >
                Show More
              </button>
            )}
          </p>
        </>
      )}
    </>
  );
}

export default HeaderMovieOverview;
