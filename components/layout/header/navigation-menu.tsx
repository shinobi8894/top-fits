import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function NavigationMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer flex flex-row items-center">
                <span className="font-sf-impact text-gray">Browse</span>
                <ChevronDown className="text-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-sf-impact">
                <DropdownMenuLabel className="cursor-pointer">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}