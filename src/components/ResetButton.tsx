/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function PlayButton() {
    return (
        <button 
            className={
                `flex justify-center items-center
                w-10 h-10
                bg-reset-icon bg-center
                bg-no-repeat bg-[length:15px_15px] 
                border border-gray rounded-full`
            }
        ></button>
    )
}