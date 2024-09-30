import StarRatingsItem from "./StarRatingsItem";

export default function StarRatings() {
    return (
        <div className="grid grid-cols-1 gap-10 place-content-center justify-items-center mx-auto p-10 w-screen h-screen ">
            <h2 className="font-bold tracking-widest text-2xl">STAR RATINGS</h2>
            <StarRatingsItem noOfStars={5}>Question 1</StarRatingsItem>
            <StarRatingsItem noOfStars={5}>Question 2</StarRatingsItem>
            <StarRatingsItem noOfStars={5}>Question 3</StarRatingsItem>
        </div>
    )
}