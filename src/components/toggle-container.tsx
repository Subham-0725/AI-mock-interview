import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavigationRoutes from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";

const ToggleContainer = () => {
const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>

          <nav className="gap-7 flex flex-col items-start">
            <NavigationRoutes isMobile />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-bold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleContainer;
