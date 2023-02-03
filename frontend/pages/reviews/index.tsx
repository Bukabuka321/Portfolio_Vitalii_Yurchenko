import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import { FaUserCircle } from "react-icons/fa";

interface IReviews {
  id: number;
  name: string;
  message: string;
}

const Reviews = ({ reviews }: { reviews: IReviews[] }) => {
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    axios
      .post("http://localhost:5050/api/reviews", {
        name,
        message,
      })
      .then((response) => response.data);
  };

  // Declared url link of business id
  const reviewsUrl: string = `http://localhost:5050/api/reviews`;

  // Created a fetcher function for useSWR
  const fetcher = () => fetch(reviewsUrl).then((res) => res.json());

  // Used hook useSWR with interface of IBusiness and paramater: url and fecther function
  const { data } = useSWR<IReviews[]>(reviewsUrl, fetcher);

  return (
    <div className="w-screen h-screen">
      <div className="px-6 lg:flex lg:flex-col lg:items-center ">
        <h1 className="mb-6 text-4xl">Fell free to leave a cooment here!</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-8 mb-6 lg:w-4/6 lg:items-center"
        >
          <input
            type="text"
            placeholder="Firstname"
            className="text-xl w-full h-14 lg:h-11 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Comment"
            className="text-xl w-full h-14 lg:h-20 bg-inputBorder border border-[#0083FF] rounded-xl px-1"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="w-4/6 lg:w-4/6 mb-3 pt-0 self-center">
            <button
              className="text-xl w-full py-5 bg-[#0083FF] rounded-xl"
              type="submit"
            >
              <p className="text-2xl">Send</p>
            </button>
          </div>
        </form>
        <div className="lg:flex lg:flex-col lg:items-start lg:w-full">
          <h2 className="text-3xl mb-6">Reviews:</h2>
          <ul className="flex flex-col gap-y-4 lg:gap-y-8">
            {data?.map((review: IReviews) => (
              <li
                className="flex items-start lg:items-start gap-x-3 lg:gap-x-6"
                key={review.id}
              >
                <div className="mt-2 lg:mt-0">
                  <FaUserCircle className="w-6 h-6 lg:w-16 lg:h-16" />
                </div>
                <div className="flex flex-col justify-start ">
                  <h2 className="lg:text-2xl">Username: {review.name}</h2>
                  <p className="lg:text-xl">Comment: {review.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(): Promise<{ props: { reviews: any; }; }> {
//   // Fetch data from  API
//   const res = await fetch(`http://localhost:5050/api/reviews`);
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { reviews: data } };
// }

export default Reviews;
