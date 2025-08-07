import Logo from "@/components/custom/logo";
import NavigationMenu from "./navigation-menu";
import ActionButtons from "./action-buttons";

export default function HeaderContent() {
    return (
        <div className="flex flex-row items-center justify-between w-full max-w-[1440px]">
            <div className="flex flex-row gap-10">
                <Logo />
                <NavigationMenu />
            </div>
            <ActionButtons />
        </div>
    );
}