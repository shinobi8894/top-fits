import Logo from "../logo";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col gap-2 items-center justify-center">
            <span className="text-xl animate-pulse font-oswald uppercase text-primary">Loading...</span>
        </div>
    )
}