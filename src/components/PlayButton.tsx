/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function PlayButton() {
    return (
        <button 
            className={
                `flex justify-center items-center
                ml-2 w-12 h-12
                bg-play-icon bg-center
                bg-no-repeat bg-[length:20px_20px] 
                border border-gray rounded-full`
            }
        ></button>
    )
}