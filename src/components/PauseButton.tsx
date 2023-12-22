/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function PauseButton() {
    return (
        <button 
            className={
                `flex justify-center items-center
                w-6 h-6
                bg-pause-icon bg-center
                bg-no-repeat bg-[length:10px_10px] 
                border border-gray rounded-full`
            }
        ></button>
    )
}