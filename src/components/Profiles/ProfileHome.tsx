import Heading from "@/components/Heading";
import CodingCard from "./CodingCard";

const CodingHome = (): JSX.Element => {
  return (
    <div id="profile" className="container mx-auto px-6 py-12 mt-7">
      <div className="w-full text-center mb-8">
        <Heading title="Coding Profiles" />
      </div>

      <div className="display flex flex-wrap w-full justify-center gap-x-[10rem] relative">
        <CodingCard
          title="codeforces/hima31"
          link="https://codeforces.com/profile/hima31"
          platform="Codeforces"
          logo="\Codeforces.svg"
          descriptionPoints={[
            "Rating: 1625 (Expert) ",
            "Active Contestant",
            "Best Global Rank: 336 (Div 3) ",
          ]}
        />
        <CodingCard
          title="codechef/hima31"
          link="https://www.codechef.com/users/hima31"
          platform="codechef"
          logo="\codechef.svg"
          descriptionPoints={[
            "Rating: 1917 (4⭐)",
            "Active Contestant",
            "Best Global Rank: 275 (Div 2) ",
          ]}
        />
        <CodingCard
          title="leetcode/hima31"
          link="https://leetcode.com/u/hima31/"
          platform="LeetCode"
          logo="\leetcode.svg"
          descriptionPoints={[
            "Rating: 1979 (Knight)",
            "850+ Problems Solved",
            "Top 2% Global Rank",
          ]}
        />

        <CodingCard
          title="atcoder/hima31"
          link="https://atcoder.jp/users/hima31"
          platform="AtCoder"
          logo="\atcoder.png"
          descriptionPoints={["Rating: 814 (6 Kyu)", "Regular Contestant"]}
        />
      </div>
    </div>
  );
};

export default CodingHome;
