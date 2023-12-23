/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function PauseButton() {
    return (
        <button 
            className={
                `flex justify-center items-center
                w-12 h-12
                bg-pause-icon bg-center
                bg-no-repeat bg-[length:20px_20px] 
                border border-gray rounded-full`
            }
        ></button>
    )
}